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
            <div class="time">
                <p class="test">Giờ đi </p>
                <div class="times">
                  <label>
                    <input type="checkbox" value="morning">
                      Sáng sớm 00:00 - 06:00 (0)
                  </label>
                  <label>
                    <input type="checkbox" value="morning">
                      Buổi sáng 06:00 - 12:00 (3)
                  </label>
                  <label>
                    <input type="checkbox" value="afternoon">
                      Buổi chiều 12:00 - 18:00 (1)
                  </label>
                  <label>
                    <input type="checkbox" value="evening">
                      Buổi tối 18:00 - 24:00 (2)
                  </label>
                </div>
            </div>
            <hr class="lane">
            <div class="bus-car">
              <p class="test">Loại xe</p>
              <div class="car">
                <button class="car-bus"> Ghế </button>
                <button class="car-bus"> Giường </button>
                <button class="car-bus"> Limousine </button>
              </div>
            </div>
            <hr class="lane">
            <div class="chair">
              <p class="test">Hàng ghế</p>
              <div class="car">
                <button class="row-chair"> Hàng đầu </button>
                <button class="row-chair"> Hàng giữa </button>
                <button class="row-chair"> Hàng cuối </button>
              </div>
            </div>
            <hr class="lane">
            <div class="Floor-bus">
              <p class="test">Tầng</p>
              <div class="car">
                <button class="Floor"> Tầng trên </button>
                <button class="Floor"> Tầng dưới </button>
              </div>
            </div>
        </div>
        <div class="list-bus">
          <div class="lists">
            Đà Nẵng - TP.Hồ Chí Minh (5)
          </div>
          <div class="in4-bus">
            <div  class="bus-details">
            <span class="timegoto">17:15</span>
              <img src="/images/go.svg" alt="Điểm đi" class="icongoto">
            <span class="dots">.................</span>
            <span class="duration">15 giờ</span>
            <span class="dots">.................</span>
              <img src="/images/to.svg" alt="Điểm đến" class="icongoto">
            <span class="timegoto">08:15</span>
            <span class="seats">Giường: 31 chổ trống</span>
            </div>
            <div class="bus-locations">
              <div class="bus-location">Bến Xe Trung Tâm Đà Nẵng</div>
              <div class="buslocation">Bến Xe Trung Tâm TP.Hồ Chí Minh</div>
           </div>
           <hr class="lane">
           <div class="btn-click">
            <div class="click-btn">
              <button class="btnclick">Trung chuyển</button>
              <button class="btnclick">Chính Sách</button>
            </div>
            <div>
              <NuxtLink to="/confirm" class="select-flight"> Chọn chuyến </NuxtLink>
            </div>
           </div>
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
.select-flight {
   width: 150px;
   height: 35px;
   border: none;
   background-color: rgb(255, 184, 158);
   border-radius: 25px;
   color: #f94d0a;
   font-weight: bold;
   align-self: center;
   font-size: 16px;
   display: flex; 
   justify-content: center;
   align-items: center; 
   text-decoration: none;
}
.select-flight:hover {
  color: white;
  background-color: #f94d0a;
}
.btn-click {
  display: flex;
  align-items: center;
  justify-content: space-between; 
  margin-top: 10px;
}
.btnclick{
  border: none;
  background-color: white;
  color: #f94d0a;
  font-weight: bold;
}
.buslocation{
  margin-top: 3px;
  margin-left: 20%;
}
.bus-locations {
  display: flex;
  margin-top: 10px; 
  margin-left: 10px;
}
.bus-location {
  font-size: 14px; 
  margin-top: 5px;
}     
.bus-details {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.seats {
  margin-left: 50px; 
  font-size: 16px;
  color: #015000; 
}
.duration {
  color: #919191;
  margin: 0 10px; 
}
.dots {
  flex-grow: 1;
  text-align: center;
  font-size: 16px;
  margin: 0 10px; 
}
.icongoto {
  width: 16x; 
  height: 16px;
  margin: 0 15px; 
}
.timegoto {
  font-size: 25px;
  min-width: 80px; 
  text-align: center;
  
}
.in4-bus{
  border: 1px solid rgb(250, 78, 44);
  margin-top: 3%;
  display: flex;
  flex-direction: column;
  margin-top: 3%;
  padding: 10px;
  font-size: 16px;
  width: 107%;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(249, 77, 10, 0.4);
} 
.lists{
  display: flex;
  align-items: center;
  margin-top: 1.5%;
}
.test{
  font-weight: bold;
}
.Floor{
  border: 1px solid rgb(152, 152, 152);
  border-radius: 5px;
  margin-right: 7px;
  background-color: #f9f9f9;
  margin-bottom: 5%;
}
.Floor-bus{
  display: flex;
  flex-direction: column;
  margin-left: 5%;
  margin-top: 5%;
}
.row-chair{
  
  border: 1px solid rgb(152, 152, 152);
  border-radius: 5px;
  margin-right: 7px;
  background-color: #f9f9f9;
}
.chair{
  display: flex;
  flex-direction: column;
  margin-left: 5%;
  margin-top: 5%;
}
.car-bus{
  border: 1px solid rgb(152, 152, 152);
  border-radius: 5px;
  margin-right: 7px;
  background-color: #f9f9f9;
}
.bus-car{
  display: flex;
  flex-direction: column;
  margin-left: 5%;
  margin-top: 5%;  
}
.times input[type="checkbox"]:hover {
    accent-color: #f94d0a; 
}
.times label:hover {
    color:#f94d0a; 
}
.times input[type="checkbox"] {
  accent-color: #f94d0a;
  margin-right: 10px; 
}
.times label {
  display: flex;
  align-items: center;
  margin-top: 10px; 
}
.times {
  display: flex;
  flex-direction: column;
  margin-left: 20px; 
}
.time{
  display: flex;
  flex-direction: column;
  margin-left: 5%;
  margin-top: 7%;  
}
.clear-filter-button img {
  width: 20px; 
  height: 20px;
  margin-left: 5px;
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
 padding: 10px;
 margin: 10px auto;
 border-radius: 10px;
 width: 1100px;
 margin-top: 30px;
 display: flex;
 gap: 25px; 
 background-color: white; 
}
.search-filter{
  border: 1px solid rgb(255, 80, 17);
  border-radius: 10px;
  width: 30%;
  box-shadow: 0 4px 8px rgba(249, 77, 10, 0.4);
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
   .options-box{
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
   