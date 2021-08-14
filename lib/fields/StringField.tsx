import { FiledPropsDefine } from "../types";
import { defineComponent } from "vue";

export default defineComponent({
  name: "StringFeild",
  props: FiledPropsDefine,
  setup(props) {
    const handleChange = (e: any) => {
      console.log(e);
      props.onChange(e.target.value);
    };
    return () => (
      <input type="text" value={props.value as any} onInput={handleChange} />
    );
  },
});
