<template>
  <div class="box">
    <Sidebar />
    <div class="about">
      <HeaderAdmin />
      <div class="container">
        <div class="card">
          <div class="card-header">
            <h2><i class="fa-solid fa-pen-to-square" />About</h2>
          </div>
          <div class="card-body">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Kategori</th>
                  <th scope="col">deskripsi</th>
                  <th scope="col">aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Our Mission</td>
                  <td>
                    Dear friends, Lorem ipsum dolor, sit amet consectetur
                    adipisicing elit. Impedit animi amet quo, consequatur iste
                    tempore sed itaque! Saepe sed aperiam ullam.<br />Provident
                    tempora, dolores eum accusamus iste fuga debitis laboriosam?
                  </td>
                  <td>
                    <button class="btn btn-sm btn-warning mb-3">
                      <i class="fa-solid fa-pencil"></i>
                    </button>
                    <button class="btn btn-sm btn-danger">
                      <i class="fa-solid fa-trash-can"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Creative</td>
                  <td>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                    possimus, cupiditate repudiandae repellat, inventore ab
                    exercitationem necessitatibus laudantium porro at,<br />impedit
                    architecto! Consequuntur incidunt impedit animi in veniam
                    expedita doloremque.
                  </td>
                  <td>
                    <button class="btn btn-sm btn-warning mb-3">
                      <i class="fa-solid fa-pencil"></i>
                    </button>
                    <button class="btn btn-sm btn-danger">
                      <i class="fa-solid fa-trash-can"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Sustainability</td>
                  <td>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Officiis, cumque. Cupiditate perferendis dolor consequatur
                    ad ullam culpa<br />aut ex itaque eligendi error, nam
                    inventore tenetur doloremque atque asperiores minus nisi.
                  </td>
                  <td>
                    <button class="btn btn-sm btn-warning mb-3">
                      <i class="fa-solid fa-pencil"></i>
                    </button>
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
}
.card-header h2 {
  color: white;
}
.card {
  margin-top: 50px;
  border: hidden;
  height: 497px;
}
</style>