<script lang="tsx">
import {
  computed,
  CSSProperties,
  defineComponent,
  inject,
  PropType,
  provide,
  reactive,
  toRefs,
} from "vue";
import BaseMenu from "./components/BaseMenu.vue";
import OverflowWrap from './components/OverflowWrap.vue';
import { SiderInjectionKey } from "../layout/context";
import { LevelInjectionKey, MenuInjectionKey } from "./context";

export default defineComponent({
  name: "Menu",
  components: {
    BaseMenu,
  },
  inheritAttrs: false,
  props: {
    /**
     * @zh 菜单的主题
     * @en Menu theme
     */
    theme: {
      type: String as PropType<"light" | "dark">,
    },
    /**
     * @zh 菜单的模式
     * @en The mode of menu
     */
    mode: {
      type: String as PropType<"vertical" | "horizontal" | "pop" | "popButton">,
      default: "vertical",
    },
  },
  setup(props, { attrs, slots }) {
    const { theme: propTheme, mode } = toRefs(props);

    const siderContext = inject(SiderInjectionKey, undefined);
    const siderCollapsed = computed(() => siderContext?.collapsed || false);
    const theme = computed(
      () => propTheme?.value || siderContext?.theme || "light"
    );

    // 截断上下文
    provide(MenuInjectionKey, undefined as any);
    provide(LevelInjectionKey, undefined as any);

    return () => (
      <BaseMenu
        {...props}
        {...attrs}
        v-slots={{
          ...slots,
          default:
            mode.value === 'horizontal' && slots.default
              ? () => <OverflowWrap>{slots.default?.()}</OverflowWrap>
              : slots.default,
        }}
        theme={theme.value as any}
        inTrigger={false}
        siderCollapsed={siderCollapsed.value}
        isRoot
      />
    );
  },
});
</script>
