<template>
  <BaseFormItem :invalid="$v.$error" :errors="errors" label="Имя">
    <template #input>
      <BaseInput
        :value="$v.value.$model"
        placeholder="Введите ваше имя"
        @update:value="onValueChanged"
      />
    </template>
  </BaseFormItem>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { helpers } from 'vuelidate/lib/validators';
// ---

const onlyLetters = helpers.regex('onlyLetters', /^[a-zA-Zа-яА-Я-/\s]*$/);

@Component({
  name: 'login-input-name',
  components: {},
  validations: {
    value: {
      onlyLetters,
    },
  },
})
export default class LoginInputName extends Vue {
  @Prop({ required: true, default: '' })
  value!: string | number

  // eslint-disable-next-line class-methods-use-this
  private get errors() {
    return [
      {
        key: 'invalid_value',
        invalid: !this.$v.value.onlyLetters,
        message: 'Введено некорректное значение',
      },
    ];
  }

  private onValueChanged(value: string | number) {
    this.$v.value.$touch();
    this.$emit('input', value);
  }
}
</script>
