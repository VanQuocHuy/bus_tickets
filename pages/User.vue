<template>
  <div class="container-user">
    <div class="User">
      <div class="content-tab">

        <div class="tab-item" :class="{ active: activeTab === 'info' }" @click="setActiveTab('info')">
          <img src="/images/profile1.svg" alt="">
          <span>Thông tin tài khoản</span>
        </div>

        <div class="tab-item" :class="{ active: activeTab === 'history' }" @click="setActiveTab('history')">
          <img src="/images/history.svg" alt="">
          <span>Lịch sử mua vé</span>
        </div>

        <div class="tab-item" :class="{ active: activeTab === 'reset' }" @click="setActiveTab('reset')">
          <img src="/images/password1.svg" alt="">
          <span>Đặt lại mật khẩu</span>
        </div>

        <div class="tab-item" :class="{ active: activeTab === 'logout' }" @click="setActiveTab('logout')">
          <img src="/images/logout.svg" alt="">
          <span>Đăng Xuất</span>
        </div>
      </div>
      <!-- Nội dung các Tab -->
      <div class="content-in4">
        <div v-if="activeTab === 'info'">
          <div class="in4-tk" style="color: red; font-size: 23px; text-align: center;">Thông tin tài khoản</div>
          <div class="edit-in4">
            <div class="IMG">
                 <img class="avatar" :src="avatarUrl" alt="Avatar">
                 <input type="file" ref="fileInput" @change="onFileSelected" style="display: none;">
                 <button class="change-avatar-btn" @click="openFileDialog">Chọn ảnh</button>
            </div>

            <div class="information">
              <div class="info-item">
                <label for="name">Họ và tên:</label>
                  <input type="text" id="name" v-model="name" :readonly="!isEditingName">
                  <button @click="toggleEdit('name')" :class="['edit-btn', isEditingName ? 'editing' : '']">
                  <img src="/images/rename.svg" alt="Edit">
                  </button>
             </div>
             
             <div class="info-item">
                <label for="phone">Số điện thoại:</label>
               <input type="phone" id="phone" v-model="phone" :readonly="!isEditingPhone">
               <button @click="toggleEdit('phone')" :class="['edit-btn', isEditingPhone ? 'editing' : '']">
               <img src="/images/rename.svg" alt="Edit">
               </button>
             </div>

             <div class="info-item">
               <label for="email">Email:</label>
               <input type="email" id="email" v-model="email" :readonly="!isEditingEmail">
               <button @click="toggleEdit('email')" :class="['edit-btn', isEditingEmail ? 'editing' : '']">
               <img src="/images/rename.svg" alt="Edit">
               </button>
            </div>

             <div class="info-item">
                <label for="gender">Giới tính:</label>
              <select id="gender" v-model="gender">
                <option value="male">Nam</option>
                <option value="female">Nữ</option>
                <option value="other">Khác</option>
              </select>
             </div>

             <div class="info-item">
              <label for="birthdate">Ngày sinh:</label>
              <input type="date" id="birthdate" v-model="birthdate" :readonly="!isEditingBirthdate">
              <button @click="toggleEdit('birthdate')" :class="['edit-btn', isEditingBirthdate ? 'editing' : '']">
              <img src="/images/rename.svg" alt="Edit">
              </button>
             </div>

             <div class="info-item">
              <label for="address">Địa chỉ:</label>
              <input type="text" id="address" v-model="address" :readonly="!isEditingAddress">
              <button @click="toggleEdit('address')" :class="['edit-btn', isEditingAddress ? 'editing' : '']">
              <img src="/images/rename.svg" alt="Edit">
              </button>
             </div>
              <button class="Update" @click="updateInfo">Cập nhật</button>
            </div>
          </div>
        </div>

        <div v-if="activeTab === 'history'">
          <h3>Lịch sử mua vé</h3>
          <p>Danh sách các vé đã mua.</p>
        </div>

        <div v-if="activeTab === 'reset'">
          <h3>Đặt lại mật khẩu</h3>
          <p>Hãy nhập thông tin để đặt lại mật khẩu của bạn.</p>
        </div>

        <div v-if="activeTab === 'logout'">
          <h3>Đăng Xuất</h3>
          <p>Bạn có chắc chắn muốn đăng xuất không?</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 'info',
      avatarUrl: '/images/avt.jpg', // Avatar mặc định
      name: '',
      phone: '',
      email: '',
      gender: '',
      birthdate: '',
      address: '',
      isEditingPhone: false,
      isEditingName: false,
      isEditingEmail: false,
      isEditingBirthdate: false,
      isEditingAddress: false,
    };
  },
  mounted() {
    // Kiểm tra nếu có dữ liệu trong local storage thì hiển thị
    if (localStorage.getItem('avatarUrl')) {
      this.avatarUrl = localStorage.getItem('avatarUrl');
    }
    if (localStorage.getItem('name')) {
      this.name = localStorage.getItem('name');
    }
    if (localStorage.getItem('email')) {
      this.email = localStorage.getItem('email');
    }
    if (localStorage.getItem('birthdate')) {
      this.birthdate = localStorage.getItem('birthdate');
    }
    if (localStorage.getItem('address')) {
      this.address = localStorage.getItem('address');
    }
    if (localStorage.getItem('phone')) {
      this.phone = localStorage.getItem('phone');
    } 
    if (localStorage.getItem('gender')) {
    this.gender = localStorage.getItem('gender'); 
    }
  },

  methods: {
    setActiveTab(tab) {
      this.activeTab = tab; // Cập nhật tab hiện tại
    },
    openFileDialog() {
      // Kích hoạt hộp thoại chọn tệp
      this.$refs.fileInput.click();
    },
    onFileSelected(event) {
      const file = event.target.files[0];
      if (file) {
        // Tạo URL cho hình ảnh vừa chọn và hiển thị lên
        this.avatarUrl = URL.createObjectURL(file);
        localStorage.setItem('avatarUrl', this.avatarUrl);
      }
    },
    toggleEdit(field) {
      if (field === 'name') {
        this.isEditingName = !this.isEditingName;
      } else if (field === 'email') {
        this.isEditingEmail = !this.isEditingEmail;
      } else if (field === 'birthdate') {
        this.isEditingBirthdate = !this.isEditingBirthdate;
      } else if (field === 'address') {
        this.isEditingAddress = !this.isEditingAddress;
      } else if (field === 'phone') {
        this.isEditingPhone = !this.isEditingPhone;
      }
    },
    updateInfo() {
      // Lưu thông tin vào local storage khi nhấn nút cập nhật
      localStorage.setItem('name', this.name);
      localStorage.setItem('email', this.email);
      localStorage.setItem('birthdate', this.birthdate);
      localStorage.setItem('address', this.address);
      localStorage.setItem('phone', this.phone);
      localStorage.setItem('gender', this.gender);
      alert('Cập nhật thành công');
    }
  }
}
</script>



