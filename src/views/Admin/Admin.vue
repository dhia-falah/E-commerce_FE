<template>
  <div class="box">
    <Sidebar />
    <div class="content">
      <HeaderAdmin />
      <div class="admin">
        <img src="@/assets/welcome.jpeg" />
        <h1>Selamat datang admin</h1>
      </div>
      <div class="footer">
        <FooterAdmin />
      </div>
    </div>
  </div>
</template>
<script>
import HeaderAdmin from "@/components/Header/HeaderAdmin.vue";
import Sidebar from "@/components/Sidebar/Sidebar.vue";
import FooterAdmin from "@/components/Footer/FooterAdmin.vue";

export default {
  name: "Admin",
  components: {
    HeaderAdmin,
    Sidebar,
    FooterAdmin,
  },
};
</script> 
<style scoped>
.box {
  display: flex;
}
.admin {
  display: block;
  text-align: center;
  /* margin-top: 45vh; */
  width: 100%;
}
.admin img {
  width: 490px;
}
</style>