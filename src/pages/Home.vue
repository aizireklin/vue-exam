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
    <section class="tariffs">
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
                        <v-img :src="tariff.image" height="200px" cover></v-img>
                        <v-card-title>{{ tariff.name }} тариф</v-card-title>
                        <v-card-subtitle>
                            {{ tariff.cost }} руб.
                        </v-card-subtitle>
                        <v-card-actions>
                            <v-btn variant="text" color="light-blue-darken-1" @click="reveal = true">
                                Подробнее
                            </v-btn>
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
            <h2 class="contact__title">Задайте нам интересующий вас вопрос или предложите идеи по&nbsp;улучшению работы нашего фитнес-центра</h2>
            <form class="contact__form" @submit.prevent="submit">
                <v-text-field v-model="name.value.value" :counter="10" variant="outlined"
                :error-messages="name.errorMessage.value" label="Имя">
                </v-text-field>

                <v-text-field v-model="phone.value.value" :counter="7" variant="outlined"
                :error-messages="phone.errorMessage.value" label="Номер телефона">
                </v-text-field>

                <v-text-field v-model="email.value.value" variant="outlined"
                :error-messages="email.errorMessage.value" label="E-mail">
                </v-text-field>

                <v-textarea v-model="text.value.value" label="Ваш вопрос или предложение" 
                variant="outlined" :error-messages="text.errorMessage.value">
                </v-textarea>

                <v-btn class="me-4" type="submit">
                    Отправить
                </v-btn>

                <v-btn @click="handleReset">
                    Очистить
                </v-btn>
            </form>
        </div>
    </section>
</template>
  
<script>
import { useField, useForm } from 'vee-validate'

