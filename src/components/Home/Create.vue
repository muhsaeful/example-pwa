<template>
  <div class="card-header">
    <h1>From Create</h1>
  </div>
  <div class="card-body">
    <form @submit.prevent="store()">
      <label class="form-label" for="title">Title</label>
      <input
        v-model="content.title"
        class="form-control is-valid"
        type="text"
        id="title"
        required
        autofocus
      />

      <label class="form-label mt-3" for="content">Content</label>
      <textarea
        v-model="content.content"
        class="form-control is-valid"
        id="content"
        rows="10"
        required
      ></textarea>

      <router-link
        class="btn btn-danger btn-sm rounded shadow m-1"
        :to="{ name: 'home.index' }"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-arrow-left-circle-fill"
          viewBox="0 0 16 16"
        >
          <path
            d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
          /></svg
      ></router-link>

      <button type="submit" class="btn btn-success btn-sm rounded shadow m-1">
        Save
      </button>
    </form>
  </div>
</template>
<script>
import { reactive, ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

export default {
  setup() {
    const content = {
      title: "",
      content: "",
    };

    const validation = ref([]);
    const router = useRouter();

    async function store() {
      let save = await axios.post("https://anct.sae.my.id/api", content);
      if (save.status === 201) {
        router.push({ name: "home.index" }, { msg: "content created" });
      } else {
        validation.value = { msg: "content not created" };
      }
    }

    return {
      content,
      store,
      router,
      validation,
    };
  },
};
</script>