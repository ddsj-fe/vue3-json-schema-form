import { defineComponent, computed } from "vue";
import { SchemaTypes, FiledPropsDefine } from "./types";
// import StringField from "./fields/StringField.vue";
import StringField from "./fields/StringField";
// import NumberField from "./fields/NumberField.vue";
import NumberField from "./fields/NumberField";
import ObjectField from "./fields/ObjectField";
import ArrayField from "./fields/ArrayField";

import { retrieveSchema } from "./utils";

export default defineComponent({
  name: "SchemaItem",
  props: FiledPropsDefine,

  setup(props) {
    const retrievedSchemaRef = computed(() => {
      const { schema, rootSchema, value } = props;
      return retrieveSchema(schema, rootSchema, value);
    });

    return () => {
      const { schema, rootSchema, value } = props;
      const type = schema.type;
      const retrievedSchema = retrievedSchemaRef.value;
      let Component: any;

      switch (type) {
        case SchemaTypes.STRING:
          Component = StringField;
          break;
        case SchemaTypes.NUMBER:
          Component = NumberField;
          break;
        case SchemaTypes.OBJECT: {
          Component = ObjectField;
          break;
        }
        case SchemaTypes.ARRAY: {
          Component = ArrayField;
          break;
        }

        default:
          console.warn(`${type} is not supported`);
          break;
      }
      return <Component {...props} schema={retrievedSchema} />;
    };
  },
});
