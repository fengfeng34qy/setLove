<template>
  <div class="Home">
    <div class="title">设置</div>
    <div>
      <div class="item-box">
        <el-input class="hersname" v-model="hersValue" size="small" maxlength="4" placeholder="请输入内容">
          <template class="hersname-template" slot="prepend">需要表白的人</template>
        </el-input>
      </div>
      <div class="item-box">
        <el-input class="yourname" v-model="yourValue" size="small" maxlength="4" placeholder="请输入内容">
          <template slot="prepend">你的名字</template>
        </el-input>
      </div>
      <!-- <div class="item-box">
        <el-input class="yourname" v-model="content" size="small" placeholder="暂不支持" :disabled="true">
          <template slot="prepend">表白内容</template>
        </el-input>
      </div> -->
      <div class="item-box">
        <el-input class="yourname" v-model="content" size="small" placeholder="接收反馈">
          <template slot="prepend">邮箱</template>
        </el-input>
      </div>
      <div class="item-box">
        <div>
          <el-input class="yourname" v-model="content" size="small" :placeholder="bgName" :disabled="true">
            <template slot="prepend">背景音乐</template>
          </el-input>
        </div>
        <div style="margin-left:6px;display:none;">
          <el-upload
            class="upload-demo"
            action="https://www.sunfengfeng.com/upload"
            :http-request="getFileMsg"
            :before-upload="onBeforeUpload"
            :on-change="handleChange"
            :on-success="onSuccess"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            :multiple="false"
            :on-exceed="handleExceed"
            :disabled="true"
            :show-file-list="false">
            <!-- <el-button size="small" type="success" :disabled="true" >选择音乐</el-button> -->
          </el-upload>
        </div>
      </div>
      <div class="item-box flex">
        <div>
          <el-input class="yourname" v-model="content" size="small" placeholder="不支持" :disabled="true">
            <template slot="prepend">红包设置</template>
          </el-input>
        </div>
        <div style="margin-left:6px;">
          <el-upload
            class="upload-demo"
            action="https://www.sunfengfeng.com/upload"
            :http-request="getFileMsg"
            :before-upload="onBeforeUpload"
            :on-change="handleChange"
            :on-success="onSuccess"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            :multiple="false"
            :on-exceed="handleExceed"
            :disabled="true"
            :show-file-list="false">
            <el-button size="small" type="success" :disabled="true">支付红包</el-button>
          </el-upload>
        </div>
      </div>
      <div>
        <h3>表白内容</h3>
        <!-- <span style="background:#F5F7FA;padding:6px 10px;border-radius:4px;color: #C0C4CC;">暂时不能设置</span> -->
      </div>
      <div class="item-box flex">
        <div class="flex" align-items="center" style="margin-left:20px;width:100%;">
          <el-checkbox v-model="checked1" disabled>
            <el-input v-model="checked1value" size="small" disabled></el-input>
          </el-checkbox>
        </div>
      </div>
      <div class="item-box flex">
        <div class="flex" align-items="center" style="margin-left:20px;width:100%;">
          <el-checkbox v-model="checked1" disabled>
            <el-input v-model="checked2value" size="small" disabled></el-input>
          </el-checkbox>
        </div>
      </div>
      <div class="item-box flex">
        <div class="flex" align-items="center" style="margin-left:20px;width:100%;">
          <el-checkbox v-model="checked1" disabled>
            <el-input v-model="checked3value" size="small" disabled></el-input>
          </el-checkbox>
        </div>
      </div>
      <div class="item-box flex">
        <div class="flex" align-items="center" style="margin-left:20px;width:100%;">
          <el-checkbox v-model="checked1" disabled>
            <el-input v-model="checked4value" size="small" disabled></el-input>
          </el-checkbox>
        </div>
      </div>
      <div class="item-box flex">
        <div class="flex" align-items="center" style="margin-left:20px;width:100%;">
          <el-checkbox v-model="checked1" disabled>
            <el-input v-model="checked5value" size="small" disabled></el-input>
          </el-checkbox>
        </div>
      </div>
      <div class="item-box flex">
        <div class="flex" align-items="center" style="margin-left:20px;width:100%;">
          <el-checkbox v-model="checked1" disabled>
            <el-input v-model="checked6value" size="small" disabled></el-input>
          </el-checkbox>
        </div>
      </div>
      <div class="item-box flex">
        <div class="flex" align-items="center" style="margin-left:20px;width:100%;">
          <el-checkbox v-model="checked1" disabled>
            <el-input v-model="checked7value" size="small" disabled></el-input>
          </el-checkbox>
        </div>
      </div>
      <div class="seq-box">
        <div v-if="seqNo">
          <div class="seq-tip">编号</div>
          <div class="seq-no">{{seqNo}}</div>
          <div>请前往小程序使用</div>
          <el-button v-clipboard:copy="seqNo" v-clipboard:success="copy">复制编号</el-button>
        </div>
      </div>
      <div class="" style="margin-bottom: 20px;">
        <el-button type="primary" :disabled="isDisabled" size="medium" @click="send">生成编号</el-button>
      </div>
      <div class="zsm-wrap">
        <div class="zsm-box">
          <viewer class="zsm" :images="xcximages">
            <img v-for="src in xcximages" :src="src" :key="src" style="width:100%;height:100%">
          </viewer>
          <viewer class="zsm" :images="images">
            <img v-for="src in images" :src="src" :key="src" style="width:100%;height:100%">
          </viewer>
        </div>
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
      checked1: true,
      checked1value: '你是一个特别好(pàng)的女生。',
      checked2value: '也是一个特别漂(chòu)亮(měi)的女生。',
      checked3value: '虽然我们接触的时间不长,只有短短的几个月,却让我感觉很开心',
      checked4value: '那时我的心七上八下的,我想想这就是一见钟情',
      checked5value: '只要你愿意 我可以陪你去吃 你喜欢吃的东西',
      checked6value: '只要你愿意 我可以陪你去 任何你想去的地方',
      checked7value: '总之，只要你愿意我会一直陪着你',
      images: [
        '/static/images/zsm.jpg'
      ],
      xcximages: [
        '/static/images/xcx.jpg'
      ],
      seqNo: '',
      bgName: '爱的就是你.mp3',
      // fileList: [],
      hersValue: '',
      yourValue: '',
      content: ''
    }
  },
  computed: {
    isDisabled () {
      let hersValue = this.hersValue.trim()
      let yourValue = this.yourValue.trim()
      return !(hersValue && yourValue)
    }
  },
  methods: {
    copy () {
      this.$message({
        message: '成功复制到粘贴板！',
        type: 'success'
      })
    },
    send () {
      const config = {
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
      }
      const loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(255, 255, 255, 0)'
      })
      axios.post('http://www.sunfengfeng.com/createBiaobai', {
        biaobai: {
          hersname: this.hersValue,
          yourname: this.yourValue,
          bgurl: 'http://www.sunfengfeng.com/mp3/fywz.mp3'
        }
      }, config)
        .then((res) => {
          console.log(res)
          loading.close()
          this.hersValue = ''
          this.yourValue = ''
          this.$message({
            message: '已生成序列号',
            type: 'success'
          })
          this.seqNo = res.data.seqNo
        })
        .catch((error) => {
          console.log(error)
          loading.close()
        })
    },
    getFileMsg (content) {
      console.log('getFileMsg', content)
      let reader = new FileReader()

      reader.readAsDataURL(content.file)
      reader.onload = () => {
        var imgResult = reader.result
        // console.log(imgResult)
        var fd = new FormData()
        // var base64data = reader.result
        let base64data = imgResult.split(',')[1]
        console.log(base64data)
        let a = this.base64ToUint8Array(base64data)
        console.log(a)
        fd.append('rawaudio', a)
        console.log(fd)
        axios({
          method: 'post',
          url: 'http://www.sunfengfeng.com/upload',
          data: {
            name: content.file.name,
            size: content.file.size,
            type: content.file.type,
            uid: content.file.uid,
            lastModified: content.file.lastModified,
            // file: a
            data: base64data
          },
          timeout: 180000
          // data: imgResult.replace('data:audio/mpeg;base64,', '')
        }).then((res) => {
          console.log(res)
        })
      }
    },
    handleRemove (file) {
      console.log(file)
    },
    onBeforeUpload (file) {
      console.log('上传之前', file)
    },
    handleChange (file, fileList) {
      console.log(file, fileList)
      this.bgName = file.name
    },
    onSuccess (file) {
      console.log(file)
    },
    handleExceed (files, fileList) {
      this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
    },
    beforeRemove (file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    }
  }
}
</script>

<style>
.Home {
  padding: 0 10px;
  box-sizing: border-box;
}
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
.item-box {
  margin: 24px 0;
}
.title {
  font-size: 22px;
  font-weight: 400px;
}
.seq-box {
  height: 162px;
}
.seq-no {
  font-size: 28px;
  font-weight: 400;
  margin: 10px;
  color: #e0aa10;
}
.seq-tip {
  font-size: 22px;
  font-weight: 400;
}
.zsm-wrap {
  width: 100%;
  height: 100px;
  margin-bottom: 20px;
}
.zsm-box {
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
}
.zsm {
  width: 100px;
  height: 100px;
}
</style>
