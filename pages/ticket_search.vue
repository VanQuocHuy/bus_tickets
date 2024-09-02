<template>
  <div class="tracuu">
   <h4>TRA CỨU THÔNG TIN ĐẶT VÉ</h4>
   <div class="input-fields">
      <input type="text" placeholder="Vui lòng nhập số điện thoại" class="input-field">
      <input type="text" placeholder="Vui lòng nhập mã vé" class="input-field">
      <button class="search-button">Tra cứu</button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.tracuu{
  margin-top: 4%;
  text-align: center;
  color:rgb(8, 83, 8) ;
  margin-bottom: 4%;
}
.input-fields {
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.input-field {
  margin-bottom: 15px;
  padding: 10px;
  width: 580px;
  border: 1px solid #e32626;
  border-radius: 8px;
  font-size: 16px;
  position: relative;
}
.search-button {
  padding: 10px 20px;
  background-color: rgb(254, 224, 212);
  color: rgb(255, 0, 0);
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 19px;
  width: 25%;
}

.search-button:hover {
  background-color: rgb(246, 120, 85);
  color: white;
}   
</style>