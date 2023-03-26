<template>
    <header class="header">
        <div class="header__wrapper">
            <nav class="header__navigate navigate">
                <ul class="navigate__list">
                    <li class="navigate__item">
                        <RouterLink class="navigate__link" :class="$route.name=='Home'?'navigate__link--active':''" to="/">Главная</RouterLink>
                    </li>
                    <li class="navigate__item">
                        <RouterLink class="navigate__link" :class="$route.name=='Object'?'navigate__link--active':''" to="/object">Абонемент</RouterLink>
                    </li>
                    <li class="navigate__item">
                        <RouterLink class="navigate__link" :class="$route.name=='JSON'?'navigate__link--active':''" to="/json">JSON файл</RouterLink>
                    </li>
                </ul>
            </nav>
            <ul class="header__list">
                <li class="header__item">
                    <a class="header__link" href="https://github.com/aizireklin/vue-exam/" target="_blank">
                        <p class="header__label">Github репозиторий</p>
                        <svg height="36px" width="36px" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <g><path class="st0" d="M256,32C132.3,32,32,134.8,32,261.7c0,101.5,64.2,187.5,153.2,217.9c11.2,2.1,15.3-5,15.3-11.1   c0-5.5-0.2-19.9-0.3-39.1c-62.3,13.9-75.5-30.8-75.5-30.8c-10.2-26.5-24.9-33.6-24.9-33.6c-20.3-14.3,1.5-14,1.5-14   c22.5,1.6,34.3,23.7,34.3,23.7c20,35.1,52.4,25,65.2,19.1c2-14.8,7.8-25,14.2-30.7c-49.7-5.8-102-25.5-102-113.5   c0-25.1,8.7-45.6,23-61.6c-2.3-5.8-10-29.2,2.2-60.8c0,0,18.8-6.2,61.6,23.5c17.9-5.1,37-7.6,56.1-7.7c19,0.1,38.2,2.6,56.1,7.7   c42.8-29.7,61.5-23.5,61.5-23.5c12.2,31.6,4.5,55,2.2,60.8c14.3,16.1,23,36.6,23,61.6c0,88.2-52.4,107.6-102.3,113.3   c8,7.1,15.2,21.1,15.2,42.5c0,30.7-0.3,55.5-0.3,63c0,6.1,4,13.3,15.4,11C415.9,449.1,480,363.1,480,261.7   C480,134.8,379.7,32,256,32z"/></g>
                        </svg>
                    </a>
                </li>
                <li class="header__item header__item--row">
                    <v-avatar
                        icon="mdi-vuetify"
                        :image="require('@/assets/avaWoman.png')"
                        rounded="16"
                        size="42"
                        alt="Avatar User"
                    ></v-avatar>
                    <div class="header__info">
                        <p class="header__name">Анна Смирнова</p>
                        <p class="header__tariff">тариф: Стандартный</p>
                    </div>
                </li>
            </ul>
        </div>
    </header>
  </template>
  
  <script>
  export default {
    name: 'HeaderComponent',
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
    .header {
        background: #f9f9f9ec;
        backdrop-filter: blur(24px);
        box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.08), 0px 4px 16px rgba(0, 0, 0, 0.08);
        padding: 4px 0;
        position:fixed;
        width: 100%;
        z-index: 5;
    }
    
    .header__wrapper {
        max-width: 1440px;
        padding: 0 20px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;

    }

    .navigate__list {
        list-style: none;
        display: flex;
        gap: 12px;
        align-items: center;
        justify-content: center;
    }
    .header__list {
        list-style: none;
        display: flex;
        gap: 12px;
        align-items: center;
        justify-content: center;
    }

    .header__item--row {
        display: flex;
        align-items: center;
        gap: 8px;
        font-weight: 500;
    }
    .header__link {
        display: block;
        height: 36px;
    }

    .header__label {
        position: absolute;
        top: -1;
        left: -1;
        display: none;
    }

    .navigate__link {
        font-size: 14px;
        font-weight: 400;
        text-decoration: none;
        text-transform: uppercase;
        color: black;
        opacity: 0.85;
        padding: 4px;
        border: 1px solid transparent;
        transition: all 200ms ease;
    }

    .navigate__link--active {
        color: rgb(49, 49, 205);
        font-weight: 500;
    }

    .navigate__link:hover {
        opacity: 1;
        border: 1px solid rgb(49, 49, 205);
        border-radius: 4px;
    }

    .header__tariff {
        color: rgb(49, 49, 205);
        font-weight: 400;
        font-size: 12px;
        line-height: 1;
    }

    .header__info {
        display: flex;
        flex-direction: column;
        line-height: 1;
    }

    @media print {
  .header {
    display: none;
  }
}
  </style>
  