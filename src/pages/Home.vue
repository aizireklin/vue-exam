<template>
    <section class="hero">
        <div class="hero__wrapper">
            <div class="hero__info">
                <h1 class="hero__title">Посетитите фитнес-центр "МойФитнес" и получите бесплатную тренировку</h1>
                <p class="hero__desc">Станьте участником нашего fitness клуба, чтобы стать сильнее и выносливее!</p>
                <div class="hero__links">
                    <v-btn variant="outlined">Купить абонемент</v-btn>
                    <v-btn variant="text" href="#start">Подробнее</v-btn>
                </div>
            </div>
        </div>
    </section>
    <section class="tariffs" id="start">
        <div class="tariffs__wrapper">
            <h2 class="tariffs__title">Выберите подходящий тариф</h2>
            <v-tabs v-model="tab" color="light-blue-darken-1" bg-color="transparent" align-tabs="center">
                <v-tab value="month">Месяц</v-tab>
                <v-tab value="six_months">6 месяцев</v-tab>
                <v-tab value="year">Год</v-tab>
            </v-tabs>
            <div class="tarrifs__sort">
                <v-combobox label="Сортировка" v-model="sort" variant="solo" density="comfortable"
                    :items="['по алфавиту', 'по цене', 'по популярности']"></v-combobox>
            </div>
            <ul class="tariffs__list">
                <li class="tariffs__item" v-for="(tariff, index) in this.onlineTariffs" :key="index">
                    <v-card variant="tonal" width="344">
                        <v-img :src="require('@/assets/'+tariff.image)" height="200px" cover></v-img>
                        <v-card-title>{{ tariff.name }} тариф</v-card-title>
                        <v-card-subtitle>
                            {{ tariff.cost }} руб.
                        </v-card-subtitle>
                        <v-card-actions>
                            <RouterLink class="tariffs__link" :to="'/object/'+tariff.id" 
                                >
                                <v-btn variant="text" color="light-blue-darken-1" @click="reveal = true">
                                    Подробнее
                                </v-btn>
                            </RouterLink>
                            <v-spacer></v-spacer>
                            <v-btn :icon="tariff.show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                                @click="tariff.show = !tariff.show"></v-btn>
                        </v-card-actions>
                        <v-expand-transition>
                            <div v-show="tariff.show">
                                <v-divider></v-divider>
                                <v-card-text>{{ tariff.desc }} руб.</v-card-text>
                            </div>
                        </v-expand-transition>
                    </v-card>
                </li>
            </ul>
        </div>
    </section>
    <section class="contact">
        <div class="contact__wrapper">
            <h2 class="contact__title">Напишите отзыв о&nbsp;работе нашего fitness-центра</h2>
            <div class="contact__content">
                <div class="contact__info">
                    <v-text-field
                        class="contact__search"
                        v-model="search"
                        append-icon="mdi-magnify"
                        label="Поиск"
                        single-line
                        compact
                        hide-details
                    ></v-text-field>
                    <v-list lines="three" max-width="640px" width="100%" max-height="500px">
                        <v-list-item
                            v-for="item in onlineComments"
                            :key="item.title"
                            :title="item.name"
                            :subtitle="item.text"
                        >
                    </v-list-item>
                    </v-list>
                </div>
                <HomeForm :comments="comments" @commentSubmit="this.sendComment"/>
            </div>
        </div>
    </section>
</template>
  
<script>
let file = require('@/assets/main.json')
import HomeForm from '@/components/HomeForm.vue';


export default {
    name: 'HomePage',
    data: () => ({
        tab: null,
        sort: 'по цене',
        show: false,
        search: '',
        tariffs: [],
        comments: [
            {
                name: 'Александр Смирнов',
                text: 'Очень нравится посещать данный фитнес-центр всей семьей. Мы имеем отличную возможность оставаться в спортивной форме и редко болеть благодаря данному заведению!'
            },
            {
                name: 'Петр Васичкин',
                text: 'Мы с моей девушкой постоянно ходим в тренажерку. Такой большой спектр услуг предоставляют в данном фитнес-центре, что мы постоянно счастливые возвращаемся домой.'
            },
            {
                name: 'Евгения Адамова',
                text: 'Все круто! Очень люблю групповые тренировки, надеюсь в будущем их будут ставить почаще.'
            }
        ],
    }),
    computed: {
        onlineComments() {
            let comments = this.comments;
            return this.filterList(this.search,comments);
        },
        onlineTariffs() {
            let tab_mode = this.tab;
            let sort_mode = this.sort;
            let new_tariffs = this.tariffs.filter(item => item.mode === tab_mode);
            if (sort_mode == 'по цене') {
                new_tariffs = new_tariffs.sort((a, b) => a.cost - b.cost);
            } else {
                new_tariffs = new_tariffs.sort((a, b) => (a.name.toUpperCase() < b.name.toUpperCase()) ? -1 : (a.name.toUpperCase() > b.name.toUpperCase()) ? 1 : 0);
            }
            return new_tariffs;
        }
    },
    methods: {
        sendComment(obj){
            this.comments.push(obj)
            console.log(obj)
            this.onlineComments = this.filterList(this.search, this.comments);
        },
        filterList(value,list) {
            return list.filter(item => {
                return item.name.toLowerCase().includes(value.toLowerCase()) || item.text.toLowerCase().includes(value.toLowerCase());
            });
        }
    },
    created(){
        this.tariffs = file;
    },
    components: {
        HomeForm,
    },
}
</script>
  
<style scoped>
.hero {
    background-image: url('@/assets/coverFitnessCenter.jpeg');
    background-position: center;
    background-size: cover;
}

.hero__wrapper {
    background: radial-gradient(circle, rgba(13, 11, 46, 1) 0%, rgba(0, 212, 255, 0) 100%);

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

.tariffs__wrapper, .contact__wrapper {
    max-width: 1440px;
    padding: 0 20px;
    margin: 0 auto;
}

.tariffs__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    list-style: none;
}

.tarrifs__sort {
    max-width: 420px;
    margin: 12px auto 0;
}

.contact__info {
    margin: 20px auto;
    max-width: 540px;
}

.contact__search {
    min-width: 300px;
}
.contact__form {
    display: flex;
    flex-direction: column;
    gap: 8px;
    max-width: 540px;
    margin: 20px auto;
    width: 100%;
}

.contact__content {
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
    justify-content: center;
}

.tariffs__title, .contact__title {
    font-size: 24px;
    max-width: 820px;
    text-align: center;
    margin: 40px auto 12px;
}

.tariffs__link {
    text-decoration: none;
}

</style>
  