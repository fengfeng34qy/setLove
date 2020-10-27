<template>
  <div class="Home">
    <div>
      <div>
        <el-input class="hersname" v-model="hersValue" size="small" placeholder="请输入内容">
          <template class="hersname-template" slot="prepend">需要表白的人</template>
        </el-input>
      </div>
      <div>
        <el-input class="yourname" v-model="yourValue" size="small" placeholder="请输入内容">
          <template slot="prepend">你的姓名</template>
        </el-input>
      </div>
      <div>
        <el-button type="primary" @click="send">确定</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Home',
  data () {
    return {
      hersValue: '',
      yourValue: ''
    }
  },
  methods: {
    send () {
      console.log('sds')
      axios.post('http://www.sunfengfeng.com/createBiaobai', {})
        .then((res) => {
          console.log(res)
        })
    }
  }
}
</script>

<style>
.yourname > div {
  width: 84px;
  text-align: center;
}
.hersname > div {
  width: 84px;
  text-align: center;
}
</style>
<style scoped>
</style>
