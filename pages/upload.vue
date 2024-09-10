<template>
  <div>
    <input type="file" @change="handleFileChange" />
    <button @click="uploadImage">Upload Image</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      selectedFile: null,
    };
  },
  methods: {
    handleFileChange(event) {
      this.selectedFile = event.target.files[0];
    },
    async uploadImage() {
      if (this.selectedFile) {
        const formData = new FormData();
        formData.append('file', this.selectedFile);
        formData.append('userId', '66de86aa15755c5f2755047e'); // nguyenvanminh8864@gmail.com
        // formData.append('userId', '66de8a4fb273ad6a655b57cf'); // cuongle.23012001@gmail.com

        try {
          const response = await axios.post('http://localhost:8000/v1/bustickets/user/upload-image', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
          console.log(response.data.message, ' : ', response.data.data);
        } catch (error) {
          console.error('Tải ảnh thất bại:', error);
        }
      }
    },
  },
};
</script>

<style>
/* CSS styles */
</style>
