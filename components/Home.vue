<template>
    <div class="bannner">
     <img src="/images/banner.png" alt="" class="banner-img">
     <div class="options-box">
       <div class="options">
         <label>
           <input type="radio" name="trip" value="one-way">
           Một chiều
         </label>
         <label>
           <input type="radio" name="trip" value="round-trip">
           Khứ hồi
         </label>
           <button class="guide-button">Hướng dẫn đặt vé</button>
       </div>
       <div class="form-fields">
           <div class="field-group">
             <label for="departure">Điểm đi</label>
             <input type="text" id="departure" placeholder="Nhập điểm đi" class="field">
           </div>
           <button class="switch-button" @click="switchFields">
             <img src="/images/switch.svg" alt="Switch">
           </button>
           <div class="field-group">
             <label for="destination">Điểm đến</label>
             <input type="text" id="destination" placeholder="Nhập điểm đến" class="field">
           </div>
           <div class="field-group">
             <label for="departure-date">Ngày đi</label>
             <input type="date" id="departure-date" class="field">
           </div>
           <div class="field-group">
             <label for="ticket-number">Số vé</label>
             <input type="number" id="ticket-number" placeholder="Nhập số vé" class="field">
           </div>
         </div>
         
    </div>
   </div>
    
   </template>
   
   <script>
   export default {
     name: 'Index',
     data() {
       return {
         departure: '',
         destination: ''
       };
     },
     methods: {
       switchFields() {
         const temp = this.departure;
         this.departure = this.destination;
         this.destination = temp;
       }
     }
   }
   </script>
   
   <style>
   .switch-button {
     background-color: transparent;
     border: none;
     cursor: pointer;
     padding: 0;
     display: flex;
     align-items: center;
     justify-content: center;
   }
   
   .switch-button img {
     width: 40px;
     height: 40px;
   }
   .field-group {
     display: flex;
     flex-direction: column; 
     flex: 1;
   }
   .form-fields {
       display: flex;
       align-items: center;
       gap: 15px; 
   }
   .field-group label {
     margin-bottom: 5px; 
     font-size: 14px; 
   }
   .field {
       width: 100%; 
       padding: 10px;
       border-radius: 5px;
       border: 1px solid #ccc;
       font-size: 16px;
   }
   .options {
       display: flex;
       align-items: center; 
       gap: 25px; 
   }
   .guide-button {
       background-color: #f9f9f9; 
       color: rgb(235, 102, 20); 
       border: none; 
       border-radius: 5px; 
       padding: 10px 20px; 
       cursor: pointer; 
       font-size: 16px; 
       margin-left: auto;
   }
   .options-box {
       border: 1px solid red; 
       padding: 10px;
       margin: 10px auto;
       border-radius: 10px;
       width: 800px;
       margin-top: 30px;
       display: flex;
       flex-direction: column; 
       gap: 25px; 
       background-color: #f9f9f9; 
   }
   .options-box label {
       font-size: 16px;
       cursor: pointer;
       margin-left: 7px;
   }
   .options-box input[type="radio"] {
       margin-right: 5px;
   }
   /* Navbar */
   .banner {
       position: absolute; 
       top: 0s;
       left: 50%;
       transform: translateX(-50%);
       width: 100%;
       z-index: 1; 
   }
   .banner-img {
       width: 100%; /* Tùy chỉnh chiều rộng banner */
       height: auto; /* Để tự động điều chỉnh chiều cao */
       max-height: 400px; /* Giới hạn chiều cao tối đa nếu cần */
       object-fit: cover; /* Đảm bảo ảnh không bị biến dạng */
       border-radius: 5px;
   }
     </style>
   