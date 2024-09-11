<template>
  <div class="container-pay">
    <div class="paypal">
      <div class="method-pay">
        <div class="pttt" style="color: red">Chọn phương thức thanh toán</div>
        <div class="Momo">
          <label>
            <input type="radio" name="payment" value="Momo" />
            <img src="/images/momo.svg" alt="Momo" class="momo-image" />
            <span class="momo-text">Momo</span>
          </label>
          <label>
            <input type="radio" name="payment" value="VNPay" />
            <img src="/images/vnpay.svg" alt="VNPay" class="momo-image" />
            <span class="momo-text">VNPay</span>
          </label>
          <label>
            <input type="radio" name="payment" value="ShopeePay" />
            <img src="/images/pay.png" alt="ShopeePay" class="momo-image" />
            <span class="momo-text">ShopeePay</span>
          </label>
          <label>
            <input type="radio" name="payment" value="VietQR" />
            <img src="/images/vietQR.png" alt="VietQR" class="momo-image" />
            <span class="momo-text">VietQR</span>
          </label>
          <hr class="lane" />
          <label>
            <input type="radio" name="payment" value="ATM" />
            <img src="/images/atm.png" alt="VietQR" class="momo-image" />
            <span class="momo-text">VietQR</span>
          </label>
          <label>
            <input type="radio" name="payment" value="Visa" />
            <img src="/images/visa.png" alt="VietQR" class="momo-image" />
            <span class="momo-text">VietQR</span>
          </label>
        </div>
      </div>

      <div class="QR">
        <div class="pttt" style="color: rgb(162, 162, 162)">
          Tổng thanh toán
        </div>
        <div class="tongtien" style="color: red">
          <h1>340.000đ</h1>
        </div>
        <div class="QRcode">
          <span>Thời gian giữ chổ còn lại 10:00</span>
          <div class="QR-code">
            <img src="/images/QR.jpeg" alt="" class="myQR" />
          </div>
          <div class="instruct">
            <div class="Hd" style="color: #00613d; margin-bottom: 3%">
              Hướng dẫn thanh toán bằng Ứng dụng ngân hàng
            </div>
            <div class="1" style="text-align: left; margin-left: 3%">
              1. Mở ứng dụng ngân hàng trên điện thoại
            </div>
            <div class="1" style="text-align: left; margin-left: 3%">
              2. Dùng biểu tượng scan để quét mã QR
            </div>
            <div class="1" style="text-align: left; margin-left: 3%">
              3. Quét mã ở trang này và thanh toán
            </div>
          </div>
        </div>
      </div>

      <div class="inforr">
        <div class="in4-passenger">
          <div class="in4trip">
            <h3>Thông tin hành khách</h3>
          </div>
          <div class="passenger">
            <p>Họ và tên</p>
            <span>Văn Quốc Huy</span>
          </div>

          <div class="passenger">
            <p>Số điện thoại</p>
            <span>084545797</span>
          </div>

          <div class="passenger">
            <p>Email</p>
            <span>vanquochuy06022001@gmail.com</span>
          </div>
        </div>

        <div class="in4_passenger">
          <div class="in4trip">
            <h3>Thông tin lượt đi</h3>
          </div>
          <div class="passenger">
            <p>Tuyến xe</p>
            <span>Đà Nẵng - Đắk Nông</span>
          </div>

          <div class="passenger">
            <p>Thời gian xuất bến</p>
            <span style="color: #00613d">17:15 08/09/2024</span>
          </div>

          <div class="passenger">
            <p>Số lượng ghế</p>
            <span>1 Ghế</span>
          </div>

          <div class="passenger">
            <p>Số ghế</p>
            <span style="color: #00613d">B22</span>
          </div>

          <div class="passenger">
            <p>Điểm lên xe</p>
            <span>Đà Nẵng</span>
          </div>

          <div class="passenger">
            <p>Điểm trả khách</p>
            <span>Dak Nong</span>
          </div>

          <div class="passenger">
            <p>Tổng tiền lượt đi</p>
            <span style="color: #00613d">340.000đ</span>
          </div>
        </div>

        <div class="in4passenger">
          <div class="in4trip">
            <h3>Chi tiết giá</h3>
          </div>
          <div class="passenger">
            <p>Giá vé lượt đi</p>
            <span style="color: red">340.000đ</span>
          </div>

          <div class="passenger">
            <p>Phí thanh toán</p>
            <span>0đ</span>
          </div>

          <hr class="lane" />

          <div class="passenger">
            <p>Tổng tiền</p>
            <span style="color: red">340.000đ</span>
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
.in4passenger {
  text-align: center;
  border-radius: 10px;
  border: 1px solid rgb(255, 164, 164);
  box-shadow: 0 4px 8px rgba(249, 77, 10, 0.4);
  margin-top: 3%;
}
.in4passenger h3 {
  margin-top: 3.5%;
  color: red;
}
.in4_passenger {
  text-align: center;
  border-radius: 10px;
  border: 1px solid rgb(255, 164, 164);
  box-shadow: 0 4px 8px rgba(249, 77, 10, 0.4);
  margin-top: 3%;
}
.in4_passenger h3 {
  margin-top: 3.5%;
  color: red;
}
.passenger {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  width: 97%;
}
.passenger p {
  color: gray;
  margin: 0;
  margin-bottom: 1%;
  margin-left: 3%;
}

.in4-passenger h3 {
  margin-top: 3.5%;
  color: red;
}
.in4-passenger {
  text-align: center;
  border-radius: 10px;
  border: 1px solid rgb(255, 164, 164);
  box-shadow: 0 4px 8px rgba(249, 77, 10, 0.4);
}
.myQR {
  width: 80%;
  margin-top: 3%;
  margin-bottom: 5%;
}
.QRcode {
  background-color: rgba(240, 239, 239, 0.73);
  border-radius: 10px;
}
.method-pay {
  width: 30%;
  text-align: center;
}
.QR {
  width: 35%;
  text-align: center;
}
.inforr {
  width: 35%;
}
.paypal {
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
.Momo {
  margin-top: 15px;
  text-align: left;
}
.momo-image {
  width: 30px;
  height: 30px;
  margin-left: 15px;
}
.momo-text {
  margin-left: 10px;
}
label {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
</style>
