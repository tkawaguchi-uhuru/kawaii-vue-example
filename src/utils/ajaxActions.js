import axios from 'axios'
export const ajaxActions = {
  async queryYouTubeData (searchStr) {
    // API 接続設定
    const options = {
      apikey: 'AIzaSyBhy1j7Mg9XsG1NVQ6bmOjJZjB1v5s3MmU',
      encoded: encodeURI(searchStr),
      url () {
        return `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${options.apikey}&q=${options.encoded}`
      }
    }
    console.log('url= ', options.url())

    // API コールと結果を非同期待ち
    const response = await axios.get(options.url())

    // 戻りデータをパース
    const _data = response.data.items.map((item) => {
      return Object.assign(
        item.snippet,
        {
          id: item.id.videoId,
          body: item.description,
          img: item.snippet.thumbnails.medium.url
        }
      )
    })
    console.log('_data= ', _data)
    return _data
  }
}
