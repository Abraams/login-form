<template functional>
    <div class="base-card" :class="data.staticClass">
        <slot />
    </div>
</template>

<style lang="scss">
@import '@/assets/styles/_variables.scss';

.base-card {
    padding: 40px 30px;
    background: #FFFFFF;
    box-shadow: 0px 12px 24px rgba(44, 39, 56, 0.02), 0px 32px 64px rgba(44, 39, 56, 0.04);
    border-radius: 24px;
}
</style>
