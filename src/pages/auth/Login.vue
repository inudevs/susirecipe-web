<template>
<div>
  <div class="half">
    <div class="half__left">
      <!--
      <div class="mot">
        <span class="mot__text">"내가 더 멀리 본다면, 그것은 내가 거인들의 어께 위에 서있기 때문이다" -아이작 뉴턴</span>
      </div>-->
      <div class="loginform">
        <!--img src="./../../assets/logo_text.png" class="loginform__img"-->
        <span class="loginform__title">수시레시피</span>
        <span class="loginform__subtitle">맞춤형 대입정보 및 멘토링 플랫폼</span>
        <input type="text" placeholder="아이디를 입력하세요" class="loginform__textinput" v-model="id">
        <input type="password" placeholder="비밀번호를 입력하세요" class="loginform__textinput" v-model="pw">
        <button class="loginform__button"
          @click="login({email: id, password: pw})">
          로그인
        </button>
        <span class="loginform__create" @click="$router.push({ name : 'createaccount'})">수시레시피 가입하기</span>
      </div>
    </div>
    <div class="ill">
      <img src='./../../assets/login_ill.png' class="ill__img">
    </div>
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
.half {
  display: flex;
  justify-content: center;

  &__left {
    width: 50%;
    display: flex;
    flex-direction: column;
  }
}

.ill {
  width: 50%;
  display: flex;
  &__img {
    width: 80%;
    margin-top: 5em;
  }
}

.loginform {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 20em;
  margin-top: 10em;

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

  &__title {
    font-family: 'NanumSquare',sans-serif;
    color: rgb(38, 131, 193);
    font-size: 1.6em;
    font-weight: 600;
  }

  &__subtitle {
    font-family: 'NanumSquare',sans-serif;
    color: rgb(141, 141, 141);
    padding-bottom: 1em;
    font-size: 0.85em;
  }

  &__img {
    width: 40%;
    padding-bottom: 1em;
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
    margin-top: 3em;

    &:hover {
        cursor: pointer;
    }
  }
}

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
    font-size: 1em;
  }
}
</style>
