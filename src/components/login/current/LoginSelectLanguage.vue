/* eslint-disable class-methods-use-this */
<template >
  <BaseFormItem label="Язык">
    <template #input>
      <BaseSelect
        :value="value"
        default="ru-RU"
        :options="languagesList"
        placeholder="Выберете язык локализации"
        @update:value="option => $emit('input', option)"
      />
    </template>
  </BaseFormItem>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

import { SelectOptions } from '@/Global.types';

@Component({
  name: 'login-select-language',
  components: {},
})
export default class LoginInputName extends Vue {
  @Prop({ required: true, default: '' })
  value!: string

  languagesList: SelectOptions[] = [
    {
      key: 'ru-RU',
      value: 'ru-RU',
      label: 'Русский',
    },
    {
      key: 'en-EN',
      value: 'en-EN',
      label: 'English',
    },
  ]
}
</script>
