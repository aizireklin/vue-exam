<template>
    <section class="hero">
        <div class="hero__wrapper">
            <div class="hero__info">
                <h1 class="hero__title">Посетитите фитнес-центр "МойФитнес" и получите бесплатную тренировку</h1>
                <p class="hero__desc">Станьте участником нашего fitness клуба, чтобы стать сильнее и выносливее!</p>
                <div class="hero__links">
                    <v-btn variant="outlined">Купить абонемент</v-btn>
                    <v-btn variant="text">Подробнее</v-btn>
                </div>
            </div>
        </div>
    </section>
</template>
  
  <script>
  export default {
    name: 'HomePage',
    props: {
      msg: String
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
    .hero {
        background-image: url('@/assets/coverFitnessCenter.jpeg');
        background-position: center;
        background-size: cover;
    }
    .hero__wrapper {
        background: radial-gradient(circle, rgba(13,11,46,1) 0%, rgba(0,212,255,0) 100%);

        max-width: 1440px;
        padding: 0 20px;
        margin: 0 auto;
    }

    .hero__info {
        display: flex;
        height: 100vh;
        gap: 12px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: white;
        text-align: center;
    }
    .hero__title {
        max-width: 820px;
        font-size: 36px;
        line-height: 120%;
    }

    .hero__desc {
        max-width: 75%;

    }
    .hero__links {
        display: flex;
        gap: 8px;
        margin-top: 8px;
    }
  </style>
  