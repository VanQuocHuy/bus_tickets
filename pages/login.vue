<template>
  <div class="dangnhap_dangki">
    <div class="login">
      <div class="img">
        <img src="/images/dn_dk.svg" alt="" class="img_dn">
      </div>
      <div class="dndk">
        <h4>Đăng nhập/Đăng ký tài khoản</h4>
        <div class="tabs">
          <button 
            :class="{ active: activeTab === 'login' }" 
            @click="activeTab = 'login'"
          >
            ĐĂNG NHẬP
          </button>

          <button 
            :class="{ active: activeTab === 'register' }" 
            @click="activeTab = 'register'"
          >
            ĐĂNG KÝ
          </button>
          <hr class="lane">
        </div>
                      <!-- Nội dung Đăng nhập -->
        <div v-if="activeTab === 'login'" class="tab-content">
          <div class="input-group">
            <span class="input-icon">
              <img src="/images/mail_send.svg" alt="Email Icon" class="icon">
            </span>
            <input type="email" placeholder="Nhập địa chỉ email" class="input">
          </div>
          <div class="input-group">
            <span class="input-icon">
              <img src="/images/password.svg" alt="Password Icon" class="icon">
            </span>
            <input :type="showPassword ? 'text' : 'password'" placeholder="Nhập mật khẩu" class="input">
            <span class="toggle-password" 
              @click="togglePasswordVisibility"><img 
              :src="showPassword ? '/images/eye.svg' : '/images/eye-slash.svg'" 
              alt="Toggle Password Visibility" 
              class="icon">
           </span>
          </div>
          <div class="google-login">
               <button class="google-button">
                Sign in with Google Account
                <img src="/images/iconGG.png" alt="Google Icon" class="google-icon">
               </button>
          </div>
          <div>
             <button class="login-1"> Đăng Nhập</button>
           </div>
             <button class="forgotPass"> Quên mật khẩu</button>
        </div>  
                      <!-- Nội dung Đăng ký -->
        <div v-if="activeTab === 'register'" class="tab-content">
          <div class="input-group">
            <span class="input-icon">
              <img src="/images/mail_send.svg" alt="Email Icon" class="icon">
            </span>
            <input type="email" placeholder="Nhập địa chỉ email" class="input">
          </div>
          <div>
             <button class="login-1"> Tiếp tục</button>
           </div>
        </div>
      </div>
    </div>
    <div class="futa-group">
        <h1>KẾT NỐI C-MART GROUP</h1>
        <p>Kết nối đa dạng hệ sinh thái C-MART qua App C-MART: 
          mua vé Xe C-MART, Xe Buýt, Xe Hợp Đồng, Giao Hàng,...</p>
        <img src="/images/futagroup.svg" alt="">
      </div>   

  </div>  
</template>

<script>
export default {
  data() {
    return {
      activeTab: 'login', // Tab mặc định
      showPassword: false
    };
  },
  methods: {
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    }
  }
};
</script>


<style scoped>
.google-login {
  text-align: center; 
  margin-top: 20px; 
}
.google-button {
  background-color: #f6d4d4; 
  color: #f94d0a; 
  border: none;
  border-radius: 15px;
  padding: 10px 20px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 60%; 
  margin-left: 18%;
}
  .google-icon {
  width: 20px; 
  height: 20px;
  margin-left: 8px; 
}
.toggle-password {
  padding: 10px;
  cursor: pointer;
  background-color: #f9f9f9; 
}
.futa-group{
  margin-top: 20px;
  color:rgb(8, 83, 8) ;
  text-align: center;
  margin-bottom: 40px;
}
.futa-group p{
  color: black;
  font-weight: bold;
}
.forgotPass{
 color: #f94d0a; 
 border: none;
 background-color:#f9f9f9 ;
 margin-top: 3%;
 margin-left: 9%;
}
.login-1{
  margin-top: 5%;
  border: none;
  background-color: #f94d0a;
  color: white;
  border-radius: 15px;
  width: 50%;
  margin-left: 23%;
  height: 40px;
}
.input-group {
  display: flex;
  align-items: center;
  margin-top: 20px;
  border: 1px solid #f94d0a;
  border-radius: 5px;
  overflow: hidden;
  background-color: #fbdcd2;
  width: 80%;
  margin-left: 9%;
}
.input-icon {
  padding: 10px;
  background-color: rgb(250, 217, 209);
}
.input{
  flex: 1;
  padding: 10px;
  border: none;
  outline: none;
  font-size: 16px;
}
.icon {
  width: 20px;
  height: 20px;
}
.tabs {
  margin-top: 20px;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  margin-right: 10px;
  border-radius: 5px;
  outline: none;
}
.tabs button {
  background-color: #f9f9f9;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  margin-right: 10px;
  outline: none;
  font-weight: bold;
}
.tabs button:hover {
  color: #f94d0a; 
}
.tabs button.active {
  color: #f94d0a;
}
.tab-content {
  margin-top: 20px;
  text-align: left;
}
.login {
  border: 1px solid red; 
  padding: 10px;
  margin: 10px auto;
  border-radius: 10px;
  width: 1100px;
  margin-top: 30px;
  display: flex;
  gap: 25px; 
  background-color: #f9f9f9; 
  box-shadow: 0 4px 8px rgba(249, 77, 10, 0.4);

}
.img_dn {
    max-width: 100%;
    height: auto;
}
.dndk {
  text-align: center;
  border-radius: 7px;
  width: 50%;
  color: #f94d0a;
  margin-bottom: 2%;
  
}
</style>
