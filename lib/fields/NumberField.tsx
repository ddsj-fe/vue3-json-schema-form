import { defineComponent } from "vue";
import { FiledPropsDefine } from "../types";

export default defineComponent({
  name: "NumberFeild",
  props: FiledPropsDefine,
  setup(props) {
    const handleChange = (e: any) => {
      props.onChange(e.target.value);
    };
    return () => (
      <input value={props.value as any} type="number" onInput={handleChange} />
    );
  },
});
