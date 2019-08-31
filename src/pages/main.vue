<template>
<div>
  <div class="banner">
    <div class="banner__content">
        <div class="banner__desc">
            <h1 class="banner__title">숭실대학교</h1>
            <span>ddddddddddd</span>
        </div>
    </div>
  </div>
  <div class="topbar">
    <span class="topbar__title">최근 수시관련 뉴스</span>
    <span class="topbar__more">더보기</span>
  </div>
  <div class="news">
    <div class="news__box"
    @click="onClickLink(news.data.news[0].link)">
      <img :src="news.data.news[0].cover" class="news__img">
      <span id="title">{{news.data.news[0].title}}</span><br>
      <span id="desc">{{news.data.news[0].desc}}</span><br>
    </div>
    <div class="news__box"
    @click="onClickLink(news.data.news[1].link)">
      <img :src="news.data.news[1].cover" class="news__img">
      <span id="title">{{news.data.news[1].title}}</span><br>
      <span id="desc">{{news.data.news[1].desc}}</span><br>
    </div>
    <div class="news__box"
    @click="onClickLink(news.data.news[2].link)">
      <img :src="news.data.news[2].cover" class="news__img">
      <span id="title">{{news.data.news[2].title}}</span><br>
      <span id="desc">{{news.data.news[2].desc}}</span><br>
    </div>
    <div class="news__box"
    @click="onClickLink(news.data.news[3].link)">
      <img :src="news.data.news[3].cover" class="news__img">
      <span id="title">{{news.data.news[3].title}}</span><br>
      <span id="desc">{{news.data.news[3].desc}}</span><br>
    </div>
  </div>
  <br>
  sadlsdjl
</div>
</template>

<style lang="scss" scoped>
@import url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css);

#title {
  font-family: 'NanumSquare',monospace;
  font-size: 1.5em;
  font-weight: bold;
}

#desc {
  font-family: 'NanumSquare',sans-serif;
  color: gray;
}

.news {
  width: 65%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  &__box {
    width: 24%;
    height: 20em;
    border: 0;
    box-shadow: 0px 1px 1px rgb(196, 196, 196);
    &:hover {
      box-shadow: 0px 2px 10px rgb(169, 187, 236);
      cursor: pointer;
    }
  }

  &__img {
    max-height: 9em;
    width: 100%;
  }
}

.topbar {
  width: 65%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2em;
  margin-bottom: 0.3em;
  display: flex;
  justify-content: space-between;

  &__title {
    font-family: 'NanumSquare', sans-serif;
    font-weight: bold;
    font-size: 1.5em;
  }

  &__more {
    padding-top: 0.5em;
    cursor: pointer;
    font-family: 'NanumSquare', sans-serif;
    font-weight: 600;
    color: rgb(153, 153, 153);
  }

}

.banner {
  width: 100%;
  height: 27rem;
  background-image: url('./../assets/test4.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  &__content {
      width: 65%;
      height: 100%;
  }

  &__desc {
      position: absolute;
      bottom: 0;
      color: white;
      display: flex;
      flex-direction: column;
  }

  &__title {
      margin: 0;
      font-size: 3.3rem;
  }
}
</style>

<script>
// import { mapState, mapActions } from 'vuex'
// import { setTimeout } from 'timers'
import axios from 'axios'

export default {
  data () {
    return {
      slide_one: 152,
      news: null
    }
  },
  created () {
    axios // FIXME 서버통신
      .get('http://susirecipe.cf/service/news')
      .then(response => {
        console.log(response)
        this.news = response
      })
      .catch(error => {
        console.error(error)
        console.log('뉴스 로딩 실패')
      })
  },
  methods: {
    onClickLink (link) {
      const win = window.open(link)
      win.focus()
    }
  }
}
</script>
