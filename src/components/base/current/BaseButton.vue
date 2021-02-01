<template functional>
  <button
    :class="[
      'base-button',
      { [`base-button--${props.type}`]: props.type },
      { [`base-button--${props.shape}`]: props.shape },
      { 'base-button--block': props.block },
      { 'base-button--disabled': data.attrs && data.attrs.disabled },
      { 'base-button--loading': props.loading },
    ]"
    v-bind="data.attrs"
    :type="props.submit"
    v-on="listeners"
  >
    <span>
      <slot v-if="!props.loading">{{ props.text }}</slot>
      <slot v-else-if="props.loading" name="loading">{{ props.loadingText }}</slot>
    </span>
  </button>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'base-button',
  props: {
    type: {
      required: false,
      default: 'default',
      type: String,
    },
    shape: {
      required: false,
      default: '',
      type: String,
    },
    block: {
      required: false,
      default: false,
      type: Boolean,
    },
    disabled: {
      required: false,
      default: false,
      type: Boolean,
    },
    submit: {
      required: false,
      default: false,
      type: Boolean,
    },
    loading: {
      required: false,
      default: false,
      type: Boolean,
    },
    loadingText: {
      required: false,
      default: 'Загрузка...',
      type: String,
    },
    text: {
      required: false,
      default: '',
      type: String,
    },
  },
});
</script>

<style lang="scss">
  @import '@/assets/styles/_variables.scss';

  .base-button {
    display: inline-block;
    background: transparent;
    border: 0px solid transparent;
    outline: none;
    cursor: pointer;
    transition: all .12s ease-in-out;

    &--block {
      width: 100%;
    }

    &:not(&--link) {
      padding: 0 65px;
      min-height: 56px;
      border-radius: $input-border-radius;
      box-shadow: 0px 2px 4px rgba(37, 32, 49, 0.08), 0px 4px 8px rgba(44, 39, 56, 0.08);
    }

    &--default {
      background-color: #fff;
      border: 1px solid $text-color--gray-light;

      &:hover {
        border-width: 2px;
        border-color: $button-color--primary;
        color: $button-color--primary;
      }
    }

    &--primary {
      background: $button-color--primary;
      color: $button-color--primary-text;

      &:hover {
        background: $button-color--primary-hover;
      }

      &:active {
        background: $button-color--primary-active;
      }
    }

    &--link {
      color: $button-color--link;

      &:hover {
        color: $button-color--link-hover;
      }

      &:active {
        color: $button-color--link-active;
      }
    }
    // border-radius: 6px;

    & > span {
      display: inline-block;
      pointer-events: none;
      font-weight: 500;
      font-size: 16px;
    }

  }

</style>
