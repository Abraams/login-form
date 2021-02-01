<template functional>
  <label class="base-form-item">
    <div class="base-form-item__label" v-if="props.label || slots.label">
      <slot name="label">{{ props.label }}</slot>
    </div>
    <div class="base-form-item__input">
      <slot>
        <slot name="input"/>
      </slot>
    </div>
    <div class="base-form-item__messages" v-if="props.invalid || slots.message">
      <slot name="message">
        <template v-for="error in props.errors">
          <BaseMessage
            v-if="error.invalid"
            :key="error.key"
            :message="error.message"
            type="error"
          />
        </template>
      </slot>
    </div>
  </label>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'base-form-item',
  inject: {
    components: {
      default: {},
    },
  },
  props: {
    label: {
      type: String,
      required: false,
      default: '',
    },
    invalid: {
      type: Boolean,
      default: false,
    },
    errors: {
      type: Array,
      required: false,
    },
  },
});
</script>

<style lang="scss">
@import '@/assets/styles/_variables.scss';

.base-form-item {
  display: block;

  &__label {
    display: block;
    color: $text-color--gray;
    font-weight: 500;

    & + * {
      margin-top: 7px;
    }
  }

  &__input .input-field {
    display: block;
    min-height: 52px;
    font-size: 16px;
    box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.04);
  }

  &__messages {
    position: absolute;
  }

  & + & {
    margin-top: 33px;
  }
}
</style>
