/**
* This function render DOM three from props data
* DOM will rendered such as json structure
* Each elements will have necessary classNames from json keys
**/

<script type="text/jsx">

  export default {
    name: "json-to-dom",
    props: {
      json: {
        type: Object,
        required: true
      },
      bem: Boolean
    },

    render(h) {
      const json = this.json;

      const getClassName = ({parentClassName = '', className = ''}) => {
        return this.bem && parentClassName ? `${parentClassName}__${className}` : className
      };

      const jsToDOM = ({data, className, parentClassName}) => {

        const isString = typeof data === 'string' || typeof data === 'number';
        const isArray = Array.isArray(data);
        const isObject = typeof data === 'object' && !isArray;

        // return div single element
        if (isString) {
          const isListItem = typeof className === "number";
          let newClassName = this.bem && parentClassName
            ? parentClassName
            : className;

          if (isListItem) {
            newClassName = '';
          }

          return <div class={newClassName} domPropsInnerHTML={data}/>
        }

        /**
         * call jsToDOM() for each element in array/object recursive
         */
        const newClassName = getClassName({parentClassName, className});

        if (isArray) {
          return <div class={newClassName}>
            {data.map((item, index) => jsToDOM({
                data: item,
                parentClassName: getClassName({parentClassName, className}),
                className: index
              })
            )}</div>;
        }

        if (isObject) {
          return <div class={newClassName}>
            {Object.keys(data).map(key => jsToDOM({
                data: data[key],
                parentClassName: getClassName({parentClassName, className}),
                className: key
              })
            )}
          </div>
        }
      };

      return (
        <div>{Object.keys(json).map(item => jsToDOM({data: json[item], className: item}))}</div>
      )
    }

  };
</script>
