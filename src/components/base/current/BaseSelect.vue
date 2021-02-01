<template>
  <div class="input-field select" @blur="open = false">
    <div
      class="selected"
      :class="{ open: open, placeholder: selectedOption.placeholder}"
      @click="open = !open"
    >
      {{ selectedOption.label || placeholder }}
      <IconChevronDown class="select-arrow" />
    </div>
    <div class="items" :class="{ selectHide: !open }">
      <div
        v-for="option of options"
        :key="option.key"
        :class="{
          placeholder: option.placeholder,
          disabled: option.disabled,
          selected: option.key === selectedOption.key,
        }"
        @click="selectOption(option)"
      >
        {{ option.label }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  Component, Vue, Prop, Watch,
} from 'vue-property-decorator';
import { SelectOptions } from '@/Global.types';

import IconChevronDown from '@/components/base/current/Icons/IconChevronDown.vue';

import getUnicId from '@/utils/getUnicId.helpers';

@Component({
  name: 'base-select',
  components: { IconChevronDown },
})
export default class BaseSelect extends Vue {
  @Prop({
    required: true,
  })
  value?: string | number

  @Prop({
    required: false,
  })
  default?: string | number

  @Prop({
    required: false,
    default: '',
  })
  placeholder?: string

  @Prop({ required: true })
  options!: SelectOptions[]

  open = false

  selectedOption?: SelectOptions | null = null;

  // eslint-disable-next-line class-methods-use-this
  private findOptionByKeyOrByValue(option: SelectOptions, parameter: string | number = '') {
    return [option.key, option.value].includes(parameter);
  }

  private emitValueToParent(option: SelectOptions | null | undefined) {
    if (option) {
      if (this.$listeners['update:value']) {
        this.$emit('update:value', option.value);
      } else {
        this.$emit('input', option.value);
      }
    }
  }

  private selectOption(option: SelectOptions) {
    if (!option.placeholder || !option.disabled) {
      this.open = false;
      this.emitValueToParent(option);
    }
  }

  @Watch('value', { immediate: true })
  private parseValue() {
    if (this.value) {
      this.selectedOption = this.options
        .find((option) => this.findOptionByKeyOrByValue(option, this.value));
    } else if (this.default) {
      this.selectedOption = this.options
        .find((option) => this.findOptionByKeyOrByValue(option, this.default));
    } else if (this.placeholder) {
      this.selectedOption = {
        key: `${getUnicId(12)}-placeholder`,
        value: '',
        label: this.placeholder || '',
        placeholder: true,
      };
    } else {
      this.selectedOption = {
        key: `${getUnicId(12)}-empty`,
        value: 'awdawd',
        label: '',
        disabled: true,
      };
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/_variables.scss';

.input-field.select {
  position: relative;
  width: 100%;
  height: 52px;

  text-align: left;
  outline: none;
  transition: .1s ease-in-out;

  & > .selected {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    padding-left: 1em;

    background-color: #fff;
    border: 1px solid #DBE2EA;
    border-radius: $input-border-radius;
    box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.04);
    transition: .1s ease-in-out;

    cursor: pointer;
    user-select: none;

    &.open {
      border: 2px solid $color-active;
    }

    &.placeholder {
      color: $text-color--active;
    }

    & .select-arrow{
      position: absolute;
      top: 22px;
      right: 1em;
      color: $text-color--gray-light;
    }

    &:hover {
      & .select-arrow {
      color: $color-active;

      }
    }
  }

  & .items {
    color: #fff;
    border-radius: 6px;
    overflow: hidden;
    position: absolute;
    background-color: #fff;
    border: 1px solid #DBE2EA;

    box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.04), 0px 20px 20px rgba(44, 39, 56, 0.04);
    margin-top: 4px;
    left: 0;
    right: 0;
    z-index: 1;
    transition: .2s ease-in-out;

    opacity: 1;
    max-height: 200px;
    transform: translateY(0px);

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;

      height: 52px;
      padding-left: 16px;
      color: $text-color--primary;

      cursor: pointer;
      user-select: none;

      &.placeholder, &.disabled {
        pointer-events: none;
      }

      &.placeholder {
        background: #f9f9f9ce !important;
        opacity: .5;
      }

      &.disabled {
        color: $text-color--gray;
      }

      &.selected {
        pointer-events: none;
      }

      &:hover, &.selected {
        background-color: lighten($color-active-light, 3%);
      }

      &:hover {
        background-color: $color-active-light;
      }
    }

    &.selectHide {
      max-height: 0;
      opacity: 0;
      transform: translateY(-5px);
      user-select: none;
      pointer-events: none;
    }
  }
}

</style>
