<template>
  <div class="box">
    <template>
      <div class="box">
        <Sidebar />
        <div class="content">
          <HeaderAdmin />
          <div class="container">
            <div class="card">
              <div class="card-header">
                <i class="fa-solid fa-pen-to-square"></i>edit profil
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col">
                    <img src="@/assets/pp-4.jpg" />
                    <h3>E'commerce Binusa</h3>
                  </div>
                  <div class="col">
                    <form>
                      <h2>Edit Profil</h2>
                      <div class="right">
                        <div class="mb-3">
                          <div class="form-group mt-3">
                            <label for="exampleInputEmail1">Nama Toko</label>
                            <input
                              type="text"
                              id="cname"
                              name="cardname"
                              placeholder="Ecommerce"
                              class="form-control"
                              aria-describedby="emailHelp"
                            />
                          </div>
                          <div class="form-group mt-3">
                            <label for="exampleInputEmail1">Alamat</label>
                            <input
                              type="text"
                              class="form-control"
                              id="cname"
                              aria-describedby="emailHelp"
                              placeholder="jl.kejebak prenjon"
                            />
                          </div>
                          <div class="form-group mt-3">
                            <label for="exampleFormControlTextarea1"
                              >Deskipsi Toko</label
                            >
                            <textarea
                              class="form-control"
                              id="exampleFormControlTextarea1"
                              rows="3"
                            ></textarea>
                          </div>
                          <button type="submit" class="btn btn-success mt-5">
                            <i class="fa-solid fa-pen-to-square"></i>
                            Simpan Profil
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="footer">
            <FooterAdmin />
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
<script>
import HeaderAdmin from "@/components/Header/HeaderAdmin.vue";
import Sidebar from "@/components/Sidebar/Sidebar.vue";
import FooterAdmin from "@/components/Footer/FooterAdmin.vue";

export default {
  name: "productAdmin",
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
h1 {
  text-align: center;
}
.card {
  margin-top: 50px;
}
.card-header {
  background-color: rgb(39, 92, 94);
  color: white;
}
.card .card-body img {
  width: 300px;
  border-radius: 50%;
  margin-left: 100px;
}
.card .card-body h3 {
  text-align: center;
}
</style>