
<script>
  import {mapGetters, mapMutations, mapState} from 'vuex'

  export default {
    computed: {
      ...mapState(['activePopup', 'currentSlide']),
      ...mapGetters(['currentData'])
    },

    methods: {
      ...mapMutations(['POPUP_HIDE']),

      // Close popup when click without popup content
      popupAction(e) {
        let el = e.target;

        // Polyfill for IE:
        if (!Element.prototype.matches) Element.prototype.matches = Element.prototype.msMatchesSelector;
        if (!Element.prototype.closest) Element.prototype.closest = function (selector) {
          while (el) {
            if (el.matches(selector)) return el;
            el = el.parentElement;
          }
        };

        if (!el.closest('#popup > div')) this.POPUP_HIDE();
      }
    },

    /**
     * This function render DOM three from popup json data
     * DOM will rendered such as json structure
     * Each elements will have necessary classNames from json keys
     **/
    render(h) {
      const data = this.currentData.popup[this.activePopup];

      function renderList(data, className, parentClassName) {
        const isString = typeof data === 'string' || typeof data === 'number';
        const isArray = Array.isArray(data);
        const isObject = typeof data === 'object' && !isArray;

        switch (true) {
          case isString:
            // Set numbered className if render Array list
            if (typeof className === 'number') className = `${parentClassName}-${className + 1}`;

            return <div class={className} domPropsInnerHTML={data}></div>
          break;

          case isArray:
            return <div class={className}>{ data.map((item, index) => renderList(item, index, className)) }</div>
          break;

          case isObject:
            return <div class={className}>{ Object.keys(data).map(key => renderList(data[key], key)) }</div>
        }
      }

      return (
        <section id="popup" class={{ 'active': this.activePopup }} on-touchend={ this.popupAction }>
          <transition name="show">
            {this.activePopup && (
              <div class={`popup-content popup-${this.activePopup} ${this.currentSlide.id}`}>
                <button class="btn-popup-hide" on-touchend={ this.POPUP_HIDE }/>
                { Object.keys(data).map(item => renderList(data[item], item)) }
              </div>
            )}
          </transition>
        </section>
      )
    }
  };
</script>

<style lang="scss" scoped>

  #popup {
    visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;

    width: 100%;
    height: 100%;

    @include flexCentered;

    background-color: rgba(0, 0, 0, 0.0);
    transition: background-color .5s, visibility .5s;

    &.active {
      visibility: visible;
      background-color: rgba(0, 0, 0, 0.4);
    }
  }

  .show-enter-active, .show-leave-active {
    transition: opacity .4s, transform .4s;
  }

  .show-enter, .show-leave-to {
    opacity: 0;
    transform: scale(.8)
  }

  .show-enter-to, .show-leave {
    opacity: 1;
    transform: scale(1)
  }

  .popup-content {
    position: relative;
    background-color: white;
    border-radius: 0 100px 0 100px;
    box-shadow: -17.4px 19.3px 90px rgba(0, 0, 0, 0.4);

    font-size: 28px;
  }

  .btn-popup-hide {
    position: absolute;
    top: -26px;
    right: -41px;

    width: 63px;
    height: 63px;
    background-image: url(../../assets/media/images/global/icon-close.png);

    &:active {
      opacity: .4;
    }
  }

  .popup-info {
    width: 1865px;
    height: 1120px;

    background-image: url(../../assets/media/images/global/popup-info-graph.png);
    background-repeat: no-repeat;
    background-position: 100px 245px;

    .description {
      position: absolute;
      top: 70px;
      left: 100px;

      font-size: 38px;

      /deep/ span {
        text-transform: uppercase;
      }

      /deep/ b {
        text-transform: uppercase;
        font-weight: 500;
        color: $color-accent-2;
      }
    }

    .values {
      position: absolute;
      left: 170px;
      bottom: 150px;

      height: 712px;
      width: 1060px;

      display: flex;
      align-items: flex-end;
      justify-content: space-around;

      // Column
      > div {
        position: relative;
        width: 67px;

        // Value
        > div {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translate(-50%, -95%);

          font-size: 70px;

          &:after {
            content: '%';
            font-size: 38px;
            color: inherit;
          }
        }

        &:nth-child(1), &:nth-child(5) {
          color: $color-accent-2;
          background-image: linear-gradient(180deg, #55aa2a 0%, #55aa2a 0%, #7dc846 69%, #b2e68d 100%);
        }

        &:nth-child(2), &:nth-child(6) {
          color: #7b6c5b;
          background-image: linear-gradient(180deg, #b19a80 0%, #d3c8bc 100%);
        }

        &:nth-child(3), &:nth-child(7) {
          color: #626571;
          background-image: linear-gradient(180deg, #a9a9b2 0%, #dddde1 53%, #e5e5e5 100%);
        }

        &:nth-child(4), &:nth-child(8) {
          color: #6a6a6a;
          background-image: linear-gradient(180deg, #86868e 0%, #e5e5e5 100%);
        }

        &:nth-child(1) { height: 6px }
        &:nth-child(2) { height: 300px }
        &:nth-child(3) { height: 435px }
        &:nth-child(4) { height: 161px; margin-right: 60px; }
        &:nth-child(5) { height: 703px; font-weight: 500; }
        &:nth-child(6) { height: 150px; font-weight: 500; }
        &:nth-child(7) { height: 32px; font-weight: 500; }
        &:nth-child(8) { height: 15px; font-weight: 500; }
      }
    }

    .legend {
      position: absolute;
      right: 100px;
      bottom: 150px;

      height: 415px;
      width: 325px;

      display: flex;
      flex-flow: column;
      justify-content: space-between;

      > div {
        position: relative;

        font-weight: 300;
        font-size: 38px;

        &:before {
          content: '';
          position: absolute;
          top: 50%;
          left: 0;
          transform: translate(-160%, -50%);

          width: 36px;
          height: 36px;

          border-radius: 50%;
        }
      }
      &-1:before { background-image: linear-gradient(45deg, #55aa2a 0%, #b1e58b 100%) }
      &-2:before { background-image: linear-gradient(45deg, #b19a80 0%, #d3c8bc 100%) }
      &-3:before { background-image: linear-gradient(45deg, #a9a9b2 0%, #dddde1 53%, #e5e5e5 100%) }
      &-4:before { background-image: linear-gradient(45deg, #86868e 0%, #e5e5e5 100%) }
    }

    .names {
      position: absolute;
      left: 170px;
      top: 170px;
      width: 1118px;

      display: flex;
      justify-content: space-between;
      align-items: flex-end;

      > div {
        padding-bottom: 20px;
        font-size: 38px;

        width: 500px;
        height: 884px;

        font-weight: 300;

        display: flex;
        align-items: flex-end;
        justify-content: center;
      }

      .square-message {
        width: 597px;

        font-weight: 500;
        color: $color-accent-2;
        background-color: transparent;
      }
    }
  }


</style>
