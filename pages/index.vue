<template>
  <div class="bannner">
    <img src="/images/banner.png" alt="" class="banner-img" />
    <div class="options-box">
      <div class="form-fields">
        <div class="field-group">
          <label for="departure">Điểm đi</label>
          <input
            type="text"
            id="departure"
            placeholder="Chọn điểm đi"
            class="field"
            v-model="departure"
            @input="searchLocation($event)"
          />
          <ul v-if="listDeparture.length" class="list-adress">
            <li
              id="departure"
              v-for="(suggestion, index) in listDeparture"
              :key="index"
              @click="getAdressLi($event, suggestion)"
            >
              <img src="/images/end-coords-icon.png" alt="" />
              {{ suggestion }}
            </li>
          </ul>
        </div>
        <button class="switch-button" @click="switchFields">
          <img src="/images/switch.svg" alt="Switch" />
        </button>
        <div class="field-group">
          <label for="destination">Điểm đến</label>
          <input
            type="text"
            id="destination"
            placeholder="Chọn điểm đến"
            class="field"
            v-model="destination"
            @input="searchLocation($event)"
          />
          <ul v-if="listDestination.length" class="list-adress">
            <li
              id="destination"
              v-for="(suggestion, index) in listDestination"
              :key="index"
              @click="getAdressLi($event, suggestion)"
            >
              <img src="/images/end-coords-icon.png" alt="" />
              {{ suggestion }}
            </li>
          </ul>
        </div>
        <button class="search" @click="handleSubmit()">Tìm chuyến xe</button>
      </div>

      <!-- Xử lý lấy toạ độ js -->
      <span id="distance"
        >Khoảng cách: ... km <span style="margin: 0 30px">|</span> Thời gian dự
        kiến: ...</span
      >

      <div
        class="map"
        id="map"
        style="width: 1078px; height: 540px; overflow: hidden"
      ></div>
      <!-- Xử lý lấy toạ độ js -->
    </div>
    <div class="Sales">
      <h1>KHUYẾN MÃI NỔI BẬT</h1>
      <div class="flase-Sales">
        <button class="Flase_sales">
          <img src="/images/sale2.png" alt="" />
        </button>
        <button class="Flase_sales">
          <img src="/images/sale3.png" alt="" />
        </button>
        <button class="Flase_sales">
          <img src="/images/sale4.png" alt="" />
        </button>
      </div>
    </div>
    <div class="Slogan">
      <h1>C-MART BUS LINES - CHẤT LƯỢNG LÀ DANH DỰ</h1>
      <p class="P1">Được khách hàng tin tưởng và lựa chọn</p>
      <div class="slogan">
        <div class="number-visitors">
          <img src="/images/slogan1.svg" alt="" class="slogan1" />
          <div class="text1">
            <h4 class="H4">Hơn 20 Triệu lượt khách</h4>
            <p class="P2">
              C-MART phục vụ hơn 20 triệu lượt khách bình quân 1 năm trên toàn
              quốc
            </p>
          </div>
        </div>
        <div class="number-visitors">
          <img src="/images/slogan2.svg" alt="" class="slogan1" />
          <div class="text1">
            <h4 class="H4">Hơn 350 Phòng vé - Bưu cục</h4>
            <p class="P2">
              C-MART có hơn 350 phòng vé, trạm trung chuyển, bến xe,... trên
              toàn hệ thống
            </p>
          </div>
        </div>
        <div class="number-visitors">
          <img src="/images/slogan3.svg" alt="" class="slogan1" />
          <div class="text1">
            <h4 class="H4">Hơn 1,000 Chuyến xe</h4>
            <p class="P2">
              C-MART phục vụ hơn 1,000 chuyến xe đường dài và liên tỉnh mỗi ngày
            </p>
          </div>
        </div>
        <div class="Slogan4">
          <img src="/images/slogan4.svg" alt="" class="slogan4" />
        </div>
      </div>
    </div>
    <div class="futa-group">
      <h1>KẾT NỐI C-MART GROUP</h1>
      <p>
        Kết nối đa dạng hệ sinh thái C-MART qua App C-MART: mua vé Xe C-MART, Xe
        Buýt, Xe Hợp Đồng, Giao Hàng,...
      </p>
      <img src="/images/futagroup.svg" alt="" />
    </div>
  </div>
</template>

<script>
import jsonData from "@/static/danangAdress.json";

