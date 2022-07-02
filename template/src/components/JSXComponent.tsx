import { CreateElement, defineComponent } from "vue"

export default defineComponent({
  name: 'JSXComponent',

  data() {
    return {
      msg: "This is \"JSX\" Component"
    }
  },

  render(h: CreateElement) {
    return <h2>{this.msg}</h2>
  }
})
