// Kiểm tra xem người dùng đã đăng nhập chưa thông qua Vuex store
export default function ({ store, redirect }) {
  if (!store.state.user) {
    return redirect("/login");
  }
}
