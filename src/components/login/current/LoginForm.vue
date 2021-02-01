<template>
  <BaseCard class="login-card">
    <form @submit.prevent>
      <LoginInputName v-model="form.name"/>
      <LoginInputEmail v-model="form.email"/>
      <LoginInputPhone v-model="form.phone"/>
      <LoginSelectLanguage v-model="form.language"/>

      <BaseFormItem>
        <span><BaseButton type="link">Отправить</BaseButton> dasdaw</span>
      </BaseFormItem>

    </form>
  </BaseCard>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LoginInputName from '@/components/login/current/LoginInputName.vue';
import LoginInputEmail from '@/components/login/current/LoginInputEmail.vue';
import LoginInputPhone from '@/components/login/current/LoginInputPhone.vue';
import LoginSelectLanguage from '@/components/login/current/LoginSelectLanguage.vue';

import { LoginForm } from '@/Global.types';

@Component({
  components: {
    LoginInputName,
    LoginInputEmail,
    LoginInputPhone,
    LoginSelectLanguage,
  },
})
export default class App extends Vue {
  form: LoginForm = {
    name: '',
    email: '',
    phone: '',
    language: '',
  }
}
</script>

<style lang="scss">
  @import '@/assets/styles/_variables.scss';

  .login-card {
    max-width: 400px;
    margin: 0 auto;
  }
</style>
