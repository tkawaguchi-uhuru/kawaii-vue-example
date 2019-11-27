<template>
  <div>検索ボックス</div>
</template>

<script>
export default {
  name: 'SearchBox',
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.p-search-box {
  background: #f1f1f1;
  border-radius: 4px;
  display: inline-block;
  position: relative;
  margin: 0 0 24px;

  input {
    width: 288px;
    height: 56px;
    border-radius: 4px;
    padding: 0 48px 0 16px;
    letter-spacing: 0.01em;
    color: rgba(0, 0, 0, 0.87);
  }

  &__icon {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    padding: 12px;
    cursor: pointer;
  }

  &::after {
    content: '';
    width: 100%;
    height: 1px;
    display: block;
    background: transparent;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  &:hover {
    background: #ebebeb;
    border-radius: 4px 4px 0 0;

    &::after {
      background: #727272;
    }
  }
}
</style>
