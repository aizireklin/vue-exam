<template>
    <form class="contact__form" @submit.prevent="submit" max-width="540px" width="100%">
        <v-text-field v-model="name.value.value" variant="outlined" :error-messages="name.errorMessage.value" label="Имя">
        </v-text-field>
        <v-text-field v-model="phone.value.value" variant="outlined" :error-messages="phone.errorMessage.value"
            label="Номер телефона">
        </v-text-field>
        <v-text-field v-model="email.value.value" variant="outlined" :error-messages="email.errorMessage.value"
            label="E-mail">
        </v-text-field>
        <v-textarea v-model="text.value.value" label="Ваш вопрос или предложение" variant="outlined"
            :error-messages="text.errorMessage.value">
        </v-textarea>
        <div class="contact__action">
            <v-btn class="me-4" type="submit" @click="sendComment({ name: name.value.value, text: text.value.value })">
                Отправить
            </v-btn>
            <v-btn @click="handleReset">
                Очистить
            </v-btn>
        </div>
    </form>
</template>
  
<script>
import { useField, useForm } from 'vee-validate'

export default {
    name: 'HomeFormComponent',
    props: ['comments'],
    methods: {
        sendComment(obj){
            this.$emit('commentSubmit', obj);
        },
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
            return 'Тeлефонный номер должен состоять из более 9 цифр'
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
</style>
  