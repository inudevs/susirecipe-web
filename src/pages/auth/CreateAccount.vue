<template>
<div>
  <div class="mainform">
    <div class="select">
    <span class="select__text">고등학생이신가요, 대학생이신가요?</span><br>
    <button class="select__button" @click="userState=1">고등학생</button>
    <button class="select__button" @click="userState=2">대학생</button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      userState: 0
    }
  }

}
</script>

<style lang="scss" scoped>
.mainform {
  width: 50%;
  margin-left: auto;
  margin-right: auto;
}
.select {
  margin-top: 2em;

  &__text {
    font-family: 'NanumSquare', sans-serif;
    font-size: 1.6em;
  }

  &__button {
    outline-style: none;
    border-radius: 0.7em;
    background-color: rgb(238, 238, 238);
    border: 0;
    width: 13em;
    height: 2.5em;
    margin-top: 1em;
    margin-right: 1em;
    font-family: 'NanumSquare', sans-serif;

    &:hover {
      background-color: rgb(38, 131, 193);
      color: white;
    }

    @if userState == 1{
      background-color: red;
    }
  }
}
</style>
