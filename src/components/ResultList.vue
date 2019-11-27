<template>
  <div>結果リスト</div>
</template>

<script>
export default {
  name: 'ResultList',
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.p-list {
  margin: 0 16px 40px;
  &__item {
    width: 100%;
    background: #fff;
    border-radius: 4px;
    filter: drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.2));
    margin: 0 0 16px;
    padding: 16px;
    text-align: left;
    color: rgba(0, 0, 0, 0.87);

    .p-title {
      font-size: 24px;
      margin: 8px 0;
    }

    .p-text {
      font-size: 14px;
      letter-spacing: 0.02em;
      line-height: 20px;
      color: rgba(0, 0, 0, 0.6);
      margin: 0;
    }
  }
}
</style>
