<template>
  <BaseFormItem :invalid="$v.$error" :errors="errors" label="Телефон">
    <template #input>
      <BaseInput
        :value="$v.value.$model"
        placeholder="Введите ваш телефон"
        @update:value="onValueChanged"
        @blur="({ target: { value } }) => validateValue(value)"
      />
    </template>
  </BaseFormItem>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { helpers } from 'vuelidate/lib/validators';
// ---

const phoneNumberRegex = /^(\+7|7|8)?[\s\\-]?\(?[489][0-9]{2}\)?[\s\\-]?[0-9]{3}[\s\\-]?[0-9]{2}[\s\\-]?[0-9]{2}$/;
const phoneNumber = helpers.regex('phoneNumber', phoneNumberRegex);

@Component({
  name: 'login-input-phone',
  components: {},
  validations: {
    value: {
      phoneNumber,
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
        invalid: !this.$v.value.phoneNumber,
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
