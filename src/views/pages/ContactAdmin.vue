<template>
  <div class="box">
    <Sidebar />
    <div class="content">
      <HeaderAdmin />
      <div class="container">
        <div class="card">
          <div class="card-header">
            <h2><i class="fa-solid fa-file-signature"></i>Contact</h2>
            <button type="button" class="btn btn-outline-light">
              <i class="fa fa-plus"></i>
              tambah product
            </button>
          </div>
          <div class="card-body">
            <table class="table">
              <thead class="thead-dark">
                <tr>
                  <th>No</th>
                  <th>Nama Toko</th>
                  <th>Alamat</th>
                  <th>No TLP</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td>E'commerce Binusa</td>
                  <td>Semarang</td>
                  <td>02134545676</td>
                  <td>
                    <button class="btn btn-sm btn-warning">
                      <i class="fa-solid fa-pencil"></i>
                    </button>
                    |
                    <button class="btn btn-sm btn-danger">
                      <i class="fa-solid fa-trash-can"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <th>2</th>
                  <td>E'commerce Binusa</td>
                  <td>Semarang</td>
                  <td>02134545676</td>
                  <td>
                    <button class="btn btn-sm btn-warning">
                      <i class="fa-solid fa-pencil"></i>
                    </button>
                    |
                    <button class="btn btn-sm btn-danger">
                      <i class="fa-solid fa-trash-can"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <th>3</th>
                  <td>E'commerce Binusa</td>
                  <td>Semarang</td>
                  <td>02134545676</td>
                  <td>
                    <button class="btn btn-sm btn-warning">
                      <i class="fa-solid fa-pencil"></i>
                    </button>
                    |
                    <button class="btn btn-sm btn-danger">
                      <i class="fa-solid fa-trash-can"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
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
.card-header {
  background-color: rgb(39, 92, 94);
  display: flex;
}
.card-header button {
  width: auto;
  height: 35px;
  margin-left: auto;
  color: rgb(185, 185, 185);
}
.card-header h2 {
  color: white;
}
.card {
  margin-top: 50px;
  border: hidden;
  /* height: 497px; */
}
.card-body {
  /* border: 1px solid black; */
  height: 435px;
  overflow: scroll;
}
</style>