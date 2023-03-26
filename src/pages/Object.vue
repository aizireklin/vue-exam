<template>
  <section class="object">
    <div class="object__wrapper">
      <img :src="require('@/assets/'+tariff.image)" alt="" class="object__image">
      <div class="object__info">
        <h2 class="object__name">{{ tariff.name }}</h2>
        <p class="object__desc">
          {{ tariff.desc }}
        </p>
        <p class="object__price">{{ tariff.cost }} руб.{{tariff.mode == 'month'? '/мес.' : (tariff.mode == 'six_months' ? ' за 6 мес.':'/год') }}</p>
      </div>
      <button v-if="!editMode" class="object__button" @click="editMode = true">
        Изменить тариф
      </button>
      <form v-if="editMode" class="object__form" @submit.prevent="onSubmit">
        <div class="object__field">
          <label for="inputobjectName">
            Наименование тарифа
          </label>
          <input type="text" id="inputobjectName" v-model="tariff.name"
          placeholder="Название тарифа" class="object__input">
        </div>
        <div class="object__field">
          <label for="inputobjectDescription">
            Описание тарифа
          </label>
          <textarea id="inputobjectDescription" v-model="tariff.desc" placeholder="Описание тарифа"
            class="object__input"></textarea>
          </div>
        <div class="object__field object__field_row">
          <label for="inputobjectCoins">
            Цена тарифа
          </label>
          <input type="number" v-model="tariff.cost" id="inputobjectCoins"
            placeholder="Стоимость" class="object__input">
          </div>
        <div class="object__field object__field_row">
          <label for="dropdownobjectsMode">
            Длительность
          </label>
          <select name="difficultyobject" id="dropdownobjectsMode"
          class="object__select" v-model="tariff.mode">
            <option value="month">месяц</option>
            <option value="six_months">6 месяцев</option>
            <option value="year">год</option>
          </select>
        </div>
        <button class="object__button object__button_save" @click="editMode = false">
          Сохранить
        </button>
      </form>
    </div>
  </section>
</template>
  
<script>
import file from '@/assets/main.json'
export default {
  name: 'ObjectPage',
  data(){
    return {
      tariff: {},
      editMode: false,
    }
  },
  created() {
      if (this.$route.params.id) {
        this.tariff = file[this.$route.params.id];
      } else {
      this.tariff = {
        id: 0,
        name: 'Экономный',
        desc: 'Хотите быть в форме, но заботитесь о своем бюджете? Тогда наш экономичный тариф именно для Вас! Доступ к современному тренажерному залу, групповым занятиям и бассейну значительно дешевле, чем у большинства конкурентов. Если Вы не хотите переплачивать за дополнительные услуги, а желаете получить только самое необходимое, то наш экономичный тариф – это именно то, что нужно! Удобный график работы центра позволяет заниматься фитнесом в любое время, а специальные акции и предложения делают его посещение еще более привлекательным и выгодным. Развивайте свое тело и экономьте свой бюджет вместе с нами!',
        cost: 3440,
        mode: 'month',
        image: 'imageFitnessWorkout1.jpeg',
        popularity: 8500,
      };}
  },
}
</script>
  
<style scoped>
.object__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 60px 20px 40px;
  background-color: #f1f1f1;
}

.object__image {
  max-width: 640px;
  object-fit: cover;
  min-height: 240px;
  width: 100%;
  text-align: center;
  border-radius: 16px;
}

.object__price {
  font-size: 20px;
  font-weight: bold;
  color: #c40f0f;
  text-align: center;
}

.object__name {
  color: #202d8e;
  font-size: 24px;
  text-align: center;
}

.object__info {
  margin: 16px 0;
  max-width: 640px;
}

.object__field {
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 16px;
  text-align: left;
  margin-bottom: 10px;
}

.object__field_row {
  flex-direction: row;
  align-items: center;
}

.object__form {
  max-width: 640px;
  width: 100%;
  border-radius: 8px;
  border: 1px solid blue;
  padding: 14px;
  margin: 20px;
}

.object__input, .object__select {
  padding: 4px 6px;
  border: 1px solid black;
  border-radius: 6px;
  min-width: 200px;
}

.object__select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background: url('@/assets/arrowDown.svg') no-repeat right center;
}

.object__button {
  border: 1px solid black;
  border-radius: 6px;
  padding: 6px 16px;
  font-size: 14px;
}

.object__button:hover {
  background-color: black;
  color: white;
}

@media print {
  .object__button {
    display: none;
  }
}
</style>
  