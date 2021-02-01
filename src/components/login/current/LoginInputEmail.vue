<template>
  <BaseFormItem :invalid="$v.$error" :errors="errors" label="Email">
    <template #input>
      <BaseInput
        :value="$v.value.$model"
        placeholder="Введите ваше Email"
        @update:value="onValueChanged"
        @blur="({ target: { value } }) => validateValue(value)"
      />
    </template>
  </BaseFormItem>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { email, required } from 'vuelidate/lib/validators';
// ---

@Component({
  name: 'login-input-email',
  components: {},
  validations: {
    value: {
      email,
      required,
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
        key: 'required_value',
        invalid: !this.$v.value.required,
        message: 'Пожалуйста, введите ваш Email',
      },
      {
        key: 'invalid_value',
        invalid: !this.$v.value.email,
        message: 'Введено некорректное значение',
      },
    ];
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private validateValue(value: string) {
    this.$v.value.$touch();
    this.$emit('input', value);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private onValueChanged(value: string) {
    this.$emit('input', value);
  }
}
</script>
