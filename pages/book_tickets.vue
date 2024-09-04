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
           </div>
           <button class="switch-button" @click="switchFields">
             <img src="/images/switch.svg" alt="Switch">
           </button>
           <div class="field-group">
             <label for="destination">Điểm đến</label>
             <input type="text" id="destination" placeholder="Chọn điểm đến" class="field" v-model="destination">
           </div>
           <div class="field-group">
             <label for="departure-date">Ngày đi</label>
             <input type="date" id="departure-date" class="field" v-model="departureDate">
           </div>
           <div class="field-group" v-if="isRoundTrip === 'round-trip'">
             <label for="return-date">Ngày về</label>
             <input type="date" id="return-date" placeholder="Thêm ngày về" class="field" v-model="returnDate">
           </div>
           <div class="field-group">
             <label for="ticket-number">Số vé</label>
             <input type="number" id="ticket-number" placeholder="Nhập số vé" class="field" v-model="ticketNumber">
           </div>
         </div>
         <button class="search">Tìm chuyến xe </button>
      </div>
      <div class="Find-trip">
        <div class="search-filter">
            <div class="filter">
                BỘ LỌC TÌM KIẾM 
            <button class="clear-filter-button">
                Bỏ lọc
             <img src="/images/delete.svg" alt="Clear">
            </button>
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
         destination: '',
         departureDate: '',
         returnDate: '',
         ticketNumber: '',
         isRoundTrip: 'one-way' 
       };
     },
     methods: {
       toggleRoundTrip() {
         if (this.isRoundTrip === 'one-way') {
           this.returnDate = ''; 
         }
       },
       switchFields() {
         const temp = this.departure;
         this.departure = this.destination;
         this.destination = temp;
       },
       switchFields() {
         const temp = this.departure;
         this.departure = this.destination;
         this.destination = temp;
       }
     }
   }
</script>
   
<style>
.clear-filter-button img {
  width: 20px; /* Kích thước của icon */
  height: 20px;
  margin-left: 5px; /* Khoảng cách giữa text "Bỏ lọc" và icon */
}
.clear-filter-button {
  background-color: transparent; 
  border: none; 
  cursor: pointer;
  display: flex;
  align-items: center; 
  margin-left: 10px; 
  margin-left: auto ;
}
.filter{
  display: flex;
  align-items: center;
  margin-left: 5%;
  margin-top: 3%;
}
.Find-trip{
 margin-top: 5%;
 border: 1px solid red; 
 padding: 10px;
 margin: 10px auto;
 border-radius: 10px;
 width: 1100px;
 margin-top: 30px;
 display: flex;
 gap: 25px; 
 background-color: #f9f9f9;
}
.search-filter{
  border: 1px solid black;
  border-radius: 10px;
  width: 30%;
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
     margin-top: auto;
     transition: transform 0.3s ease;
   }
.switch-button:hover {
     transform: rotate(360deg); 
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
       width: 100%; 
       height: auto; 
       max-height: 400px; 
       object-fit: cover; 
       border-radius: 5px;
   }
     </style>
   