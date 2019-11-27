<template>
  <div>
    <ul class="p-list">
      <li v-for="item in searchResults" :key="item.id" class="p-list__item">
        <img :src="item.img" :alt="item.title">
        <h3 class="p-title">{{item.title}}</h3>
        <p class="p-text">{{item.body}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ResultList',
  data () {
    return {
      dummyData: [
        { id: 0, title: 'データ1', body: 'データ1の内容です。123', img: '' },
        { id: 1, title: 'データ2', body: 'データ2の内容です。456', img: '' },
        { id: 2, title: 'データ3', body: 'データ3の内容です。789', img: '' }
      ]
    }
  },
  props: {
    searchStr: {
      type: String
    }
  },
  computed: {
    searchResults: {
      get () {
        return this.dummyData.filter((item) => {
          const pattern = `${this.searchStr}`
          const regexp = new RegExp(pattern)
          return regexp.test(item.title) || regexp.test(item.body)
        })
      }
    }
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
