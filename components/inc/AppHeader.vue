<template>
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container">
            <NuxtLink to="/">
              <img src="/images/logo1.webp" class="logo-img" alt="Logo">
            </NuxtLink>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav m-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <NuxtLink to="/" class="nav-link nav-text"> Trang Chủ </NuxtLink>
              </li> 
              <li class="nav-item">
                <NuxtLink to="/schedule" class="nav-link nav-text"> Đặt vé xe C-MART </NuxtLink>
              </li>
              <li class="nav-item"> 
                <NuxtLink to="/ticket_search" class="nav-link nav-text"> Tra Cứu Vé </NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/contact" class="nav-link nav-text"> Liên Hệ</NuxtLink>
              </li>
            </ul>
            <NuxtLink to="/login" class="dn_dk" v-if="!user">
              <img src="/images/profile.svg" alt="" class="icon-profile"> Đăng nhập/Đăng ký
            </NuxtLink>
            <NuxtLink to="/user" class="dn_dk" v-if="user">
              <img :src="user?.data?.avatarUrl ? user?.data?.avatarUrl : '/images/avatar-default.jpg'" alt="" class="icon-profile"> 
                <span>{{user?.data?.fullName}}</span>
            </NuxtLink>
          </div>
        </div>  
      </nav>
  </div>
</template>
  
<script>
  export default {
    name: 'Header',
    data () {
      return {
        currentUser: null
      }
    },
    computed: {
      user() {
        return this.$store.getters['userStore/user'];
      },
    },
    created() {      
      if (process.client) {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
          this.$store.commit('userStore/SET_USER', user);
        }
      }
    },
  }
</script>
<style>
  .logo-img{
    width: 200px;
    height: auto;
    margin-left: 0px;
  }
  .navbar{
    background-color: orange !important;
    width: 100% ;
    height: 100px;
    display: flex;
    justify-content: space-between; /* Căn đều phần tử con */
    align-items: center;
  }
  .nav-text{
    font-size: 1rem;
    color: white;
  }
  .nav-item {
    margin-right: 1rem; /* Giãn khoảng cách giữa các mục */
  }

  .dn_dk{
    border: none;
    border-radius: 12px;
    align-items: center;
    color: red;
    display: flex;
    justify-content: center;
    width: 200px;
    height: 30px;
    background-color: white; /* Thêm màu nền nếu cần */
    gap: 8px; /* Khoảng cách giữa icon và text */
    text-decoration: none;
    padding: 0 10px;
    
  }
  .icon-profile {
    width: 22px; /* Điều chỉnh kích thước icon nếu cần */
    height: 22px;
    border-radius: 50%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
  .dn_dk>span {
    flex: 1;
  }
</style>