<template>
  <div class="container-confirm">
    <div class="confirm-ctn">
      <!-- <div class="icon-back" @click="goBack">
      <img src="/images/back.svg" alt="icon-back" class="back">
        </div> -->
      <div class="choose-seat">
        <div class="chooseseat">
          <div class="choose">
            <h3>Chọn ghế</h3>
          </div>
          <hr class="lane" />
          <div class="floor-seat">
            <div class="downstairs">
              Tầng dưới
              <div class="below">
                <div class="seat-item">
                  <img src="/images/ghe.svg" alt="Ghế 1" />
                  <span class="seat-text">A01</span>
                </div>
                <div class="seat-item">
                  <img src="/images/ghe.svg" alt="Ghế 2" />
                  <span class="seat-text">A02</span>
                </div>
                <div class="seat-item">
                  <img src="/images/ghe.svg" alt="Ghế 3" />
                  <span class="seat-text">A03</span>
                </div>
              </div>
              <div class="below">
                <div class="seat-item">
                  <img src="/images/ghe.svg" alt="Ghế 4" />
                  <span class="seat-text">A04</span>
                </div>
                <div class="seat-item">
                  <img src="/images/ghe.svg" alt="Ghế 5" />
                  <span class="seat-text">A05</span>
                </div>
                <div class="seat-item">
                  <img src="/images/ghe.svg" alt="Ghế 6" />
                  <span class="seat-text">A06</span>
                </div>
              </div>
              <div class="below">
                <div class="seat-item">
                  <img src="/images/ghe.svg" alt="Ghế 7" />
                  <span class="seat-text">A07</span>
                </div>
                <div class="seat-item">
                  <img src="/images/ghe.svg" alt="Ghế 8" />
                  <span class="seat-text">A08</span>
                </div>
                <div class="seat-item">
                  <img src="/images/ghe.svg" alt="Ghế 9" />
                  <span class="seat-text">A09</span>
                </div>
              </div>
            </div>

            <div class="upper-floor">
              Tầng trên
              <div class="below">
                <div class="seat-item">
                  <img src="/images/ghe.svg" alt="Ghế 1" />
                  <span class="seat-text">B01</span>
                </div>
                <div class="seat-item">
                  <img src="/images/ghe.svg" alt="Ghế 2" />
                  <span class="seat-text">B02</span>
                </div>
                <div class="seat-item">
                  <img src="/images/ghe.svg" alt="Ghế 3" />
                  <span class="seat-text">B03</span>
                </div>
              </div>
              <div class="below">
                <div class="seat-item">
                  <img src="/images/ghe.svg" alt="Ghế 4" />
                  <span class="seat-text">B04</span>
                </div>
                <div class="seat-item">
                  <img src="/images/ghe.svg" alt="Ghế 5" />
                  <span class="seat-text">B05</span>
                </div>
                <div class="seat-item">
                  <img src="/images/ghe.svg" alt="Ghế 6" />
                  <span class="seat-text">B06</span>
                </div>
              </div>
              <div class="below">
                <div class="seat-item">
                  <img src="/images/ghe.svg" alt="Ghế 7" />
                  <span class="seat-text">B07</span>
                </div>
                <div class="seat-item">
                  <img src="/images/ghe.svg" alt="Ghế 8" />
                  <span class="seat-text">B08</span>
                </div>
                <div class="seat-item">
                  <img src="/images/ghe.svg" alt="Ghế 9" />
                  <span class="seat-text">B09</span>
                </div>
              </div>
            </div>
            <div class="ticks-seat">
              <div class="done-tick">
                <div class="donetick">
                  <img
                    src="/images/ghe2.svg"
                    alt="Ghế đã chọn"
                    class="seat-image"
                  />
                  <span class="seat-selected">Đã đặt</span>
                </div>
                <div class="donetick">
                  <img
                    src="/images/ghe.svg"
                    alt="Ghế đã chọn"
                    class="seat-image"
                  />
                  <span class="seat-selected">Còn trống</span>
                </div>
                <div class="donetick">
                  <img
                    src="/images/ghe1.svg"
                    alt="Ghế đã chọn"
                    class="seat-image"
                  />
                  <span class="seat-selected">Đang chọn</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="infor4">
          <div class="customer-in4">
            <p>Thông tin khách hàng</p>
            <div class="in4">
              <label for="full-name">Họ và tên:</label>
              <input
                type="text"
                id="full-name"
                placeholder="Nhập họ và tên"
                class="inputfield"
              />

              <label for="phone-number">Số điện thoại:</label>
              <input
                type="tel"
                id="phone-number"
                placeholder="Nhập số điện thoại"
                class="inputfield"
              />

              <label for="email">Email:</label>
              <input
                type="email"
                id="email"
                placeholder="Nhập email"
                class="inputfield"
              />
            </div>
          </div>
          <div class="note">
            <p class="P1">ĐIỀU KHOẢN & LƯU Ý</p>
            <div class="clause">
              <p>
                (*) Quý khách vui lòng có mặt tại bến xuất phát của xe trước ít
                nhất 30 phút giờ xe khởi hành, mang theo thông báo đã thanh toán
                vé thành công có chứa mã vé được gửi từ hệ thống C-MART BUS
                LINE. Vui lòng liên hệ Trung tâm tổng đài
                <span style="color: red">1900 6067 </span>để được hỗ trợ.
              </p>
              <p>
                (*) Nếu quý khách có nhu cầu trung chuyển, vui lòng liên hệ Tổng
                đài trung chuyển <span style="color: red">1900 6918</span> trước
                khi đặt vé. Chúng tôi không đón/trung chuyển tại những điểm xe
                trung chuyển không thể tới được.
              </p>
            </div>
          </div>
        </div>

        <div class="pick-drop">
          <div class="in4-pickdrop">
            <p class="P">Thông tin đón trả</p>
            <div class="don-tra">
              <div class="pick">
                <span style="color: red; font-weight: bold">ĐIỂM ĐÓN</span>
                <input type="text" value="Bến xe Trung tâm Đà Nẵng" readonly />
                <div class="luu-y">
                  <p>
                    Quý khách vui lòng có mặt tại Bến xe/Văn Phòng
                    <span style="font-weight: bold">Đà Nẵng</span>
                    <span style="color: red; font-weight: bold"
                      >Trước 17:00 07/09/2024</span
                    >
                    để được trung chuyển hoặc kiểm tra thông tin trước khi lên
                    xe.
                  </p>
                </div>
              </div>
              <div class="divider"></div>
              <div class="drop">
                <span style="color: red; font-weight: bold">ĐIỂM TRẢ</span>
                <input type="text" value="Bến xe Đắk Nông" readonly />
              </div>
            </div>
          </div>
          <div class="pay">
            <NuxtLink to="/confirm_infor" class="thanhtoan">
              Thanh toán
            </NuxtLink>
          </div>
        </div>
      </div>

      <div class="seat">
        <div class="in4-trip">
          <div class="in4trip">
            <h3>Thông tin lượt đi</h3>
          </div>
          <hr class="lane" />
          <div class="trip-in4">
            <p>Tuyến xe</p>
            <span>Đà Nẵng - Đắk Nông</span>
          </div>

          <div class="trip-in4">
            <p>Thời gian xuất bến</p>
            <span>17:15 07/09/2024</span>
          </div>

          <div class="trip-in4">
            <p>Số lượng ghế</p>
            <span>0 Ghế</span>
          </div>

          <div class="trip-in4">
            <p>Số ghế</p>
            <span></span>
          </div>

          <div class="trip-in4">
            <p>Điểm trả khách</p>
          </div>

          <div class="trip-in4">
            <p>Tổng tiền lượt đi</p>
            <span>0đ</span>
          </div>
        </div>
        <div class="price">
          <div class="gia">
            <h3>Chi tiết giá</h3>
            <div class="trip-in4">
              <p>Giá vé lượt đi</p>
              <span>0đ</span>
            </div>

            <div class="trip-in4">
              <p>Phí thanh toán</p>
              <span>0đ</span>
            </div>
            <hr class="lane" />

            <div class="trip-in4">
              <p>Tổng tiền</p>
              <span>0đ</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.trip-in4 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  width: 97%;
}
.trip-in4 p {
  color: gray;
  margin: 0;
  margin-bottom: 1%;
  margin-left: 3%;
}
.gia h3 {
  margin-top: 3.5%;
  color: red;
}
.price {
  text-align: center;
  border: 1px solid rgb(255, 164, 164);
  margin-top: 4%;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(249, 77, 10, 0.4);
}
.in4-trip {
  text-align: center;
  border-radius: 10px;
  border: 1px solid rgb(255, 164, 164);
  box-shadow: 0 4px 8px rgba(249, 77, 10, 0.4);
}
.in4-trip h3 {
  margin-top: 3.5%;
  color: red;
}
.seat {
  width: 35%;
}
.thanhtoan {
  width: 150px;
  height: 30px;
  border: none;
  background-color: #f2754e;
  border-radius: 25px;
  color: white;
  font-weight: bold;
  align-self: center;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  margin-bottom: 8%;
}
.pay {
  margin-top: 3%;
  display: flex;
  justify-content: center;
}
.P {
  color: red;
  font-weight: bold;
}
.container-confirm input[readonly] {
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 15px;
  font-size: 14px;
  width: 80%;
  margin-top: 5px;
  text-align: center;
  color: #333;
}
.drop {
  margin-left: 3%;
  text-align: center;
  width: 50%;
}
.divider {
  width: 1px;
  height: 100%;
  background-color: #c2c2c2;
}
.pick {
  margin-left: 3%;
  text-align: center;
  width: 50%;
}
.don-tra {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  height: 190px;
}
.in4-pickdrop p {
  margin-top: 2%;
}
.pick-drop {
  border: 1px solid rgb(255, 164, 164);
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(249, 77, 10, 0.4);
  margin-top: 2%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.clause {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  text-align: left;
}
.note {
  text-align: center;
  width: 50%;
  margin-top: 2%;
}
.P1 {
  color: rgb(255, 54, 54);
  font-weight: bold;
}
.in4 {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  text-align: left;
}
.in4 label {
  font-weight: bold;
}
.inputfield {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  box-shadow: 0 2px 4px rgb(252, 110, 94);
}
.inputfield:hover {
  border: 1px solid #fe7861;
}
.customer-in4 {
  width: 50%;
  text-align: center;
  margin-top: 2%;
}
.customer-in4 p {
  color: rgb(255, 54, 54);
  font-weight: bold;
}
.chooseseat {
  border: 1px solid rgb(255, 164, 164);
  width: 100%;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(249, 77, 10, 0.4);
}
.infor4 {
  margin-top: 2%;
  border: 1px solid rgb(255, 164, 164);
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(249, 77, 10, 0.4);
  display: flex;
}
.done-tick {
  margin-top: 30%;
}
.donetick img {
  margin-right: 10px;
}
.donetick {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.ticks-seat {
  width: 35%;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  padding: 20px;
}
.upper-floor {
  width: 35%;
  font-weight: bold;
}
.seat-item img {
  width: 50%;
  height: 50%;
  object-fit: cover;
  cursor: pointer;
}
.seat-text {
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: rgb(0, 0, 0);
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
}
.seat-item {
  position: relative;
  display: inline-block;
  width: 80px;
  height: 80px;
}
.below {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  margin-top: 7%;
}
.downstairs {
  width: 35%;
  font-weight: bold;
}
.floor-seat {
  display: flex;
  margin-top: 3%;
}

.choose-seat {
  width: 65%;
  text-align: center;
  /* border: 1px solid rgb(164, 165, 255); */
}
.choose-seat h3 {
  margin-top: 2%;
  color: red;
}
.icon-back {
  position: absolute;
  background-color: rgb(255, 255, 255);
  border: none;
  cursor: pointer;
  height: 30px;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  margin-top: -5px;
}
.confirm-ctn {
  padding: 10px;
  margin: 10px auto;
  border-radius: 10px;
  width: 1150px;
  margin-top: 30px;
  display: flex;
  gap: 25px;
  background-color: white;
}
</style>
