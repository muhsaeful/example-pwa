<template>
  <div class="card-header mb-3">
    <h1>Home Index</h1>
  </div>
  <div class="card-body">
    <div>
      <router-link
        :to="{ name: 'home.create' }"
        class="btn btn-primary btn-sm rounded shadow"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-plus-square-fill"
          viewBox="0 0 16 16"
        >
          <path
            d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z"
          />
        </svg>
      </router-link>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(content, index) in contents.rows" :key="index">
            <th>{{ index + 1 }}</th>
            <td>{{ content.title }}</td>
            <td>
              <button
                @click.prevent="destroy(content.id, index)"
                class="btn btn-sm btn-danger rounded shadow"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-trash-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"
                  />
                </svg>
              </button>

              <router-link
                :to="{ name: 'home.update', params: { id: content.id } }"
                class="btn btn-sm btn-warning m-1 rounded shadow"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-pencil-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"
                  />
                </svg>
              </router-link>

              <router-link
                :to="{ name: 'home.index' }"
                class="btn btn-sm btn-primary rounded shadow"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-eye-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                  <path
                    d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"
                  />
                </svg>
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { onMounted, ref } from "vue";

export default {
  name: "homeIndex",
  setup() {
    let contents = ref([]);
    onMounted(() => {
      axios
        .get("https://anct.sae.my.id/api")
        .then((result) => {
          console.log(result.data);
          contents.value = result.data;
        })
        .catch((err) => {
          console.log(err);
        });
    });

    async function destroy(id, index) {
      let destroy = await axios.delete(`https://anct.sae.my.id/api/${id}`);
      if (destroy.status === 200) {
        contents.value.rows.splice(index, 1);
      }
    }

    return {
      contents,
      destroy,
    };
  },
};
</script>

<style>
</style>