<template>
  <div class="user-container-user">
    <Loading v-if="loading" />
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

        <div class="tab-item" @click="handleLogout()">
          <img src="/images/logout.svg" alt="">
          <span>Đăng Xuất</span>
        </div>
      </div>
      <!-- Nội dung các Tab -->
      <div class="content-in4">
        <div v-if="activeTab === 'info'">
          <div class="in4-tk" style="color: red; font-size: 23px; text-align: center;">Thông tin tài khoản</div>
          <div class="edit-in4">
            <div class="user-container-img">
                 <img class="user-container-avatar" :src="currentUser?.avatarUrl ? currentUser?.avatarUrl : '/images/avatar-default.jpg'" alt="Avatar">
                 <input type="file" ref="fileInput" @change="onFileSelected" style="display: none;">
                 <button class="change-avatar-btn" @click="openFileDialog">Chọn ảnh</button>
            </div>

            <div class="user-container-information">
              <div class="user-container-info-item">
                <label for="name">Họ và tên:</label>
                  <input type="text" id="name" v-model="name" :readonly="!isEditingName">
                  <button @click="toggleEdit('name')" :class="['user-container-edit-btn', isEditingName ? 'user-container-editing' : '']">
                  <img src="/images/rename.svg" alt="Edit">
                  </button>
             </div>
             
             <div class="user-container-info-item">
                <label for="phone">Số điện thoại:</label>
               <input type="phone" id="phone" v-model="phone" :readonly="!isEditingPhone">
               <button @click="toggleEdit('phone')" :class="['user-container-edit-btn', isEditingPhone ? 'user-container-editing' : '']">
               <img src="/images/rename.svg" alt="Edit">
               </button>
             </div>

             <div class="user-container-info-item">
               <label for="email">Email:</label>
               <input type="email" id="email" v-model="email" :readonly="!isEditingEmail">
               <button @click="toggleEdit('email')" :class="['user-container-edit-btn', isEditingEmail ? 'user-container-editing' : '']">
               <img src="/images/rename.svg" alt="Edit">
               </button>
            </div>

             <div class="user-container-info-item">
                <label for="sex">Giới tính:</label>
              <select id="sex" v-model="sex">
                <option value="Nam">Nam</option>
                <option value="Nữ">Nữ</option>
                <option value="Khác">Khác</option>
              </select>
             </div>

             <div class="user-container-info-item">
              <label for="dateOfBirth">Ngày sinh:</label>
              <input type="date" id="dateOfBirth" v-model="dateOfBirth" :readonly="!isEditingDateOfBirth">
              <button @click="toggleEdit('dateOfBirth')" :class="['user-container-edit-btn', isEditingDateOfBirth ? 'user-container-editing' : '']">
              <img src="/images/rename.svg" alt="Edit">
              </button>
             </div>

             <div class="user-container-info-item">
              <label for="address">Địa chỉ:</label>
              <input type="text" id="address" v-model="address" :readonly="!isEditingAddress">
              <button @click="toggleEdit('address')" :class="['user-container-edit-btn', isEditingAddress ? 'user-container-editing' : '']">
              <img src="/images/rename.svg" alt="Edit">
              </button>
             </div>
             <div class="user-container-info-item">
              <label for="address">Số dư:</label>
              <span>{{currentUser?.money.toLocaleString('vi-VN') + ' VND'}}</span>
             </div>
              <button class="user-container-update" @click="updateInfo">Cập nhật</button>
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
      sex: '',
      dateOfBirth: '',
      address: '',
      isEditingPhone: false,
      isEditingName: false,
      isEditingEmail: false,
      isEditingDateOfBirth: false,
      isEditingAddress: false,
      currentUser: null
    };
  },
  created() {
      if (process.client) {
        try {
          this.currentUser = JSON.parse(localStorage.getItem('user'))?.data;
          if (!this.currentUser) {
            this.$router.push('/');
          } else {
            this.name = this.currentUser?.fullName
            this.phone = this.currentUser?.phone
            this.email = this.currentUser?.email
            this.sex = this.currentUser?.sex
            this.dateOfBirth = this.currentUser?.dateOfBirth
            this.address = this.currentUser?.address
          }
        } catch (error) {
          console.error('Failed to parse user data:', error);
        }
      }
  },
  computed: {
    user() {
      return this.$store.getters['userStore/user'];
    },
    loading() {
      return this.$store.getters['userStore/loading'];
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
      }
    },
    toggleEdit(field) {
      if (field === 'name') {
        this.isEditingName = !this.isEditingName;
      } else if (field === 'email') {
        this.isEditingEmail = !this.isEditingEmail;
      } else if (field === 'dateOfBirth') {
        this.isEditingDateOfBirth = !this.isEditingDateOfBirth;
      } else if (field === 'address') {
        this.isEditingAddress = !this.isEditingAddress;
      } else if (field === 'phone') {
        this.isEditingPhone = !this.isEditingPhone;
      }
    },
    updateInfo() {
      //update thông tin
      alert('Cập nhật thành công');
    },
    async handleLogout() {      
      await this.$store.dispatch("userStore/logout"); 
    }
  }
}
</script>



<style>
.user-container-update{
  border: none;
  color: white;
  background-color: #f2754e;
  border-radius: 20px;
  width: 20%;
  height: 40px;
  margin-bottom: 2%;
  margin-left: 40%;
}
.user-container-info-item {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  gap: 10px; 
}
.user-container-info-item label {
  color: #008e15;
  text-align: right;
}
.user-container-info-item input, .user-container-info-item select {
  flex: 1;
  padding: 8px;
  border: none;
  border-radius: 5px;
  margin-right: 10px;
}
.user-container-edit-btn {
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  display: flex;
  align-items: center; 
  justify-content: center; 
  margin-right: 2%;
}
.user-container-edit-btn.user-container-editing {
  background-color: #f86666; 
  color: #fff;
  border-radius: 5px;
}
.user-container-edit-btn img {
  width: 20px;
  height: 20px;
}
.user-container-information{
  width: 65%;
  margin-top: 2%;
}
.user-container-img {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 35%;
  margin-top: 2%;
}
.user-container-avatar {
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