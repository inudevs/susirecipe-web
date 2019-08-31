<template>
<div>
  <div class="mot">
    <span class="mot__text">"내가 더 멀리 본다면, 그것은 내가 거인들의 어께 위에 서있기 때문이다" -아이작 뉴턴</span>
  </div>
  <div class="loginform">
    <input type="text" placeholder="아이디를 입력하세요" class="loginform__textinput" v-model="id">
    <input type="password" placeholder="비밀번호를 입력하세요" class="loginform__textinput" v-model="pw">
    <button class="loginform__button"
      @click="login({email: id, password: pw})">
      로그인
    </button>
    <span class="loginform__create" @click="$router.push({ name : 'createaccount'})">수시레시피 가입하기</span>
  </div>
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      id: '',
      pw: ''
    }
  },
  methods: {
    ...mapActions(['login'])
  }
}
</script>

<style lang="scss" scoped>
.mot {
  width: 90%;
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 4em;

  &__text {
    color: rgb(77, 77, 77);
    font-family: 'NanumSquare', sans-serif;
    font-weight: 400;
  }
}

.loginform {
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3em;

  &__textinput {
    width: 96%;
    height: 2.8em;
    margin-top: 0.4em;
    margin-bottom: 0.4em;
    background-color: rgb(238, 238, 238);
    border-radius: 0.4em;
    border: 0.1em solid white;
    padding-left: 1em;
    outline-style: none;
  }

  &__button {
    width: 100%;
    outline-style: none;
    color: white;
    background-color: rgb(131, 174, 201);
    border: 0;
    border-radius: 0.3em;
    height: 2.6em;
    margin-top: 0.3em;
    font-family: 'NanumSquare', sans-serif;

    &:hover {
      cursor: pointer;
      background-color: rgb(38, 131, 193);
    }

    &:focus {
      background-color: rgb(38, 131, 193);
    }
  }

  &__create {
    font-family: 'NanumSquare', sans-serif;
    font-size: 1em;
    color: rgb(38, 131, 193);
    margin-top: 2em;

    &:hover {
        cursor: pointer;
    }
  }
}
</style>
