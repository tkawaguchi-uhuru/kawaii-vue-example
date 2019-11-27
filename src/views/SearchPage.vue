<template>
  <div>
    <!-- content -->
    <search-box :searchStr="searchStr" @updated="updatedEvent"></search-box>
    <result-list :searchStr="searchStr"></result-list>
  </div>
</template>

<script>
import SearchBox from '../components/SearchBox'
import ResultList from '../components/ResultList'

export default {
  name: 'SearchPage',
  components: {
    SearchBox,
    ResultList
  },
  data () {
    return {
      searchStr: 'oya'
    }
  },
  methods: {
    updatedEvent (v) {
      this.searchStr = v
    }
  }
}
</script>

<style>
</style>
