<template>
  <svg viewBox="0 0 100 100" :class="{'active':flag}">
    <rect x="0" y="30" fill="#fff" width="100" height="40" ry="20"></rect>
    <circle r="30" fill="#aaa" cx="30" cy="50"></circle>
  </svg>
</template>

<style scoped lang="scss">
  svg {
    width: 1rem;
    cursor: pointer;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);

    circle {
      transition: 0.5s;
    }

    &.active {
      circle {
        cx: 70;
        fill: #00d3ff;
      }
    }
  }

  [data-theme="theme-default"] {
    rect {
      fill: #ccc;
    }
  }

</style>

<script>
  export default {
    name: "v-btn",
    props: ['flag'],
    data() {
      return {}
    },
  }
</script>
