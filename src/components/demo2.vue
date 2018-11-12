<template>
    <div>
        <ul>
            <li v-for="(item, index) in renderData" :key="index">
                <span style="marginRight: 25px">Author: {{item.author}}</span>
                <span>Title: {{item.title}}</span>
            </li>
        </ul>
    </div>
</template>
<script>
import { getDemo2Data } from '../services/demoService'
export default {
  data() {
    return {
      renderData: []
    }
  },
  mounted() {
    getDemo2Data()
      .then(res => {
        this.renderData = res.data
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>
