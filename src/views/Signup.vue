<template>
  <form @submit.prevent="handleSubmit">
    <h3>Sign up</h3>

    <label for="email">Email:</label>
    <input type="email" name="email" v-model="email" required />

    <label for="email">Password:</label>
    <input type="password" name="password" v-model="password" required />

    <button>Sign up</button>
    <div v-if="error">{{error}}</div>
  </form>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  setup() {
    const email = ref("");
    const password = ref("");
    const store = useStore();
    const router = useRouter();
    const error = ref(null);
    const handleSubmit = () => {
      console.log(email.value, password.value);
      try {
        const payload = {
          email: email.value,
          password: password.value,
        };
        store.dispatch("signup", payload);
        router.push("/");
      } catch (err) {
        error.value = err;
      }
    };

    return { handleSubmit, email, password, error };
  },
};
</script>