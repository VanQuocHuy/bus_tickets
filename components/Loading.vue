<template>
  <div class="loading-overlay">
    <div class="spinner"></div>
    <p class="loading-text">
      <span
        v-for="(char, index) in characters"
        :key="index"
        :style="{ animationDelay: `${index * 0.1}s` }"
        class="loading-char"
      >
        {{ char }}
      </span>
    </p>
  </div>
</template>

<script>
export default {
  name: "Loading",
  computed: {
    characters() {
      return "Loading...".split("");
    },
  },
};
</script>

<style scoped>
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.8);
  z-index: 9999;
}

.spinner {
  border: 8px solid #f3f3f3;
  border-top: 8px solid #f94d0a;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 1s linear infinite;
  margin-bottom: 20px;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.loading-text {
  font-size: 24px;
  font-weight: bold;
  color: #f94d0a;
  display: flex;
}

.loading-char {
  display: inline-block;
  animation: bounce 1s infinite;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
</style>
