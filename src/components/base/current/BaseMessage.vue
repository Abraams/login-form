<template functional>
  <small :class="`base-message--${props.type}`">
    <slot>{{ props.message }}</slot>
  </small>
</template>

<style lang="scss">

.base-message {
  @import '@/assets/styles/_variables.scss';

  font-size: 14px;
  padding: 8px 0 0;

  &--error{
    color: $text-color--error;
  }

  &--success{
    color: $text-color--success;
  }
}
</style>
