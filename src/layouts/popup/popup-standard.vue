<script type="text/jsx">
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

            return <div class={className} domPropsInnerHTML={data}/>

          case isArray:
            return <div class={className}>{data.map((item, index) => renderList(item, index, className))}</div>;

          case isObject:
            return <div class={className}>{Object.keys(data).map(key => renderList(data[key], key))}</div>
        }
      }

      return (
        <section id="popup" class={{'active': this.activePopup}} on-touchend={this.popupAction}>
          <transition name="slide-top">
            {this.activePopup && (
              <div class={`popup-content popup-${this.activePopup} ${this.currentSlide.id}`}>
                <button class="btn-popup-hide" on-touchend={this.POPUP_HIDE}>
                  <IconClose/>
                </button>
                {Object.keys(data).map(item => renderList(data[item], item))}
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

    width: 100%;
    height: 100%;

    @include flexCentered;

    background-color: rgba(17, 29, 48, 0.0);
    transition: background-color .5s, visibility .5s;

    &.active {
      visibility: visible;
      background-color: rgba(17, 29, 48, 0.6);
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
    border-radius: 40px;
    box-shadow: 8.9px 9.5px 90px rgba(15, 22, 32, 0.56);

    font-size: 28px;
  }

  .btn-popup-hide {
    position: absolute;
    right: 25px;
    top: 25px;
    z-index: 2;

    width: 100px;
    height: 100px;

    svg {
      width: 45px;
      height: 45px;

      stroke: $color-accent-1;
      stroke-linecap: round;
    }

    &:active {
      background-color: rgba($color-accent-1, .2);
      svg {
        stroke: $color-accent-2;
      }
    }
  }

  .title {
    margin: initial;
    padding: initial;

    width: initial;

    font-weight: bold;
    font-size: 28px;
  }

  .links {
    font-size: 28px;

    div {
      counter-increment: index;
      position: relative;

      margin: 20px 0;
      margin-left: 15px;

      &:before {
        content: counter(index) '.';

        position: absolute;
        top: 0;
        left: -50px;

        width: 50px;
        height: 30px;

        @include flexCentered;

        font-weight: bold;
      }
    }
  }

  .content {
    font-size: 26px;

    > div {
      margin: 25px 0;
    }
  }

  .footnotes {
    > div {
      position: relative;
      margin-left: 15px;

      /deep/ span {
        position: absolute;
        top: 0;
        left: -25px;

        font-size: 1.4em;
      }
    }
  }

</style>
