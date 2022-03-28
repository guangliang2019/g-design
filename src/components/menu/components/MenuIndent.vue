<template>
  <span v-if="level > 1">
    <span
      v-for="index in level - 1"
      :key="index"
      :class="`${prefixCls}-indent`"
      :style="`width: ${levelIndent}px`"
    />
  </span>
</template>

<script>
import { getPrefixCls } from "@/components/_utils/global-config";
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "MenuIndent",
  props: {
    level: {
      type: Number,
      default: 1,
    },
  },
  setup() {
    const prefixCls = getPrefixCls('menu');
    //const menuContext = use
  }
});
</script>

<style></style>