export default {
  data() {
    return {
      departure: "",
      destination: "",
      // Xử lý lấy toạ độ js
      location: {
        distance: 0,
        duration: 0,
        route: [],
      },
      map: null,
      listDeparture: [], // Các gợi ý điểm đi
      listDestination: [], // Các gợi ý điểm đến
      previousDestination: "",
      currentUser: null
    };
  },
  created() {
   // Chỉ chạy trên client-side, không chạy ở cmd của visual
    if (process.client) {
      try {
        this.currentUser = JSON.parse(localStorage.getItem('user'))?.data;
        if (this.currentUser?.role === "shipper") {
          alert("Chuyển đến trang shipper")
        } else if(this.currentUser?.role === "admin") {
          alert("chuyển đến trang admin")
        }        
      } catch (error) {
        console.error('Failed to parse user data:', error);
      }
    }
  },
  methods: {
    switchFields() {
      const temp = this.departure;
      this.departure = this.destination;
      this.destination = temp;
    },
    switchFields() {
      const temp = this.departure;
      this.departure = this.destination;
      this.destination = temp;
    },

    // Xử lý lấy toạ độ js
    // Gọi API tìm kiếm địa điểm
    async searchLocation(event) {
      //Xử lý format chuỗi
      function removeDiacritics(str) {
        return str
          .normalize("NFD")
          .toLowerCase()
          .replace(/[\u0300-\u036f]/g, "")
          .replace(/\s+/g, " ")
          .replace(/đ/g, "d")
          .replace(/ê/g, "e")
          .replace(/ô/g, "o")
          .replace(/ơ/g, "o")
          .replace(/ư/g, "u")
          .trim();
      }

      //Xử lý lấy danh sách tất cả phường
      const input =
        event.target.id === "departure"
          ? this.departure.split(",")
          : this.destination.split(",");
      let listResult = [];
      for (let i = 0; i < input.length; i++) {
        if (input.length === 0 || input[i] === ",") {
          return;
        } else {
          jsonData.map((item) => {
            if (
              removeDiacritics(item.Name).includes(removeDiacritics(input[i]))
            ) {
              listResult.push(`${input[0]}, ${item.Name}`);
            }
          });
        }
      }
      event.target.id === "departure"
        ? (this.listDeparture = listResult)
        : (this.listDestination = listResult);
    },
    getAdressLi(event, value) {
      event.target.id === "departure"
        ? (this.departure = value)
        : (this.destination = value);
      event.target.id === "departure"
        ? (this.listDeparture = [])
        : (this.listDestination = []);
    },
    //Tìm dường
    async handleSubmit() {
      const bannerEl = document.querySelector(".banner-img")
      bannerEl.style.display = "none"
      //Xoá danh sách các địa chỉ đã đề xuất trong ô điểm đi và điểm đến
      this.listDeparture = [];
      this.listDestination = [];

      //Xử lí tìm đường
      const distanceElement = document.getElementById("distance");
      distanceElement.textContent = `Đang tìm đường đi ngắn nhất...`;

      const startCoords = await this.getCoordinates(this.departure);
      const endCoords = await this.getCoordinates(this.destination);

      if (startCoords && endCoords) {
        const data = await this.calculateDistance(startCoords, endCoords);
        distanceElement.textContent = `Khoảng cách: ${data.distance} km | Thời gian dự kiến: ${data.duration}`;

        this.initializeMap(startCoords, endCoords, data.route);
      } else if (!startCoords) {
        distanceElement.textContent = "Không được để trống điểm đi";
      } else {
        distanceElement.textContent = "Không được để trống điểm đến";
      }
    },

    //format lại thời gian
    formatDuration(seconds) {
      const curentSeconds = seconds / 4; //Vì trung bình đi 1km mất 12 phút quá lâu
      const minutes = Math.floor(curentSeconds / 60);
      const remainingSeconds = Math.floor(curentSeconds % 60);
      const hours = Math.floor(minutes / 60);
      const remainingMinutes = minutes % 60;

      if (hours > 0) {
        return `${hours} giờ ${remainingMinutes} phút ${remainingSeconds} giây`;
      } else if (minutes > 0) {
        return `${minutes} phút ${remainingSeconds} giây`;
      } else {
        return `${remainingSeconds} giây`;
      }
    },

    //chuyển địa chỉ chữ sang toạ độ
    async getCoordinates(adress) {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
          adress
        )}`
      );
      const data = await response.json();
      if (data.length > 0) {
        return [parseFloat(data[0].lat), parseFloat(data[0].lon)];
      }
      return null;
    },

    //từ toạ độ đo khoảng cách và thời gian
    async calculateDistance([startLat, startLon], [endLat, endLon]) {
      const apiKey = "5b3ce3597851110001cf624819d3fdc94c414287843eef76556e105f";
      const response = await fetch(
        `https://api.openrouteservice.org/v2/directions/foot-walking?api_key=${apiKey}&start=${startLon},${startLat}&end=${endLon},${endLat}`
      );
      const data = await response.json();
      if (data.features && data.features.length > 0) {
        const route = data.features[0].geometry.coordinates.map((coord) => [
          coord[1],
          coord[0],
        ]);
        this.location = {
          distance: (
            data.features[0].properties.summary.distance / 1000
          ).toFixed(2),
          duration: this.formatDuration(
            data.features[0].properties.summary.duration
          ),
          route,
        };
        return this.location;
      }
      return null;
    },

    // hiển thị ra map
    initializeMap(startCoords, endCoords, route) {
      const mapElement = document.getElementById("map");

      if (this.map) {
        this.map.remove();
      }

      const script = document.createElement("script");
      script.src = "https://unpkg.com/leaflet/dist/leaflet.js";
      script.onload = () => {
        this.map = L.map(mapElement).setView(startCoords, 14);

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: "© OpenStreetMap contributors",
        }).addTo(this.map);

        // Tạo icon
        const startCoordsIcon = L.icon({
          iconUrl: "/images/start-coords-icon.png",
          shadowUrl:
            "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
          iconSize: [18, 18], // Kích thước của icon
          iconAnchor: [12, 18], // Điểm neo của icon
          popupAnchor: [1, -20], // Điểm neo của popup
          shadowSize: [10, 10], // Kích thước của bóng
        });
        const endCoordsIcon = L.icon({
          iconUrl: "/images/end-coords-icon.png",
          shadowUrl:
            "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
          iconSize: [25, 41], // Kích thước của icon
          iconAnchor: [12, 41], // Điểm neo của icon
          popupAnchor: [1, -34], // Điểm neo của popup
          shadowSize: [41, 41], // Kích thước của bóng
        });
        const shiper = L.icon({
          iconUrl: "/images/shiper-red.png",
          shadowUrl:
            "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
          iconSize: [60, 60], // Kích thước của icon
          iconAnchor: [12, 41], // Điểm neo của icon
          popupAnchor: [1, -34], // Điểm neo của popup
          shadowSize: [41, 41], // Kích thước của bóng
        });

        L.marker(startCoords, { icon: startCoordsIcon })
          .addTo(this.map)
          .bindPopup("Điểm đón")
          .closePopup();
        L.marker(endCoords, { icon: endCoordsIcon })
          .addTo(this.map)
          .bindPopup("Điểm đến")
          .closePopup();
        let currentRoute = 0;
        let currentMarker = null;
        if (route.length > 0) {
          let intervalID = setInterval(() => {
            if (currentRoute < route.length - 1) {
              currentRoute++;
              if (currentMarker) {
                this.map.removeLayer(currentMarker);
              }
              currentMarker = L.marker(route[currentRoute], {
                icon: shiper,
              }).addTo(this.map);
            } else {
              clearInterval(intervalID);
              alert("Lụm tiền!!!");
            }
          }, 100);
        }

        L.polyline(route, { color: "blue" }).addTo(this.map);
      };
      document.head.appendChild(script);
    },
  },
  mounted() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude; //kinh độ
        const longitude = position.coords.longitude; //vĩ độ

        this.initializeMap([latitude, longitude], [latitude, longitude], []);
      });
    }
  },
};
</script>