export default {
    name: 'HomePage',
    data: () => ({
        tab: null,
        sort: 'по цене',
        show: false,
        tariffs: [
            {
                name: 'Экономный',
                desc: 'Хотите быть в форме, но заботитесь о своем бюджете? Тогда наш экономичный тариф именно для Вас! Доступ к современному тренажерному залу, групповым занятиям и бассейну значительно дешевле, чем у большинства конкурентов. Если Вы не хотите переплачивать за дополнительные услуги, а желаете получить только самое необходимое, то наш экономичный тариф – это именно то, что нужно! Удобный график работы центра позволяет заниматься фитнесом в любое время, а специальные акции и предложения делают его посещение еще более привлекательным и выгодным. Развивайте свое тело и экономьте свой бюджет вместе с нами!',
                cost: 3440,
                mode: 'month',
                image: require('@/assets/imageFitnessWorkout1.jpeg'),
                popularity: 8500,
            },
            {
                name: 'Стандарт',
                desc: 'Стандартный тариф фитнес-центра предоставляет идеальный баланс между ценой и качеством. Он включает полный доступ к нашим залам современного оборудования, а также широкий выбор групповых программ - от йоги до HIIT тренировок. Стандартные услуги также включают персонализированный план тренировок, составленный нашими квалифицированными тренерами, и набор индивидуальных упражнений, направленных на достижение ваших целей. Мы также предоставляем свежие полотенца и принадлежности для душа без дополнительной оплаты. Выбирая Стандартный тариф, вы получаете все необходимое для поддержания здорового образа жизни по разумной цене.',
                cost: 5990,
                mode: 'month',
                image: require('@/assets/imageFitnessWorkout2.jpeg'),
                popularity: 4200,
            },
            {
                name: 'Премиум',
                desc: 'Вы получаете доступ к оснащенному новейшим спортивным оборудованием просторному залу, где вы можете заниматься в удобное время. Абсолютно все тренажеры обеспечены индивидуальными телевизорами, так что вы можете смотреть любимые передачи во время тренировки. Вам также предоставляется индивидуальная программа тренировок с опытным тренером, который поможет вам достичь ваших целей и обеспечит необходимую мотивацию. Приятным дополнением к вашей карте будет бесплатный доступ к групповым занятиям - от йоги до Zumba и MMA, а также специальные программы, направленные на укрепление мышц, повышение гибкости и растяжку. К тому же, Вы получаете скидки на услуги салона красоты и массажа.',
                cost: 12500,
                mode: 'month',
                image: require('@/assets/imageFitnessWorkout3.jpeg'),
                popularity: 4400,
            },
            {
                name: 'Экономный Супер',
                desc: 'Хотите быть в форме, но заботитесь о своем бюджете? Тогда наш экономичный тариф именно для Вас! Доступ к современному тренажерному залу, групповым занятиям и бассейну значительно дешевле, чем у большинства конкурентов. Если Вы не хотите переплачивать за дополнительные услуги, а желаете получить только самое необходимое, то наш экономичный тариф – это именно то, что нужно! Удобный график работы центра позволяет заниматься фитнесом в любое время, а специальные акции и предложения делают его посещение еще более привлекательным и выгодным. Развивайте свое тело и экономьте свой бюджет вместе с нами!',
                cost: 3400,
                mode: 'six_months',
                image: require('@/assets/imageFitnessWorkout4.jpeg'),
                popularity: 2000,
            },
            {
                name: 'Стандартный Plus',
                desc: 'Стандартный Plus тариф фитнес-центра предоставляет идеальный баланс между ценой и качеством. Он включает полный доступ к нашим залам современного оборудования, а также широкий выбор групповых программ - от йоги до HIIT тренировок. Стандартные услуги также включают персонализированный план тренировок, составленный нашими квалифицированными тренерами, и набор индивидуальных упражнений, направленных на достижение ваших целей. Мы также предоставляем свежие полотенца и принадлежности для душа без дополнительной оплаты. Выбирая Стандартный тариф, вы получаете все необходимое для поддержания здорового образа жизни по разумной цене.',
                cost: 3400,
                mode: 'six_months',
                image: require('@/assets/imageFitnessWorkout1.jpeg'),
                popularity: 3500,
            },
            {
                name: 'VIP-Премиум',
                desc: 'Вы получаете доступ к оснащенному новейшим спортивным оборудованием просторному залу, где вы можете заниматься в удобное время. Абсолютно все тренажеры обеспечены индивидуальными телевизорами, так что вы можете смотреть любимые передачи во время тренировки. Вам также предоставляется индивидуальная программа тренировок с опытным тренером, который поможет вам достичь ваших целей и обеспечит необходимую мотивацию. Приятным дополнением к вашей карте будет бесплатный доступ к групповым занятиям - от йоги до Zumba и MMA, а также специальные программы, направленные на укрепление мышц, повышение гибкости и растяжку. К тому же, Вы получаете скидки на услуги салона красоты и массажа.',
                cost: 3400,
                mode: 'six_months',
                image: '',
                popularity: 1500,
            },
            {
                name: 'Любительский',
                desc: 'Хотите быть в форме, но заботитесь о своем бюджете? Тогда наш любительский тариф именно для Вас! Доступ к современному тренажерному залу, групповым занятиям и бассейну значительно дешевле, чем у большинства конкурентов. Если Вы не хотите переплачивать за дополнительные услуги, а желаете получить только самое необходимое, то наш экономичный тариф – это именно то, что нужно! Удобный график работы центра позволяет заниматься фитнесом в любое время, а специальные акции и предложения делают его посещение еще более привлекательным и выгодным. Развивайте свое тело и экономьте свой бюджет вместе с нами!',
                cost: 3400,
                mode: 'year',
                image: '',
                popularity: 3500,
            },
            {
                name: 'Стандартный Pro',
                desc: 'Стандартный Pro тариф фитнес-центра предоставляет идеальный баланс между ценой и качеством. Он включает полный доступ к нашим залам современного оборудования, а также широкий выбор групповых программ - от йоги до HIIT тренировок. Стандартные услуги также включают персонализированный план тренировок, составленный нашими квалифицированными тренерами, и набор индивидуальных упражнений, направленных на достижение ваших целей. Мы также предоставляем свежие полотенца и принадлежности для душа без дополнительной оплаты. Выбирая Стандартный тариф, вы получаете все необходимое для поддержания здорового образа жизни по разумной цене.',
                cost: 3400,
                mode: 'year',
                image: '',
                popularity: 1200,
            },
            {
                name: 'Грандиозный',
                desc: 'Вы получаете доступ к оснащенному новейшим спортивным оборудованием просторному залу, где вы можете заниматься в удобное время. Абсолютно все тренажеры обеспечены индивидуальными телевизорами, так что вы можете смотреть любимые передачи во время тренировки. Вам также предоставляется индивидуальная программа тренировок с опытным тренером, который поможет вам достичь ваших целей и обеспечит необходимую мотивацию. Приятным дополнением к вашей карте будет бесплатный доступ к групповым занятиям - от йоги до Zumba и MMA, а также специальные программы, направленные на укрепление мышц, повышение гибкости и растяжку. К тому же, Вы получаете скидки на услуги салона красоты и массажа.',
                cost: 3400,
                mode: 'year',
                image: '',
                popularity: 800,
            },
        ]
    }),
    computed: {
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
    setup () {
      const { handleSubmit, handleReset } = useForm({
        validationSchema: {
          name (value) {
            if (value?.length >= 2) return true

            return 'Имя должно быть не менее двух символов!'
          },
          phone (value) {
            if (value?.length > 9 && /[0-9-]+/.test(value)) return true

            return 'Тлефонный номер должен состоять из более 9 цифр'
          },
          email (value) {
            if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true

            return 'Неправильно введен e-mail адрес.'
          },
          text (value) {
            if (10 <= value?.length && value?.length <= 240) return true

            return 'Сообщение должно быть от 10 до 240 символов'
          },
        },
      })
      const name = useField('name')
      const phone = useField('phone')
      const email = useField('email')
      const text = useField('text')

      const submit = handleSubmit(values => {
        alert(JSON.stringify(values, null, 2))
      })

      return { name, phone, email, text, submit, handleReset }
    },
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

.contact__form {
    max-width: 420px;
    margin: 20px auto;
}

.tariffs__title, .contact__title {
    font-size: 24px;
    max-width: 820px;
    text-align: center;
    margin: 40px auto 12px;
}

</style>
  