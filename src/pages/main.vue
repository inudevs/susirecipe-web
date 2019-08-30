<template>
<div>
  <div class="banner">
    <div class="banner__desc">
        <h1 class="banner__title">숭실대학교</h1>
        <span>ddddddddddd</span>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      slide_one: 152
    }
  }
}
</script>

<style lang="scss" scoped>
@import url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css);

.banner {
  width: 100%;
  height: 27rem;
  background-image: url('./../assets/test4.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;

  &__desc {
      position: absolute;
      bottom: 0;
      color: white;
      display: flex;
      flex-direction: column;
  }

  &__title {
      margin: 0;
  }
}
</style>
