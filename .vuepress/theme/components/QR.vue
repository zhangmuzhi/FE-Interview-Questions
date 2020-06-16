<template>
  <div class="qr">
    <img src="/qrcode.jpg" alt="poetries" width="120" height="120" loading="lazy">
    <p class="we-intro">
      欢迎关注公众号<span class="we-highlight">前端进阶之旅</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'QR'
}
</script>

<style>
.qr {
  margin-top: 10px;
  margin-bottom: -1rem;
  display: flex;
}

.qr .we-intro {
  color: #0006;
  font-size: .8em;
  width: 54%;
}

.qr .we-highlight {
  color: #3eaf7c;
  font-weight: 900;
  font-style: italic;
}
</style>