<style>
@import url("https://unpkg.com/leaflet/dist/leaflet.css"); /*Xử lý lấy toạ độ css*/

.futa-group {
  margin-top: 20px;
  color: rgb(8, 83, 8);
  text-align: center;
  margin-bottom: 40px;
}
.futa-group p {
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
.P1 {
  font-size: 18px;
  color: black;
  font-weight: bold;
}
.P2 {
  font-size: 16px;
  color: rgb(94, 94, 94);
}
.H4 {
  color: black;
  font-weight: bold;
}
.slogan {
  position: relative;
}
.text1 {
  text-align: left;
  margin-left: 10px;
}
.number-visitors {
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
.Slogan {
  text-align: center;
  margin-top: 40px;
  color: rgb(8, 83, 8);
  margin-bottom: 10px;
}

.Sales {
  text-align: center;
  margin-top: 40px;
  color: rgb(8, 83, 8);
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
  width: 200px;
  margin: 24px 30px 0 30px;
  height: 45px;
  border: none;
  background-color: rgb(255, 80, 17);
  border-radius: 25px;
  color: white;
  font-weight: bold;
  align-self: center;
  font-size: 18px;
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
  transform: rotate(360deg); /* Xoay 360 độ khi hover */
}
.switch-button img {
  width: 40px;
  height: 40px;
}
.field-group {
  position: relative;
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
.list-adress {
  position: absolute;
  top: 80px;
  border: 1px solid #999;
  list-style: none;
  border-radius: 2px;
  z-index: 99999;
  background: white;
  padding: 0;
  max-height: 340px;
  overflow-y: scroll;
}
.list-adress > li {
  line-height: 24px;
  padding: 5px 10px;
}
.list-adress > li:hover {
  cursor: pointer;
  background: #f3e8e8;
}
.list-adress > li > img {
  width: 12px;
  margin-right: 5px;
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
  display: block;
}
</style>
