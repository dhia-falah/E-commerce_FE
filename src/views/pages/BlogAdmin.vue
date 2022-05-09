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
                <h1><i class="fa-brands fa-blogger-b"></i>Blog</h1>
                <button
                  type="button"
                  class="btn btn-outline-light"
                  onClick="myfunction"
                >
                  <i class="fa fa-plus"></i>
                  tambah product
                </button>
              </div>
              <div class="card-body">
                <div class="row px-xl-5">
                  <div class="col-lg-12 table-responsive mb-5">
                    <table class="table table-bordered text-center mb-0">
                      <thead class="bg-secondary text-dark">
                        <tr>
                          <th>No</th>
                          <th>Products</th>
                          <th>Name</th>
                          <th>Price</th>
                          <th>Deskripsi</th>
                          <th>Aksi</th>
                        </tr>
                      </thead>
                      <tbody class="align-middle">
                        <tr>
                          <td>1</td>
                          <td class="align-middle">
                            <img
                              src="@/assets/FB1.jpg"
                              alt=""
                              style="width: 50px"
                            />
                          </td>
                          <td class="align-middle">Exfoliating Toner.</td>
                          <td class="align-middle">$200</td>
                          <td class="align-middle">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Cupiditate architecto dolores labore debitis
                            deleniti quis harum, in error iste, molestias
                            quisquam eum totam magnam ad facilis, facere fugiat
                            eius commodi!
                          </td>
                          <td class="align-middle">
                            <button class="btn btn-sm btn-warning mb-3">
                              <i class="fa-solid fa-pencil"></i>
                            </button>
                            <button class="btn btn-sm btn-danger">
                              <i class="fa-solid fa-trash-can"></i>
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td class="align-middle">
                            <img
                              src="@/assets/FB1.jpg"
                              alt=""
                              style="width: 50px"
                            />
                          </td>
                          <td class="align-middle">Exfoliating Toner.</td>
                          <td class="align-middle">$200</td>
                          <td class="align-middle">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Cupiditate architecto dolores labore debitis
                            deleniti quis harum, in error iste, molestias
                            quisquam eum totam magnam ad facilis, facere fugiat
                            eius commodi!
                          </td>

                          <td class="align-middle">
                            <button class="btn btn-sm btn-warning mb-3">
                              <i class="fa-solid fa-pencil"></i>
                            </button>
                            <button class="btn btn-sm btn-danger">
                              <i class="fa-solid fa-trash-can"></i>
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td class="align-middle">
                            <img
                              src="@/assets/FB1.jpg"
                              alt=""
                              style="width: 50px"
                            />
                          </td>
                          <td class="align-middle">Exfoliating Toner.</td>
                          <td class="align-middle">$200</td>
                          <td class="align-middle">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Cupiditate architecto dolores labore debitis
                            deleniti quis harum, in error iste, molestias
                            quisquam eum totam magnam ad facilis, facere fugiat
                            eius commodi!
                          </td>

                          <td class="align-middle">
                            <button class="btn btn-sm btn-warning mb-3">
                              <i class="fa-solid fa-pencil"></i>
                            </button>
                            <button class="btn btn-sm btn-danger">
                              <i class="fa-solid fa-trash-can"></i>
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td class="align-middle">
                            <img
                              src="@/assets/FB1.jpg"
                              alt=""
                              style="width: 50px"
                            />
                          </td>
                          <td class="align-middle">Exfoliating Toner.</td>
                          <td class="align-middle">$200</td>
                          <td class="align-middle">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Cupiditate architecto dolores labore debitis
                            deleniti quis harum, in error iste, molestias
                            quisquam eum totam magnam ad facilis, facere fugiat
                            eius commodi!
                          </td>

                          <td class="align-middle">
                            <button class="btn btn-sm btn-warning mb-3">
                              <i class="fa-solid fa-pencil"></i>
                            </button>
                            <button class="btn btn-sm btn-danger">
                              <i class="fa-solid fa-trash-can"></i>
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td class="align-middle">
                            <img
                              src="@/assets/FB1.jpg"
                              alt=""
                              style="width: 50px"
                            />
                          </td>
                          <td class="align-middle">Exfoliating Toner.</td>
                          <td class="align-middle">$200</td>
                          <td class="align-middle">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Cupiditate architecto dolores labore debitis
                            deleniti quis harum, in error iste, molestias
                            quisquam eum totam magnam ad facilis, facere fugiat
                            eius commodi!
                          </td>

                          <td class="align-middle">
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
  color: white;
}
.card-header button {
  width: auto;
  height: 35px;
  margin-top: 13px;
  margin-left: auto;
  color: rgb(185, 185, 185);
}
.card-header {
  background-color: rgb(39, 92, 94);
  display: flex;
}
.card {
  margin-top: 50px;
  border: hidden;
}
.card-body {
  /* border: 1px solid black; */
  height: 435px;
  overflow: scroll;
}
</style>