<script>
export default {
  name: 'Carousel',
  props: {
    duration: {
      type: Number,
      default: 3300
    }
  },
  async created () {
    this.refreshCarousel()
    // ;['서강대학교', '서울대학교', '국민대학교', '숭실대학교', '연세대학교'].map(async (univ) => await this.loadData(univ))
  },
  computed: {
    carousel () {
      return this.carousels[this.current - 1]
    }
  },
  data () {
    return {
      current: 1,
      intervalId: 0,
      // carousels: [
      //   { name: '서강대학교', dday: 'D-80', }
      // ]
      carousels: [
        { 'name': '숭실대학교', 'dday': 'D-11' },
        { 'name': '서강대학교', 'dday': 'D-80', 'link': 'http://admission.sogang.ac.kr/admission/html/rolling/guide.asp' },
        { 'name': '서울대학교', 'dday': 'D-11', 'link': 'https://admission.snu.ac.kr/under/early/guide' },
        { 'name': '국민대학교', 'dday': 'D-80', 'link': 'https://admission.kookmin.ac.kr/nonschedule/' },
        { 'name': '연세대학교', 'dday': 'D-11', 'link': 'https://www.yonsei.ac.kr/sc/admission/admission.jsp' }
      ]
    }
  },
  methods: {
    async loadData (query) {
      const { data: { univ } } = await this.$api.get(`/service/dday/${query}`)
      this.carousels.push(univ)
    },
    refreshCarousel () {
      clearInterval(this.intervalId)
      this.intervalId = setInterval(() => {
        if (this.current < this.carousels.length) this.current += 1
        else this.current = 1
      }, this.duration)
    },
    moveTo (idx) {
      this.current = idx
      this.refreshCarousel()
    }
  }
}
</script>

<template>
  <div class="carousel">
    <transition name="fade" :duration="duration" appear>
      <img
        :key="current"
        class="carousel__image"
        :src="require(`../assets/${carousel.name}.jpg`)"
      >
    </transition>
    <div class="carousel__image-cover">
      <div class="carousel__content">
        <div class="carousel__box">
          <h1 class="carousel__title">{{ carousel.name }}</h1>
          <p class="carousel__dday">수시 원서 마감까지 <span class="carousel__day">{{ carousel.dday }}</span></p>
        </div>
        <div class="carousel__meta">
          <div class="carousel__controller">
            <figure
              v-for="idx in carousels.length"
              :key="idx"
              class="carousel__circle"
              :class="{ current: (idx === current) }"
              @click="moveTo(idx)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat:700&display=swap');

.carousel {
  position: relative;
  height: 25rem;

  &__image {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    z-index: -1;
  }

  &__image-cover {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    background-image: linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.8));
  }

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 65%;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    color: #fff;
  }

  &__box {
    padding-bottom: 2rem;
  }

  &__title {
    font-size: 5rem;
    font-family: "Futura";
  }

  &__dday {
    font-size: 1.7rem;
    font-family: "Noto Sans KR", sans-serif;
    font-weight: 400;
    line-height: 1.47;
  }

  &__day {
    font-family: 'Montserrat', sans-serif;
  }

  &__meta {
    display: flex;
    flex-direction: column;
    padding-bottom: 2rem;
    font-family: "Noto Sans KR", sans-serif;
  }

  &__controller {
    margin-top: 1rem;
    display: flex;
    justify-content: flex-end;
  }

  &__circle {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #fff;
    margin-left: .6rem;
    cursor: pointer;

    &.current {
      width: 20px;
      height: 10px;
      border-radius: 4px;
      background-color: #298fe3;
    }
  }
}

.fade-enter-active {
  transition: all .3s ease;
}

.fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
