<template>
    <div class="bannner">
     <img src="/images/banner.png" alt="" class="banner-img">
     <div class="options-box">
       <div class="options">
         <label>
           <input type="radio" name="trip" value="one-way" v-model="isRoundTrip" @change="toggleRoundTrip">
           Một chiều
         </label>
         <label>
           <input type="radio" name="trip" value="round-trip" v-model="isRoundTrip" @change="toggleRoundTrip">
           Khứ hồi
         </label>
           <button class="guide-button">Hướng dẫn đặt vé</button>
       </div>
       <div class="form-fields">
           <div class="field-group">
             <label for="departure">Điểm đi</label>
             <input type="text" id="departure" placeholder="Chọn điểm đi" class="field" v-model="departure">
             <p v-if="errors.departure" class="error-message">{{ errors.departure }}</p>
           </div>

           <button class="switch-button" @click="switchFields">
             <img src="/images/switch.svg" alt="Switch">
           </button>

           <div class="field-group">
             <label for="destination">Điểm đến</label>
             <input type="text" id="destination" placeholder="Chọn điểm đến" class="field" v-model="destination">
             <p v-if="errors.destination" class="error-message">{{ errors.destination }}</p>
           </div>

           <div class="field-group">
             <label for="departure-date">Ngày đi</label>
             <input type="date" id="departure-date" class="field" v-model="departureDate">
             <p v-if="errors.departureDate" class="error-message">{{ errors.departureDate }}</p>
           </div>

           <div class="field-group" v-if="isRoundTrip === 'round-trip'">
             <label for="return-date">Ngày về</label>
             <input type="date" id="return-date" placeholder="Thêm ngày về" class="field" v-model="returnDate">
             <p v-if="errors.returnDate" class="error-message">{{ errors.returnDate }}</p>
           </div>

           <div class="field-group">
             <label for="ticket-number">Số vé</label>
             <input type="number" id="ticket-number" placeholder="Nhập số vé" class="field" v-model="ticketNumber" min="1" step="1">
             <p v-if="errors.ticketNumber" class="error-message">{{ errors.ticketNumber }}</p>
           </div>

         </div>
         <button class="search" @click="search">Tìm chuyến xe</button>
      </div>
         <div class="Sales">
           <h1>KHUYẾN MÃI NỔI BẬT</h1>
           <div class="flase-Sales">
             <button class="Flase_sales">
               <img src="/images/sale2.png" alt="">
             </button>
             <button class="Flase_sales">
               <img src="/images/sale3.png" alt="">
             </button>
             <button class="Flase_sales">
               <img src="/images/sale4.png" alt="">
             </button>
           </div>
         </div>
         <div class="Slogan">
           <h1>C-MART BUS LINES - CHẤT LƯỢNG LÀ DANH DỰ</h1>
           <p class="P1">Được khách hàng tin tưởng và lựa chọn</p>
           <div class="slogan">
            <div class="number-visitors">
              <img src="/images/slogan1.svg" alt="" class="slogan1">
              <div class="text1">
                 <h4 class="H4">Hơn 20 Triệu lượt khách</h4>
                 <p class="P2">C-MART phục vụ hơn 20 triệu lượt khách bình quân 1 năm trên toàn quốc</p>
              </div>
            </div>
            <div class="number-visitors">
              <img src="/images/slogan2.svg" alt="" class="slogan1">
              <div class="text1">
                 <h4 class="H4">Hơn 350 Phòng vé - Bưu cục</h4>
                 <p class="P2">C-MART có hơn 350 phòng vé, trạm trung chuyển, bến xe,... trên toàn hệ thống</p>
              </div>
            </div>
            <div class="number-visitors">
              <img src="/image  s/slogan3.svg" alt="" class="slogan1">
              <div class="text1">
                 <h4 class="H4">Hơn 1,000 Chuyến xe</h4>
                 <p class="P2">C-MART phục vụ hơn 1,000 chuyến xe đường dài và liên tỉnh mỗi ngày</p>
              </div>
            </div>
            <div class="Slogan4">
              <img src="/images/slogan4.svg" alt="" class="slogan4">
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
      departure: '',
      destination: '',
      departureDate: '',
      returnDate: '',
      ticketNumber: '1',
      isRoundTrip: 'one-way',
      errors: {
        departure: '',
        destination: '',
        departureDate: '',
        returnDate: '',
        ticketNumber: ''
      }
    };
  },
  methods: {
    validateForm() {
      let isValid = true;
      this.errors = {
        departure: '',
        destination: '',
        departureDate: '',
        returnDate: '',
        ticketNumber: ''
      };
      if (!this.departure) {
        this.errors.departure = 'Không được để trống';
        isValid = false;
      }
      if (!this.destination) {
        this.errors.destination = 'Không được để trống';
        isValid = false;
      }
      if (!this.departureDate) {
        this.errors.departureDate = 'Không được để trống';
        isValid = false;
      }
      if (this.isRoundTrip === 'round-trip' && !this.returnDate) {
        this.errors.returnDate = 'Không được để trống';
        isValid = false;
      }
      if (!this.ticketNumber || this.ticketNumber <= 0 ) {
        this.errors.ticketNumber = 'Số vé phải phải lớn hơn 0';
        isValid = false;
      }
      return isValid;
    },
    search() {
      if (this.validateForm()) {
        this.$router.push('/book_tickets');
      }
    },
    toggleRoundTrip() {
      if (this.isRoundTrip === 'one-way') {
        this.returnDate = '';
      }
    },
    switchFields() {
      const temp = this.departure;
      this.departure = this.destination;
      this.destination = temp;
    }
  }
};

   </script>
   
   <style>
   .error-message {
    color: red;
  font-size: 14px;
  margin-top: 5px;
  position: absolute;
  top: 100%;
  left: 0;
  white-space: nowrap;
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
   .Slogan4 {
     position: absolute;
     top: 0; 
     right: 0; 
     margin-top: 100px;
     margin-right: 40px;
   }
   .P1{
     font-size: 18px;
     color: black;
     font-weight: bold;
   }
   .P2{
     font-size: 16px;
     color: rgb(94, 94, 94);
   }
   .H4{
   color: black;
   font-weight: bold;
   }
   .slogan{
     
     position: relative;
   }
   .text1{
     text-align: left;
     margin-left: 10px ;
   }
   .number-visitors{
   padding: 10px;
   background-color: #fff;
   border-radius: 4px;
   display: flex;
   align-items: center;
   justify-content: flex-start;
   margin-top: 10px;
   width: 550px;
   height: 160px;
   margin-left: 40px;
   }
   .Slogan{
     text-align: center;
     margin-top: 40px;
     color: rgb(8, 83, 8);
     margin-bottom: 10px;
   }
   
   .Sales{
     text-align: center;
     margin-top: 40px;
     color:rgb(8, 83, 8);
     margin-bottom: 10px;
     background-color: rgb(252, 246, 238);
   }
   .flase-Sales {
     display: flex;
     justify-content: center;
     gap: 20px;
     margin-top: 20px;
     overflow-x: auto;
     padding-bottom: 10px;
   }
   .Flase_sales {
     background-color: transparent;
     border: none;
     cursor: pointer;
     padding: 0;
     flex-shrink: 0;
   }
   .Flase_sales img {
     width: 350px;
     height: 200px;
     border-radius: 10px;
     transition: transform 0.3s ease, box-shadow 0.3s ease;
     box-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
   }
   .search {
     width: 250px;
     height: 45px;
     border: none;
     background-color: rgb(255, 80, 17);
     border-radius: 25px;
     color: white;
     font-weight: bold;
     align-self: center;
     font-size: 20px;
     display: flex; 
     justify-content: center;
     align-items: center; 
     text-decoration: none;
   }
   
   .switch-button {
     background-color: transparent;
     border: none;
     cursor: pointer;
     padding: 0;
     display: flex;
     align-items: center;
     justify-content: center;
     transition: transform 0.3s ease;
     flex-shrink: 0; 
     margin-top: 1%;
   }
   .switch-button:hover {
     transform: rotate(360deg); /* Xoay 360 độ khi hover */
   }
   .switch-button img {
     width: 40px;
     height: 40px;
   }
   .field-group {
     margin-bottom: 20px;
     display: flex;
  flex-direction: column;
  position: relative;
  flex: 1;
   }
   .form-fields {
       display: flex;
       align-items: center;
       gap: 15px; 
       flex-wrap: wrap;
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
       font-weight: bold;
   }
   .options-box {
       border: 1px solid red; 
       padding: 10px;
       margin: 10px auto;
       border-radius: 10px;
       width: 1100px;
       margin-top: 30px;
       display: flex;
       flex-direction: column; 
       gap: 25px; 
       background-color: #f9f9f9; 
       box-shadow: 0 4px 8px rgba(249, 77, 10, 0.4);
   }
   .options-box label {
       font-size: 16px;
       cursor: pointer;
       margin-left: 7px;
       color: red;
       font-weight: bold;
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
   