<style>
.Update{
  border: none;
  color: white;
  background-color: #f2754e;
  border-radius: 20px;
  width: 20%;
  height: 40px;
  margin-bottom: 2%;
  margin-left: 40%;
}
.info-item {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  gap: 10px; 
}
.info-item label {
  color: #008e15;
  text-align: right;
}
.info-item input, .info-item select {
  flex: 1;
  padding: 8px;
  border: none;
  border-radius: 5px;
  margin-right: 10px;
}
.edit-btn {
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  display: flex;
  align-items: center; 
  justify-content: center; 
  margin-right: 2%;
}
.edit-btn.editing {
  background-color: #f86666; 
  color: #fff;
  border-radius: 5px;
}
.edit-btn img {
  width: 20px;
  height: 20px;
}
.information{
  width: 65%;
  margin-top: 2%;
}
.IMG {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 35%;
  margin-top: 2%;
}
.avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 2px solid #ccc;
  margin-bottom: 15px;
}

.change-avatar-btn {
  padding: 10px 20px;
  border: none;
  background-color: #fca37a;
  color: white;
  border-radius: 20px;
  cursor: pointer;
}

.change-avatar-btn:hover {
  background-color: #0056b3;
}
.edit-in4{
 border: 1px solid rgb(212, 212, 212);
 margin-top: 2%;
 border-radius: 15px;
 display: flex;
}
.content-tab {
  width: 30%;
  border-radius: 15px;
  padding: 10px;
  height: 100%;
  border: 1px solid rgb(255, 164, 164);
  box-shadow: 0 4px 8px rgba(249, 77, 10, 0.4);
}

.tab-item {
  display: flex;
  align-items: center;
  padding: 10px 0;
  cursor: pointer;
  height: 30%;
  transition: background-color 0.3s;
}
.tab-item img {
  margin-right: 15px; 
  margin-left: 15px;
}

.tab-item span {
  font-size: 16px;
  font-weight: bold;
}

.tab-item:hover {
  background-color: #fff7f5;
}

.tab-item.active {
  background-color: #fff7f5; 
  font-weight: bold;
}

.content-in4 {
  border: 1px solid rgb(255, 164, 164);
  box-shadow: 0 4px 8px rgba(249, 77, 10, 0.4);
  width: 70%;
  border-radius: 15px;
  padding: 20px;
  font-size: 16px;
}

.User {
  padding: 10px;
  margin: 10px auto;
  border-radius: 10px;
  width: 1150px;
  margin-top: 30px;
  display: flex;
  gap: 25px;
  background-color: white;
  margin-bottom: 3%;
}

</style>