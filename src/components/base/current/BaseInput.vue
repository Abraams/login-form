<template functional>
  <input
    class="input-field input"
    v-bind="data.attrs"
    :value="props.value"
    :style="{ width: `${ data.attrs.width || '100%' }` }"
    v-on="listeners"
    @input="listeners['update:value']($event.target.value)"
  >
</template>

<style lang="scss">
@import '@/assets/styles/_variables.scss';

.input-field.input {
  display: block;
  padding-left: 16px;
  padding-right: 8px;
  background: #FFFFFF;
  border: 1px solid #DBE2EA;
  border-radius: 6px;
  transition: .1s ease-in-out;

  &:focus {
    border: 2px solid $color-active;
  }

  &::placeholder {
      color: $text-color--active;
  }
}
</style>
