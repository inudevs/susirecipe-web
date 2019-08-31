<template>
<div>
  <div class="mainform">
    <div class="select">
    <span class="select__text">고등학생이신가요, 대학생이신가요?</span><br>
    <button class="select__button" @click="userState=1">고등학생</button>
    <button class="select__button" @click="userState=2">대학생</button>
    </div>
    <div v-if="userState == 0"></div>
    <div class="student" v-else-if="userState == 1">
      <span class="select__text">기본적인 정보를 입력해주세요!</span><br>
      <input type="text" placeholder="이름" class="student__textinput">
      <button class="student__button">남자</button>
      <button class="student__button">여자</button>
      <input type="text" placeholder="생년월일(e.g. 20030917)" class="student__textinput">
      <input type="text" placeholder="자기집주소 입력하는곳인데 필요할까요" class="student__textinput">
      <input type="text" placeholder="전화번호(-빼고 입력)" class="student__textinput">
      <input type="text" placeholder="이메일(아이디로 사용됩니다)" class="student__textinput">
      <input type="password" placeholder="비밀번호" class="student__textinput">
      <input type="password" placeholder="비밀번호 확인" class="student__textinput">
      <div id="space">
        <span class="select__text" id="test">맞춤형 대학정보 제공을 위해,</span><br>
        <span class="select__text">현재 학교와 목표대학을 입력해주세요 :D</span>
      </div>
    </div>
    <div class="chef" v-else-if="userState == 2">

    </div>
    <div class="join" v-if="userState != 0">
      <button class="join__button">회원가입하기</button>
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
.student {
  margin-top: 4em;
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
    outline-style: none;
    border-radius: 0.7em;
    background-color: rgb(238, 238, 238);
    border: 0;
    margin-left: 0.2em;
    margin-right: 0.2em;
    width: 48.5%;
    height: 2.5em;
    font-family: 'NanumSquare', sans-serif;

    &:hover {
      background-color: rgb(38, 131, 193);
      color: white;
    }
  }

  &__text {
    font-family: 'NanumSquare',sans-serif;
    margin-top: 4em;
  }
}

.mainform {
  width: 30%;
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
  }
}

.join {
  display: flex;
  float: right;
  margin-top: 1em;
  &__button {
    outline-style: none;
    border-radius: 0.7em;
    background-color: rgb(238, 238, 238);
    border: 0;
    margin-left: 0.2em;
    margin-right: 0.2em;
    width: 15em;
    height: 2.5em;
    font-family: 'NanumSquare', sans-serif;

    &:hover {
      background-color: rgb(38, 131, 193);
      color: white;
    }
  }
}
#space {
  margin-top: 3em;
}
</style>
