<template>
  <div>
    <!-- content -->
    <search-box></search-box>
    <result-list></result-list>
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
  }
}
</script>

<style>
</style>
