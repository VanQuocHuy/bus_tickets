<template>
  <div class="contact-container">
    <div class="contact-form">
      <img src="/images/mail_send.svg" alt="Gửi thông tin liên hệ đến chúng tôi"> 
      <h2>Gửi thông tin liên hệ đến chúng tôi</h2>
      <div class="infor">
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="name">Họ và Tên:</label>
            <input type="text" id="name" v-model="name" required>
          </div>
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="email" required>
          </div>
          <div class="form-group">
            <label for="phone">Số Điện Thoại:</label>
            <input type="tel" id="phone" v-model="phone" required>
          </div>
          <button type="submit">Gửi</button>
        </form>
      </div>
    </div>
    
    <div class="contact-info">
      <h3>CÔNG TY CỔ PHẦN XE KHÁCH C-MART BUS LINES</h3>
      <p><strong>Email:</strong> c-mart@busline.com.vn</p>
      <p><strong>Địa chỉ:</strong> 200 Xuân Thủy, Quận Cẩm Lệ, TP. Đà Nẵng</p>
      <p><strong>Hotline:</strong> 1900 123 456</p>
      <img src="/images/bus.jpg" alt="Nhà xe" class="company-image">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      phone: ''
    };
  },
  methods: {
    submitForm() {
      console.log('Thông tin liên hệ:', this.name, this.email, this.phone);
      alert('Thông tin của bạn đã được gửi!');
    }
  }
}
</script>

<style scoped>
.contact-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 3%;
  font-family: 'Arial', sans-serif;
}

.contact-form {
  width: 40%;
  margin-left: 4%;
  text-align: center;
  color: #333;
  margin-bottom: 2%;
}

.contact-form img {
  max-width: 100px;
  margin-bottom: 15px;
}

.contact-form h2 {
  font-size: 24px;
  margin-bottom: 20px;
  color: orangered;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.infor {
  background: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  text-align: left;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-size: 16px;
  color: #555;
}

input {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  box-sizing: border-box;
  transition: border-color 0.3s;
}

input:focus {
  border-color: orangered;
  outline: none;
}

button {
  margin-top: 20px;
  padding: 12px;
  width: 100%;
  background-color: orangered;
  color: white;
  border: none;
  border-radius: 20px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: darkorange;
}

.contact-info {
  width: 40%;
  background: #f2f2f2;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  margin-right: 4%;
}

.contact-info h3 {
  font-size: 22px;
  color: orangered;
  margin-bottom: 20px;
  text-transform: uppercase;
}

.contact-info p {
  font-size: 16px;
  color: #333;
  margin-bottom: 10px;
}

.contact-info .company-image {
  margin-top: 20px;
  max-width: 67%;
  border-radius: 10px;
  
  
}
</style>
