import Vue from 'vue';

const requireComponent = require.context(
  '.',
  true,
  /Base[\w-]+\.vue$/,
);

requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName);
  const componentName = fileName
    .replace(/\.\w+$/, '')
    .split('/')
    .slice(-1)[0];

  Vue.component(componentName, componentConfig.default || componentConfig);
});
