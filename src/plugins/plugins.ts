import type { VNode, DirectiveBinding } from "vue";
export default {
  setup() {},
  directives: {
    //按钮权限 v-permissions
    permission: {
      bind: function (dom: HTMLElement, data: DirectiveBinding, vNode: VNode) {
        let permissions = vNode.context.$route.meta.permission; //当前账号拥有的按钮权限列表
        let values = data.value; //当前按钮所需权限
        let flag = true;
        if (values) {
          values = values.split(",");
          values.forEach((item: string) => {
            if (!permissions.includes(item)) {
              flag = false;
            }
          });
        }
        if (!flag) {
          try {
            dom.parentNode && dom.parentNode.removeChild(dom);
          } catch (error) {
            dom.style.display = "none";
          }
        }
      },
    },
  },
};
