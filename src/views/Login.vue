<template>
  <form @submit.prevent="handleSubmit">
    <h3>Login</h3>

    <label for="email">Email:</label>
    <input type="email" name="email" v-model="email" required>

    <label for="email">Password:</label>
    <input type="password" name="password" v-model="password" required>

    <button>Login</button>
    <div v-if="error">{{error}}</div>
  </form>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
export default {
  setup() {
    const email = ref('')
    const password = ref('')
    const error = ref(null)
    const router = useRouter()
    const store = useStore()
    const handleSubmit = async () => {
      console.log(email.value, password.value)
      try {
        const payload = {
          email:email.value,
          password:password.value
        }
        store.dispatch('login',payload)
        router.push('/')
      } catch (error) {
        error.value = error
      }
    }

    return { handleSubmit, email, password, error }
  }
}
</script>