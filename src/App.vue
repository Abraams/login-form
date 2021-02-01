<template>
  <div id="app">
    <div class="container">
      <LoginForm />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LoginForm from '@/components/login/current/LoginForm.vue';

@Component({
  components: {
    LoginForm,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import '~normalize.css/normalize.css';
@import '@/assets/styles/_variables.scss';
@import '@/assets/styles/baseStyles.scss';

#app {
  margin-top: 50px;
}
</style>
