<template>
  <div>
    <div v-if="isClick">
      <div class="header">
          <div class="header__left">
            <span id="text">다이렉트 메세지</span>
            <span id="text">맞춤형 Q&A</span>
          </div>
          <div class="header__center">
            <!--<span id="logo">수시레시피</span>-->
            <img src="./assets/logo_sim.png" class="header__logo" @click="$router.push({ name: 'main' })">
          </div>
          <div class="header__right">
            <!--<span id="text">테스트용</span>-->
            <img src="./assets/search_icon.png" class="header__searchicon" v-on:click="isClick=0">
            <span v-if="isLogin == false" id="text" @click="$router.push({ name: 'login' })">로그인/회원가입</span>
            <span v-else id="text">{{userName}}</span>
          </div>
      </div>
    </div>
    <div v-else>
      <div class="searchbar">
        <input type="text" placeholder="찾으시는 정보가 있나요?" class="searchbar__input">
        <img src="./assets/deletebutton.png" class="searchbar__delete" v-on:click="isClick=1">
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      isClick: 1
    }
  },
  computed: {
    ...mapState(['isLogin', 'userName'])
  }
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}
</style>

<style lang="scss" scoped>
@import url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css);
.header{
  margin: 0 auto;
  width: 65%;
  height: 60px;
  display: flex;
  &__left {
    width: 40%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }

  &__center {
    width: 20%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  &__right {
    width: 40%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
  }

  &__logo {
    height: 60%;

    &:hover {
    cursor: pointer;
  }
  }

  &__searchicon {
    height: 40%;
    padding-right: 10px;

    &:hover {
    cursor: pointer;
    }
  }
}

.searchbar {
  margin: 0 auto;
  width: 65%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  &__delete {
    height: 35%;
    margin-left: 1em;

    &:hover {
      cursor: pointer;
    }
  }

  &__input {
    width: 100%;
    height: 60%;
    background-color: rgb(238, 238, 238);
    border-radius: 0.4em;
    border: 0.1em solid white;
    padding-left: 0.8em;
    padding-top: 0.3em;
    outline-style: none;
    font-family: 'NanumSquare', sans-serif;
    font-weight: 400;
    font-size: 1em;
  }

}

#text {
  font-family: 'NanumSquare', sans-serif;
  font-weight: bold;
  padding-left: 10px;
  padding-right: 10px;

  &:hover {
    cursor: pointer;
    color: rgb(38, 131, 193);
  }
}
</style>
