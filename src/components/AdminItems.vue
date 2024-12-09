<template>
  <div class="admin-items">
    <h1>Admin Panel - Items</h1>
    <button @click="goToCreate">Add New Item</button>
    <table>
      <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Price</th>
        <th>Actions</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in items" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.price }}</td>
        <td>
          <button @click="goToEdit(item.id)">Edit</button>
          <button @click="deleteItem(item.id)">Delete</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      items: [],
    };
  },
  created() {
    this.fetchItems();
  },
  methods: {
    async fetchItems() {
      try {
        const response = await axios.get('/api/items');
        this.items = response.data;
      } catch (error) {
        console.error('Failed to fetch items', error);
      }
    },
    goToCreate() {
      this.$router.push('/admin/items/create');
    },
    goToEdit(id) {
      this.$router.push(`/admin/items/${id}/edit`);
    },
    async deleteItem(id) {
      try {
        await axios.delete(`/api/items/${id}`);
        this.fetchItems();
      } catch (error) {
        console.error('Failed to delete item', error);
      }
    },
  },
};
</script>
