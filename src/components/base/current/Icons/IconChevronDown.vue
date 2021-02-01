<template functional>
  <i class="base-icon" :class="data.staticClass">
    <svg
      :width="props.width"
      :height="props.height"
      :viewBox="`0 0 ${props.width} ${props.height}`"
      :fill="props.color"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8 6.58579L14.2929 0.292893C14.6834 -0.0976311 15.3166
      -0.0976311 15.7071 0.292893C16.0976 0.683418 16.0976 1.31658
      15.7071 1.70711L8.70711 8.70711C8.31658 9.09763 7.68342 9.09763
      7.29289 8.70711L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683418
      0.292893 0.292893C0.683418 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L8
      6.58579Z" :fill="props.color"/>
    </svg>
  </i>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    width: {
      type: Number,
      default: 16,
    },
    height: {
      type: Number,
      default: 9,
    },
    color: {
      type: String,
      default: 'currentColor',
    },
  },
});
</script>

<style lang="scss">
  .base-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    transition: .1s ease-in-out;

    * {
      transition: inherit;
    }
  }
</style>
