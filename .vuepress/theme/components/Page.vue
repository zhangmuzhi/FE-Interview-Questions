<template>
  <main class="page">
    <slot name="top" />

    <div :class="{ 'theme-default-content': true, lock: isLock }" id="container">
      <Content />
      <!-- <div class="content-lock">
        <p>扫码关注公众号<span>前端进阶之旅</span>，并发送 <span v-text="code"></span></p>
        <p>即可在关注期间<span>无限制</span>浏览本站全部文章内容</p>
        <img src="/qrcode.jpg" width="180" height="180">
      </div> -->
      <div class="btn-wrap">
        <img class="moneny" src="./share.png" />
        <div style="color: #dc203b;margin-top: -40px;">写文不易，如果您觉得文章对你有帮助。<br />打赏激励下作者吧，谢谢支持！ ~(@^_^@)~！</div>
      </div>
      </div>
      <!-- <div class="readMore-wrapper">
        <a class="readMore">阅读全文</a>
      </div> -->
    </div> 
    <PageEdit />

    <PageNav v-bind="{ sidebarItems }" />

    <slot name="bottom" />
  </main>
</template>

<script>
import PageEdit from '@theme/components/PageEdit.vue'
import PageNav from '@theme/components/PageNav.vue'

import request from '../util/api'
import isMobile from 'ismobilejs'

const mobile = isMobile()

function getCode () {
  if (localStorage.code) {
    return localStorage.code
  }
  const code = Math.random().toString().slice(2, 6)
  localStorage.code = code
  return code
}

async function verifyCode (code) {
  const { data: { data: token } } = await request.post('/api/verifyCode', {
    code
  })
  return token
}

async function verifyToken (token) {
  const { data: { data: verify } } = await request.post('/api/verifyToken', {
    token
  })
  return verify
}

export default {
  data () {
    return {
      lock: false,
      isLock: true, // 默认不可见
      code: ''
    }
  },
  created() {

  },
  async mounted () {
    // const code = getCode()
    // this.code = code
    // if (!localStorage.token) {
    //   this.lock = true
    //   const token = await verifyCode(code)
    //   if (token) {
    //     localStorage.token = token
    //     this.lock = false
    //   }
    // } else {
    //   const token = localStorage.token
    //   const verify = await verifyToken(token)
    //   if (!verify) {
    //     this.lock = true
    //   }
    // }
    setTimeout(() => {
      const btw = new BTWPlugin();
      btw.init({
          id: 'container',
          blogId: '22699-1592137983091-414',
          name: '前端进阶之旅',
          qrcode: 'https://blog.poetries.top/img-repo/2020/06/qrcode.jpg',
          keyword: '验证码',
      });
    }, 5000);
    this.interval = setInterval(() => {
      let isLock = Object.keys(localStorage).some(v=>v.indexOf('TOKEN_')!==-1)

      console.log(isLock,'isLock')
      if(isLock) {
        this.isLock = !isLock
        clearInterval(this.interval)
      }
    }, 1000);
  },
  components: { PageEdit, PageNav },
  props: ['sidebarItems']
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

.page
  padding-bottom 2rem
  display block

.btn-wrap 
  display flex 
  justify-content center 
  align-items: center
  flex-direction column
  text-align center

.moneny 
  width 300px
  height 300px

.content-lock
  display none
  text-align center
  padding 2rem
  font-size 1em

  p
    line-height 1.2em

  span
    color #3eaf7c
    font-weight 600

.theme-default-content.lock
  .content__default >
    :nth-child(50)
      opacity .5

    :nth-child(51)
      opacity .2

    :nth-child(n+50)
      display none

  .content-lock
    display block

.readMore-wrapper
  position relative
  bottom 0px
  z-index 9999
  width 100%
  top -50px
  
.readMore
  width 160px
  height 36px
  line-height 36px
  font-size 15px
  text-align center
  border 1px solid rgb(222, 104, 109)
  color rgb(222, 104, 109)
  background rgb(255, 255, 255)
  cursor pointer
  border-radius 6px
  position absolute
  left 50%
  transform translate(-50%, -50%)

.theme-default-content
  .content__default
    code 
      color #c7254e
      background-color #f9f2f4
      font-size 14px
      border-radius 5px
      padding-left 5px
      padding-right 5px
      margin auto 3px
    blockquote
      padding 2px 30px
      color #555
      border-left 6px solid #c7e6cc
      background #f1f5f3
      font-size 1rem
      
</style>
