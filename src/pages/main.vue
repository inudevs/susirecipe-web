<script>
// import { mapState, mapActions } from 'vuex'
// import { setTimeout } from 'timers'
import Carousel from '../components/Carousel.vue'

export default {
  data () {
    return {
      news: [],
      books: []
    }
  },
  components: {
    Carousel
  },
  created () {
    this.$api
      .get('/service/news')
      .then(response => {
        console.log(response)
        this.news = response.data.news
      })
      .catch(error => {
        console.error(error)
        console.log('뉴스 로딩 실패')
      })
    this.$api
      .get('http://susirecipe.cf/service/books')
      .then(response => {
        console.log(response)
        this.books = response.data.books
      })
      .catch(error => {
        console.error(error)
        console.log('추천도서 로딩 실패')
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

<template>
  <div>
    <!-- <div class="banner">
      <div class="banner__content">
        <div class="banner__desc">
          <h1 class="banner__title">숭실대학교</h1>
          <span>D-10</span>
        </div>
      </div>
    </div>-->
    <Carousel />
    <div class="section">
      <div class="topbar">
        <span class="topbar__title">최근 수시관련 뉴스</span>
        <span class="topbar__more">더보기</span>
      </div>
      <div class="news">
        <div
          class="news__box"
          v-for="(banner, key) in news"
          :key="key"
          @click="onClickLink(banner.link)"
        >
          <div class="news__newscut">
            <img :src="banner.cover" class="news__img" />
            <div class="news__content">
              <span class="news__title">{{banner.title}}</span>
              <span class="news__desc">{{banner.desc + '...'}}</span>
            </div>
          </div>
        </div>
        <br />
      </div>
    </div>
    <div class="section">
      <div class="topbar">
        <span class="topbar__title">합격한 선배들이 읽었던 책</span>
        <span class="topbar__more">더보기</span>
      </div>
      <div class="book">
        <div
          class="book__box"
          v-for="(book, key) in books.slice(0, 6)"
          :key="key"
          @click="onClickLink(book.link)"
        >
          <div class="book__wrap">
            <img :src="book.cover" class="book__img" />
            <div class="book__content">
              <span class="book__title">{{book.title}}</span>
              <span class="book__author">{{book.author}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css);

.section {
  display: flex;
  flex-direction: column;
}

.news {
  width: 65%;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  &__box {
    width: 24%;
    // height: 20em;
    border: 0;
    box-shadow: 0px 1px 1px rgb(196, 196, 196);
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    &:hover {
      box-shadow: 0px 2px 10px rgb(169, 187, 236);
      cursor: pointer;
    }
  }

  &__newscut {
    width: 100%;
    // height: 8em;
    overflow: hidden;
  }

  &__bookcut {
    width: 100%;
    // height: 13em;
    overflow: hidden;
  }

  &__img {
    width: 100%;
    // height: auto;
    height: 8rem;
    object-fit: cover;
  }

  &__content {
    display: flex;
    flex-direction: column;
    padding: 0.2rem 0.5rem;
    padding-bottom: 0.5rem;
  }

  &__title {
    margin-top: 0.2rem;
    font-family: "NanumSquare", monospace;
    font-size: 1.3rem;
    font-weight: bold;
  }

  &__desc {
    font-family: "NanumSquare", sans-serif;
    font-size: 0.9rem;
    color: gray;
    padding-top: 0.5rem;
  }
}

.topbar {
  width: 65%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1rem;
  margin-bottom: 0.3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__title {
    font-family: "NanumSquare", sans-serif;
    font-weight: bold;
    font-size: 1.2em;
  }

  &__more {
    padding-top: 0.4em;
    cursor: pointer;
    font-family: "NanumSquare", sans-serif;
    font-weight: 600;
    color: rgb(153, 153, 153);
  }
}

.banner {
  width: 100%;
  height: 27rem;
  background-image: url("./../assets/test4.jpg");
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
    bottom: 1rem;
    color: white;
    display: flex;
    flex-direction: column;
  }

  &__title {
    margin: 0;
    font-size: 3.3rem;
  }
}

.book {
  display: flex;
  flex-direction: row;
  width: 65%;
  margin: auto;
  justify-content: space-between;
  padding-bottom: 2rem;

  &__box {
    width: 15%;
    border: 0;
    box-shadow: 0px 1px 1px rgb(196, 196, 196);

    &:hover {
      box-shadow: 0px 2px 10px rgb(169, 187, 236);
      cursor: pointer;
    }
  }

  &__img {
    width: 100%;
    height: 12rem;
    object-fit: cover;
    box-shadow: 15px 19px 32px -18px rgba(21, 19, 19, .07);
  }

  &__content {
    display: flex;
    flex-direction: column;
    padding: 0 0.3rem;
  }

  &__title {
    margin-top: 0.2rem;
    font-family: "NanumSquare", monospace;
    font-size: 1rem;
    font-weight: bold;
  }

  &__author {
    font-family: "NanumSquare", sans-serif;
    font-size: 0.7rem;
    color: gray;
  }
}
</style>
