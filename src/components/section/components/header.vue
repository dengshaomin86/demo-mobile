// stroke-linecap: butt/round/square

<template>
  <header>
    <div class="back" @click="$back">
      <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" version="1.1">
        <path d="M13,8 L2,20 L13,32 M2,20 L30,20" fill="none" stroke="currentColor" stroke-width="3"></path>
      </svg>
    </div>
    <slot>
      <h1>header</h1>
    </slot>
  </header>
</template>

<style scoped lang="scss">
  header {
    width: 100%;
    height: 1.2rem;
    flex: 0 0 1.2rem;
    display: flex;
    align-items: center;
    position: relative;
    @include bg-panel;

    .back {
      display: flex;
      align-items: center;
      padding-left: 15px;

      svg {
        height: 0.8rem;
        @include color;
      }
    }

    h1 {
      text-transform: uppercase;
      font-size: 0.42rem;
    }
  }

</style>

<script>
  export default {
    name: "v-header"
  }
</script>
