<template>
  <div class="login">
    <div class="login__left">
      <!--
      <div class="mot">
      <span class="mot__text">"내가 더 멀리 본다면, 그것은 내가 거인들의 어께 위에 서있기 때문이다" -아이작 뉴턴</span>
      </div>-->
      <div class="loginform">
        <!--img src="./../../assets/logo_text.png" class="loginform__img"-->
        <span class="loginform__title">수시레시피</span>
        <span class="loginform__subtitle">맞춤형 대입정보 및 멘토링 플랫폼</span>
        <input type="text" placeholder="아이디를 입력하세요" class="loginform__textinput" v-model="id" />
        <input type="password" placeholder="비밀번호를 입력하세요" class="loginform__textinput" v-model="pw" />
        <button class="loginform__button" @click="login({email: id, password: pw})">로그인</button>
        <span class="loginform__create" @click="$router.push({ name : 'createaccount'})">수시레시피 가입하기</span>
      </div>
    </div>
    <div class="login__right">
      <img src="./../../assets/login_ill.png" class="login__img" />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

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
.login {
  height: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  &__left {
    width: 40%;
  }

  &__right {
    display: flex;
    flex-grow: 1;
    width: 40%;
    justify-content: center;
    align-items: center;
  }

  &__img {
    width: 60%;
    object-fit: cover;
    margin-bottom: 3rem;
  }
}
// .half {
//   display: flex;
//   justify-content: center;

//   &__left {
//     width: 50%;
//     display: flex;
//     flex-direction: column;
//   }
// }

// .ill {
//   width: 50%;
//   display: flex;
//   &__img {
//     width: 80%;
//     margin-top: 5em;
//   }
// }

.loginform {
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 15rem;
  margin-top: 12rem;

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
    font-size: 1rem;
  }

  &__title {
    font-family: "NanumSquare", sans-serif;
    color: rgb(38, 131, 193);
    font-size: 2em;
    font-weight: 600;
  }

  &__subtitle {
    font-family: "NanumSquare", sans-serif;
    color: rgb(141, 141, 141);
    padding-bottom: 1em;
    font-size: 1em;
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
    font-size: 1rem;
    font-family: "NanumSquare", sans-serif;

    &:hover,
    &:active {
      cursor: pointer;
      background-color: rgb(38, 131, 193);
    }

    &:focus {
      background-color: rgb(38, 131, 193);
    }
  }

  &__create {
    font-family: "NanumSquare", sans-serif;
    font-size: 1.2em;
    color: rgb(38, 131, 193);
    margin-top: 3em;

    &:hover {
      cursor: pointer;
    }
  }
}

// .mot {
//   width: 90%;
//   display: flex;
//   justify-content: center;
//   margin-left: auto;
//   margin-right: auto;
//   margin-top: 4em;

//   &__text {
//     color: rgb(77, 77, 77);
//     font-family: "NanumSquare", sans-serif;
//     font-weight: 400;
//     font-size: 1em;
//   }
// }
//
</style>
