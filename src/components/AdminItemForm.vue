<template>
  <div class="admin-item-form">
    <h1>{{ isEditing ? 'Edit Item' : 'Create Item' }}</h1>
    <form @submit.prevent="submitForm">
      <div>
        <label for="name">Name</label>
        <input id="name" v-model="form.name" required />
      </div>
      <div>
        <label for="price">Price</label>
        <input id="price" v-model="form.price" required />
      </div>
      <div>
        <label for="color">Color</label>
        <input id="color" v-model="form.color" />
      </div>
      <button type="submit">Save</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      form: {
        name: '',
        price: '',
        color: '',
      },
      isEditing: false,
    };
  },
  created() {
    const id = this.$route.params.id;
    if (id) {
      this.isEditing = true;
      this.fetchItem(id);
    }
  },
  methods: {
    async fetchItem(id) {
      try {
        const response = await axios.get(`/api/items/${id}`);
        this.form = response.data;
      } catch (error) {
        console.error('Failed to fetch item', error);
      }
    },
    async submitForm() {
      try {
        if (this.isEditing) {
          await axios.put(`/api/items/${this.$route.params.id}`, this.form);
        } else {
          await axios.post('/api/items', this.form);
        }
        this.$router.push('/admin/items');
      } catch (error) {
        console.error('Failed to save item', error);
      }
    },
  },
};
</script>
