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
            <input type="email" placeholder="Nhập địa chỉ email" class="input login-form" v-model="userName" @blur="validateLoginEmail" ref="loginEmailInput" @keypress.enter="handleKeyPress">
          </div>
          <p class="tab-content-msg">{{currentInput === "login-email-input" ? error : ""}}</p>
          <div class="input-group">
            <span class="input-icon">
              <img src="/images/password.svg" alt="Password Icon" class="icon">
            </span>
            <input :type="showPassword ? 'text' : 'password'" placeholder="Nhập mật khẩu" class="input login-form" v-model="pass" @blur="validateLoginPassword" ref="loginPasswordInput" @keypress.enter="handleKeyPress">
            <span class="toggle-password" 
              @click="() => togglePasswordVisibility('showPassword')"><img 
              :src="showPassword ? '/images/eye.svg' : '/images/eye-slash.svg'" 
              alt="Toggle Password Visibility" 
              class="icon">
           </span>
          </div>
          <p class="tab-content-msg">{{currentInput === "login-password-input" ? error : ""}}</p>
          <div class="google-login">
               <button class="google-button">
                Sign in with Google Account
                <img src="/images/iconGG.png" alt="Google Icon" class="google-icon">
               </button>
          </div>
          <div>
             <button class="login-1" @click="handleLogin()"> Đăng Nhập</button>
           </div>
             <button class="forgotPass"> Quên mật khẩu</button>
        </div>  
                      <!-- Nội dung Đăng ký -->
        <div v-if="activeTab === 'register'" class="tab-content">
          <div class="input-group">
            <span class="input-icon">
              <img src="/images/mail_send.svg" alt="Email Icon" class="icon">
            </span>
            <input type="email" placeholder="Nhập địa chỉ email" class="input register-form" v-model="email" @blur="validateEmail" ref="emailInput" @keypress.enter="handleKeyPress">
          </div>
          <p class="tab-content-msg">{{currentInput === "resgister-mail-input" ? error : ""}}</p>

          <div class="input-group">
            <span class="input-icon">
              <img src="/images/code-solid.svg" alt="Code Icon" class="icon">
            </span>
            <input type="text" placeholder="Mã xác nhận" class="input register-form" v-model="otp" @input="onlyNumberInput($event)" @blur="validateOtp" ref="otpInput" maxlength="6" @keypress.enter="handleKeyPress">
            <div class="code-btn">
              <button class="get-code-btn" @click="getOtpMail()">{{countDown > 0 ? `(${countDown}s)` : "Lấy mã"}}</button>
            </div>
          </div>
          <p class="tab-content-msg">{{currentInput === "resgister-otp-input" ? error : ""}}</p>

          <div class="input-group">
            <span class="input-icon">
              <img src="/images/user-regular.svg" alt="Name Icon" class="icon">
            </span>
            <input type="text" placeholder="Nhập họ tên" class="input register-form" v-model="fullName" @blur="validateFullName" ref="fullNameInput" @keypress.enter="handleKeyPress">
          </div>
          <p class="tab-content-msg">{{currentInput === "resgister-fullName-input" ? error : ""}}</p>

          <div class="input-group">
            <span class="input-icon">
              <img src="/images/password.svg" alt="Pass Icon" class="icon">
            </span>
            <input :type="showPassword ? 'text' : 'password'" placeholder="Mật khẩu" class="input register-form" v-model="password" @blur="validatePassword" ref="passwordInput" @keypress.enter="handleKeyPress">
            <span class="toggle-password" 
              @click="() => togglePasswordVisibility('showPassword')"><img 
              :src="showPassword ? '/images/eye.svg' : '/images/eye-slash.svg'" 
              alt="Toggle Password Visibility" 
              class="icon">
           </span>
          </div>
          <p class="tab-content-msg">{{currentInput === "resgister-password-input" ? error : ""}}</p>

          <div class="input-group">
            <span class="input-icon">
              <img src="/images/password.svg" alt="Password Icon" class="icon">
            </span>
            <input :type="showRePassword ? 'text' : 'password'" placeholder="Xác nhận mật khẩu" class="input register-form" v-model="rePassword" @blur="validateRePassword" @keypress.enter="handleKeyPress">
            <span class="toggle-password" 
              @click="() => togglePasswordVisibility('showRePassword')"><img 
              :src="showRePassword ? '/images/eye.svg' : '/images/eye-slash.svg'" 
              alt="Toggle RePassword Visibility" 
              class="icon">
           </span>
          </div>
          <p class="tab-content-msg">{{currentInput === "resgister-rePassword-input" ? error : ""}}</p>

          <div>
             <button class="login-1" @click="handleRegister()">Đăng ký</button>
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
import axios from 'axios'

