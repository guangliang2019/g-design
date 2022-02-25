<template>
  <slot />
</template>

<script>
import { defineComponent, provide, reactive, toRefs } from "vue";
import { configProviderInjectionKey } from './context';

export default defineComponent({
  name: 'ConfigProvider',
  props: {
    /**
     * @zh 组件类名前缀
     * @en Component classname prefix
     */
    prefixCls: {
      type: String,
      default: 'g',
    },
  },
  setup(props, {slots}) {
    const {prefixCls} = toRefs(props)

    provide(
      configProviderInjectionKey,
      reactive({
        slots,
        prefixCls,
      })
    )
  }
})

</script>

<style>

</style>