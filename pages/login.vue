<template>
  <div class="dangnhap_dangki">
    <div class="login">
      <img src="/images/dn_dk.svg" alt="" class="img_dn">
      <div class="dn_dk">
        <form class="login-form">
          <h2>Đăng Nhập</h2>
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" placeholder="Nhập email của bạn">
          </div>
          <div class="form-group">
            <label for="password">Mật khẩu:</label>
            <input type="password" id="password" placeholder="Nhập mật khẩu của bạn">
          </div>
          <button type="submit" class="btn-login">Đăng Nhập</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.dangnhap_dangki {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.login {
  display: flex;
  align-items: center;
  background-color: #f7f7f7;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.img_dn {
  max-width: 50%;
  margin-right: 20px;
}

.dn_dk {
  flex: 1;
}

.login-form {
  display: flex;
  flex-direction: column;
}

.login-form h2 {
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

.btn-login {
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn-login:hover {
  background-color: #0056b3;
}
</style>