export default {
  data() {
    return {
      activeTab: 'login', // Tab mặc định
      showPassword: false,
      showRePassword: false,
      currentInput: '',
      error: '',
      email: '',
      otp: '',
      fullName: '',
      password: '',
      rePassword: '',
      countDown: 0,
      intervalId: null,
      userName: '',
      pass: '',
      currentUser: null
    };
  },
  computed: {
    user() {
      return this.$store.getters['loginStore/user'];
    },
    loading() {
      return this.$store.getters['loginStore/loading'];
    }
  },
  created() {
   // Chỉ chạy trên client-side, không chạy ở cmd của visual
    if (process.client) {
      try {
        this.currentUser = JSON.parse(localStorage.getItem('user'))?.data;
        if (this.currentUser) {
          this.$router.push('/');
        }
      } catch (error) {
        console.error('Failed to parse user data:', error);
      }
    }
  },
  methods: {
    handleKeyPress(event) {
      if (event.key === 'Enter') {
        const currentForm = event.target.className.split(' ')[1]
        
        if(currentForm === "login-form") {
          this.handleLogin();
        } else if(currentForm === "register-form"){
          this.handleRegister()
        }        
      }
    },
    togglePasswordVisibility(cuerrentEye) {
      if(cuerrentEye === "showPassword") {
        this.showPassword = !this.showPassword;
      }
      if (cuerrentEye === "showRePassword") {
        this.showRePassword = !this.showRePassword
      }
      
    },
    validateEmail() {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      this.currentInput = "resgister-mail-input"
      if(!regex.test(this.email)) {
        this.error = "*Email không đúng định dạng, vd: example@gmail.com"
        this.$refs.emailInput.focus();
      } else {
        this.error = ""
      }
    },
    onlyNumberInput(event) {
      const inputValue = event.target.value;
      const cleanedValue = inputValue.replace(/\D/g, '');
      
      if (cleanedValue.length <= 6) {
        this.otp = cleanedValue;
      }     
    },
    validateOtp() {
      const regex = /^\d{6}$/;
      this.currentInput = "resgister-otp-input"
      if(!regex.test(this.otp)) {
        this.error = "*OTP không đúng định dạng, vd: 021564"
        this.$refs.otpInput.focus();
      } else {
        this.error = ""
      }
    },
    validateFullName () {
      this.fullName = this.fullName.trim().replaceAll(/\s+/g, ' ')
      this.currentInput = "resgister-fullName-input"
      if(this.fullName.length < 5) {
        this.error = "*Độ dài họ và tên tối thiểu là 5 ký tự"
        this.$refs.fullNameInput.focus();
      } else {
        this.error = ""
      }
    },
    validatePassword () {
      this.currentInput = "resgister-password-input"
      if(this.password.length < 8) {
        this.error = "*Mật khẩu phải có ít nhất 8 ký tự"
        this.$refs.passwordInput.focus();
      } else if(!/[A-Z]/.test(this.password)) {
        this.error = "*Mật khẩu phải chứa ít nhất một chữ cái hoa."
        this.$refs.passwordInput.focus();
      } else if(!/[a-z]/.test(this.password)) {
        this.error = "*Mật khẩu phải chứa ít nhất một chữ cái thường."
        this.$refs.passwordInput.focus();
      } else if(!/[!@#$%^&*(),.?":{}|<>]/.test(this.password)) {
        this.error = "*Mật khẩu phải chứa ít nhất một ký tự đặc biệt."
        this.$refs.passwordInput.focus();
      } else {
        this.error = ""
      }
    },
    validateRePassword () {
      this.currentInput = "resgister-rePassword-input"
      if(this.password !== this.rePassword) {
        this.error = "*Mật khẩu không trùng khớp"
      } else {
        this.error = ""
      }
    },
    validateLoginEmail() {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      this.currentInput = "login-email-input"
      if(!regex.test(this.userName)) {
        this.error = "*Email không đúng định dạng, vd: example@gmail.com"
        this.$refs.loginEmailInput.focus();
      } else {
        this.error = ""
      }
    },
    validateLoginPassword () {
      this.currentInput = "login-password-input"
      if(this.pass.length < 8) {
        this.error = "*Mật khẩu phải có ít nhất 8 ký tự"
        this.$refs.loginPasswordInput.focus();
      } else {
        this.error = ""
      }
    },
    async getOtpMail() {
      if(this.email === "") {
        this.currentInput = "resgister-mail-input"
        this.error= "*Không được để trống email"
        this.$refs.emailInput.focus();
      } else if(this.countDown > 0) {
        this.currentInput = "resgister-otp-input"
        this.error= "*Mỗi phút bạn chỉ có thể lấy 1 mã OTP"
      } else {
        const res = await axios.post("http://localhost:8000/v1/bustickets/otp/send-otp", {
            email: this.email
        })
        if(res.data.status) {       
          alert(res.data.message)
          this.countDown = res.data.data
          this.intervalId = setInterval(() => {
            if(this.countDown > 0) {
              this.countDown--
            } else {
              this.error= ""
              clearInterval(this.intervalId)
            }
          }, 1000)          
        } else {
          alert("Lấy mã otp thất bại")
        }
      }
    },
    async handleRegister() {
      if(!this.email) {
        this.currentInput = "resgister-mail-input"
        this.error= "*Không được để trống email"
        this.$refs.emailInput.focus();
      } else if (!this.otp) {
        this.currentInput = "resgister-otp-input"
        this.error= "*Không được để trống OTP"
        this.$refs.otpInput.focus();
      } else if (!this.fullName) {
        this.currentInput = "resgister-fullName-input"
        this.error= "*Không được để trống họ tên"
        this.$refs.fullNameInput.focus();
      } else if (!this.password) {
        this.currentInput = "resgister-password-input"
        this.error= "*Không được để trống mật khẩu"
        this.$refs.passwordInput.focus();
      } else if (!this.rePassword) {
        this.currentInput = "resgister-rePassword-input"
        this.error= "*Không được để trống xác nhận mật khẩu"
      } else if(this.rePassword !== this.password) {
        this.validateRePassword()
      } else{
        const newUser = {
          email: this.email,
          fullName: this.fullName,
          password: this.password,
          otp: this.otp
        }
        const res = await axios.post("http://localhost:8000/v1/bustickets/user/register-user", newUser)
        
        alert(res.data.message)
        if(res.data.code === 200) {
          this.email = ''
          this.fullName = ''
          this.password = '',
          this.otp = ''
          this.activeTab = "login"
        }
      }
    },
    async handleLogin() {
      if(!this.userName) {
        this.currentInput = "login-email-input"
        this.error= "*Không được để trống email"
        this.$refs.loginEmailInput.focus();
      } else if (!this.pass) {
        this.currentInput = "login-password-input"
        this.error= "*Không được để trống mật khẩu"
        this.$refs.loginPasswordInput.focus();
      } else {
        const newUser = {
          email: this.userName,
          password: this.pass,
        }
        await this.$store.dispatch('loginStore/getUser', newUser);
        this.currentUser = this.user.data
        if(this.user.status) {
          window.location.reload()
          this.$router.push('/');
        } else {
          alert(this.user.message)
        }
      }
    }
  }
};
</script>

<style scoped>

.get-code-btn {
  background-color: transparent;
  color:#f94d0a ;
  border: none;
  font-weight: bold;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 20px;
  font-size: 14px;
}
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
  background-color: white; 
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
  padding-right: 80px;
}
.tab-content-msg {
  margin: 5px 0 0 9%;
  font-size: 14px;
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
