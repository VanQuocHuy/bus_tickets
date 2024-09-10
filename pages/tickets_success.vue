<template>
    <div class="container-success">
      <div class="success">
        <img src="/images/checkmark.png" alt="" class="checkmark">
        <h4 style="color: #008e15;" >Mua vé xe thành công</h4>
        <p>Thông tin vé đã đặt được gửi về địa chỉ email <span style="font-weight: bold;">levanquochuy06022001@gmail.com</span>. Vui lòng kiểm tra lại</p>
        <div class="in4-tickets">
           <h5 style="color: #008e15;">THÔNG TIN MUA VÉ</h5>
          <div class="ticket-info">

            <div class="ticket-item">
              <p><span style="color: rgb(164, 164, 164);">Họ và tên:</span> <span style="color: black;">Lê Văn Quốc Huy</span></p>
              <p><span style="color: rgb(164, 164, 164);">Số điện thoại:</span> <span style="color: black;">0123456789</span></p>
              <p><span style="color: rgb(164, 164, 164);">Email:</span> <span style="color: black;">levanhuy06022001@gmail.com</span></p>
            </div>

            <div class="ticket-item">
              <p><span style="color: rgb(164, 164, 164);">Tổng giá vé:</span> <span style="color: black;">500,000đ</span></p>
              <p><span style="color: rgb(164, 164, 164);">PTTT:</span> <span style="color: black;">VietQR</span></p>
              <p><span style="color: rgb(164, 164, 164);">Trạng thái:</span> <span style="color: #008e15;">Thanh toán thành công</span></p>
            </div>

          </div>
          <div class="tiket">
            <div class="ticket-infor" ref="ticket">
                <p style="color: red;">Mã vé E7GZF8 
                  <button class="download-icon" @click="downloadTicket($refs.ticket)">
                   <img src="/images/download.svg" alt="Download">
                  </button>
                </p>
                <div class="code-qr">
                    <img src="/images/QR.jpeg" alt="" class="picture-qr">
                </div>
                <div class="infor-ticket">
                  <p><span style="color: rgb(164, 164, 164);">Tuyến xe:</span> <span style="color: #008e15;">Hà Nội - Đà Nẵng</span></p>
                  <p><span style="color: rgb(164, 164, 164);">Thời gian:</span> <span style="color: #008e15;">10:00 AM, 25/12/2024</span></p>
                  <p><span style="color: rgb(164, 164, 164);">Số ghế:</span> <span style="color: #008e15;">A12</span></p>
                  <p><span style="color: rgb(164, 164, 164);">Điểm lên xe:</span> <span style="color: black;">Bến xe Mỹ Đình</span></p>
                  <p><span style="color: rgb(164, 164, 164);">Giá vé:</span> <span style="color: black;">250,000đ</span></p>
                </div>
                <hr class="lane">
                <div class="note-ticket" style="color: #008e15; font-size: 13px;">
                  Mang mã vé đến văn phòng để đổi vé lên xe trước 
                  giờ xuất bến ít nhất 30 phút.
                </div>
            </div>

            <div class="ticket-infor" ref="ticket">
                <p style="color: red;">Mã vé E7GZF8
                  <button class="download-icon" @click="downloadTicket($refs.ticket)">
                   <img src="/images/download.svg" alt="Download">
                  </button>
                </p>
                <div class="code-qr">
                    <img src="/images/QR.jpeg" alt="" class="picture-qr">
                </div>
                <div class="infor-ticket">
                  <p><span style="color: rgb(164, 164, 164);">Tuyến xe:</span> <span style="color: #008e15;">Hà Nội - Đà Nẵng</span></p>
                  <p><span style="color: rgb(164, 164, 164);">Thời gian:</span> <span style="color: #008e15;">10:00 AM, 25/12/2024</span></p>
                  <p><span style="color: rgb(164, 164, 164);">Số ghế:</span> <span style="color: #008e15;">A13</span></p>
                  <p><span style="color: rgb(164, 164, 164);">Điểm lên xe:</span> <span style="color: black;">Bến xe Mỹ Đình</span></p>
                  <p><span style="color: rgb(164, 164, 164);">Giá vé:</span> <span style="color: black;">250,000đ</span></p>
                </div>
                <hr class="lane">
                <div class="note-ticket" style="color: #008e15; font-size: 13px;">
                  Mang mã vé đến văn phòng để đổi vé lên xe trước 
                  giờ xuất bến ít nhất 30 phút.
                </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </template>
  
 

  <script>
  import html2canvas from 'html2canvas';
  
  export default {
    methods: {
      downloadTicket(element) {
        html2canvas(element).then(canvas => {
          // Tạo một link và tự động tải xuống hình ảnh
          const link = document.createElement('a');
          link.href = canvas.toDataURL('image/png');
          link.download = 'ticket.png';
          link.click();
        });
      }
    }
  }
  </script>

<style>

.download-icon {
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-left: 10px; 
}

.download-icon img {
  width: 20px;
  height: 20px;
}

/* QR Code */
.picture-qr {
  width: 100%;
  border-radius: 10px;
}

.ticket-infor {
  flex: 0 0 auto;
  border: 1px solid rgb(177, 177, 177);
  width: 40%;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
  margin-left: 6.5%;
  margin-bottom: 4%;
  box-sizing: border-box;
}

.infor-ticket {
  margin-top: 10px;
  text-align: left;
}

.infor-ticket p {
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
  color: rgb(145, 145, 145);
}

.infor-ticket span {
  color: black;
}

/* Container của vé - dùng flex và overflow-x để tạo cuộn ngang */
.tiket {
  margin-top: 2%;
  width: 100%;
  border-radius: 10px;
  display: flex;
  overflow-x: auto;
  padding: 10px 0;
  box-sizing: border-box;
}

/* Định dạng phần chứa thông tin vé */
.in4-tickets {
  border: 1px solid rgb(255, 164, 164);
  box-shadow: 0 4px 8px rgba(249, 77, 10, 0.4);
  width: 90%;
  text-align: center;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 10px;
  margin-top: 20px;
  box-sizing: border-box;
}

.ticket-info {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  width: 100%;
  box-sizing: border-box;
}

.ticket-item {
  flex: 1;
  padding: 10px;
  border-radius: 8px;
  margin: 0 10px;
  text-align: left;
  width: 50%;
}

.ticket-item p {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

/* Hình ảnh checkmark */
.checkmark {
  width: 50px;
  height: 50px;
}

/* Căn chỉnh thông tin thành công */
.success {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin: 10px auto;
  border-radius: 10px;
  width: 800px;
  margin-top: 30px;
  background-color: white;
  margin-bottom: 3%;
  border: 1px solid rgb(167, 167, 167);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  box-sizing: border-box;
}

h4 {
  text-align: center;
}

/* Responesive cho các màn hình nhỏ hơn */
@media (max-width: 768px) {
  .success {
    width: 90%;
    padding: 20px;
  }

  .ticket-infor {
    width: 100%;
    margin-left: 0;
  }

  .ticket-info {
    flex-direction: column;
    align-items: center;
  }

  .ticket-item {
    width: 100%;
    margin: 0;
    margin-bottom: 10px;
  }

  .in4-tickets {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .success {
    padding: 15px;
  }

  .ticket-infor {
    width: 100%;
    margin-bottom: 15px;
  }

  .ticket-item p {
    flex-direction: column;
    align-items: flex-start;
  }
}

</style>