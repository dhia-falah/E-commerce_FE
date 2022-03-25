<template>
  <div class="container">
    <div class="item sidebar">
      <h6>Filter By Categories</h6>
      <hr />
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="defaultCheck1"
        />
        <label class="form-check-label" for="defaultCheck1"> Pria </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="defaultCheck1"
        />
        <label class="form-check-label" for="defaultCheck1"> Wanita </label>
        <hr />
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="defaultCheck1"
        />
        <label class="form-check-label" for="defaultCheck1"> In Stock </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="defaultCheck1"
        />
        <label class="form-check-label" for="defaultCheck1"> Out Stock </label>
        <hr />
      </div>
      <h5>Price</h5>
      <hr />
      <input type="range" disabled value="100" />
      <p>Price: <strong>Rp35.000 - Rp130.000</strong></p>
      <button type="button" class="btn btn-success">Filter</button>
      <hr />
      <h5>Size</h5>
      <hr />
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="defaultCheck1"
        />
        <label class="form-check-label" for="defaultCheck1"> M </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="defaultCheck1"
        />
        <label class="form-check-label" for="defaultCheck1"> L </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="defaultCheck1"
        />
        <label class="form-check-label" for="defaultCheck1"> XL </label>
      </div>
    </div>
    <div class="item content-1">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <span class="navbar-text">Showing 1-12 of 32 results</span>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#"></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"></a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled"></a>
              </li>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <u>Sort By: Default sorting</u>
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </li>
                </ul>
              </li>
            </ul>
            <span class="navbar-text"
              >View: &nbsp; <i class="fa fa-heart"></i
            ></span>
          </div>
        </div>
      </nav>
      <div class="card mb-3" style="max-width: 900px; margin-top: 10px">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src="https://ucarecdn.com/784e1797-5103-4f35-ab69-1d4428fe0f08/-/crop/500x468/0,18/"
              class="img-fluid rounded-start"
            />
          </div>
          <div class="col-md-7">
            <div class="card-body">
              <h5 class="card-title">Kaos Programmer</h5>
              <h5 class="card-title" style="color: green">Rp70.000</h5>
              <p class="card-text">
                Baju yang bertema pemrogramman komputer ini bukanlah baju biasa
                dikarenakan di buat dan di produksi langsung oleh warga konoha
                bukan kaleng kaleng ygy <br /><strong
                  >-Typography Progamming-</strong
                >
              </p>
              <div class="d-flex gap-3">
                <button type="button" class="btn btn-success">
                  Add to cart
                </button>
                <p><i class="fa fa-heart">Add to wishlist</i></p>
                <p>
                  <i class="fa fa-heart">Add to compare</i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card mb-3" style="max-width: 900px">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src="https://images.tokopedia.net/img/cache/500-square/product-1/2020/2/7/1575169/1575169_61bc4d6b-0dd1-4675-b119-acf8fad9b9f1_1024_1024.jpg"
              class="img-fluid rounded-start"
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Kaos Distro Jepang Premium Cowok</h5>
              <h5 class="card-title" style="color: green">Rp95.000</h5>
              <li>Bahan Cotton Combed 30s (Kaos Distro)</li>
              <li>Sablon Polyflex (Premium, Awet dan Anti Luntur 100%)</li>
              <li>Bisa COD (Bayar di Tempat)</li>
              <li>Produk 100% akan kami garansi jika tidak sesuai / cacat</li>
              <br />
              <div class="d-flex gap-3">
                <button type="button" class="btn btn-success">
                  Add to cart
                </button>
                <p><i class="fa fa-heart">Add to wishlist</i></p>
                <p>
                  <i class="fa fa-heart">Add to compare</i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card mb-3" style="max-width: 900px">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src="https://p-id.ipricegroup.com/8bd9d16c8970a0f50eb7cf60a0b9d462ef79c4f3_0.jpg"
              class="img-fluid rounded-start"
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">
                ZARA Baju Blouse Wanita Hitam Original Branded / Thrift Original
              </h5>
              <h5 class="card-title" style="color: green">Rp130.000</h5>
              <p class="card-text">
                Baju cewek merek zara dengan kualitas bagus dan stok terbatas
                dan terjamin garansi bisa menjadi motor cuma tambah uang
              </p>
              <div class="d-flex gap-3">
                <button type="button" class="btn btn-success">
                  Add to cart
                </button>
                <p><i class="fa fa-heart">Add to wishlist</i></p>
                <p>
                  <i class="fa fa-heart">Add to compare</i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card mb-3" style="max-width: 900px">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src="https://cf.shopee.co.id/file/489466d17971fe71b92a7977029fe21f"
              class="img-fluid rounded-start"
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">
                ATASAN KEMEJA BLOUSE CROP KOREA WARNA HITAM
              </h5>
              <h5 class="card-title" style="color: green">Rp35.000</h5>
              <p class="card-text">Crop top hitam blouse</p>
              <div class="d-flex gap-3">
                <button type="button" class="btn btn-success">
                  Add to cart
                </button>
                <p><i class="fa fa-heart">Add to wishlist</i></p>
                <p>
                  <i class="fa fa-heart">Add to compare</i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card mb-3" style="max-width: 900px">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3v0vscJ19JQVu2E4Uzu77lIu142oWlrG-B022QGq22F2jTiEDevcd_7FA2v7TrUiA-wM&usqp=CAU"
              class="img-fluid rounded-start"
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">
                Baju Muslim & Muslimah Blouse Atasan Original
              </h5>
              <h5 class="card-title" style="color: green">Rp42.125</h5>
              <p><s>Rp140.000</s>&nbsp;-70%</p>
              <li>Mamayu Top terbuat dari bahan Katun mix Babyterry Premium</li>
              <li>Max bb 70kg ( tergantung LD )</li>
              <li>Ukuran: M, L, XL</li>
              <li>Texture bahan sangat nyaman dipakai</li>
              <br />
              <div class="d-flex gap-3">
                <button type="button" class="btn btn-success">
                  Add to cart
                </button>
                <p><i class="fa fa-heart">Add to wishlist</i></p>
                <p>
                  <i class="fa fa-heart">Add to compare</i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card mb-3" style="max-width: 900px">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQojzOIDZM1-qilGpAoAIyH6UTbmstePHU2zpdz_a5UWM4s-GRf"
              class="img-fluid rounded-start"
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">
                Baju Original Autumn Women Sweater Oversize
              </h5>
              <h5 class="card-title" style="color: green">Rp41.231</h5>
              <p><s>Rp140.000</s>&nbsp;-71%</p>
              <li>Autumn Women Sweater terbuat dari bahan Fleece Premium</li>
              <li>1 pcs Hanya Sweater</li>
              <li>Texture bahan sangat nyaman dipakai</li>
              <li>Max bb 70kg ( tergantung LD )</li>
              <div class="d-flex gap-3">
                <button type="button" class="btn btn-success">
                  Add to cart
                </button>
                <p><i class="fa fa-heart">Add to wishlist</i></p>
                <p>
                  <i class="fa fa-heart">Add to compare</i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card mb-3" style="max-width: 900px">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src="https://images.tokopedia.net/img/cache/500-square/product-1/2020/2/7/1575169/1575169_61bc4d6b-0dd1-4675-b119-acf8fad9b9f1_1024_1024.jpg"
              class="img-fluid rounded-start"
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Kaos Distro Jepang Premium Cowok</h5>
              <h5 class="card-title" style="color: green">Rp95.000</h5>
              <li>Bahan Cotton Combed 30s (Kaos Distro)</li>
              <li>Sablon Polyflex (Premium, Awet dan Anti Luntur 100%)</li>
              <li>Bisa COD (Bayar di Tempat)</li>
              <li>
                Produk 100% akan kami garansi jika tidak sesuai / cacat *HARAP
                PERHATIKAN UKURAN SAAT MEMESAN!* SIZE CHART (UKURAN LOKAL) : 3XS
                = 35cm x 49cm (Untuk anak 4-7 Tahun) XS = 41cm x 62cm (Untuk
                anak 7-10 Tahun) S = 44cm x 65cm M = 47cm x 68cm L = 50cm x 71cm
                XL = 53cm x 73cm XXL = 56cm x 76cm 3XL = 59cm x 79cm
              </li>
              <div class="d-flex gap-3">
                <button type="button" class="btn btn-success">
                  Add to cart
                </button>
                <p><i class="fa fa-heart">Add to wishlist</i></p>
                <p>
                  <i class="fa fa-heart">Add to compare</i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card mb-3" style="max-width: 900px">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src="https://images.tokopedia.net/img/cache/500-square/product-1/2020/2/7/1575169/1575169_61bc4d6b-0dd1-4675-b119-acf8fad9b9f1_1024_1024.jpg"
              class="img-fluid rounded-start"
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Kaos Distro Jepang Premium Cowok</h5>
              <h5 class="card-title" style="color: green">Rp95.000</h5>
              <li>Bahan Cotton Combed 30s (Kaos Distro)</li>
              <li>Sablon Polyflex (Premium, Awet dan Anti Luntur 100%)</li>
              <li>Bisa COD (Bayar di Tempat)</li>
              <li>
                Produk 100% akan kami garansi jika tidak sesuai / cacat *HARAP
                PERHATIKAN UKURAN SAAT MEMESAN!* SIZE CHART (UKURAN LOKAL) : 3XS
                = 35cm x 49cm (Untuk anak 4-7 Tahun) XS = 41cm x 62cm (Untuk
                anak 7-10 Tahun) S = 44cm x 65cm M = 47cm x 68cm L = 50cm x 71cm
                XL = 53cm x 73cm XXL = 56cm x 76cm 3XL = 59cm x 79cm
              </li>
              <div class="d-flex gap-3">
                <button type="button" class="btn btn-success">
                  Add to cart
                </button>
                <p><i class="fa fa-heart">Add to wishlist</i></p>
                <p>
                  <i class="fa fa-heart">Add to compare</i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card mb-3" style="max-width: 900px">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src="https://images.tokopedia.net/img/cache/500-square/product-1/2020/2/7/1575169/1575169_61bc4d6b-0dd1-4675-b119-acf8fad9b9f1_1024_1024.jpg"
              class="img-fluid rounded-start"
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Kaos Distro Jepang Premium Cowok</h5>
              <h5 class="card-title" style="color: green">Rp95.000</h5>
              <li>Bahan Cotton Combed 30s (Kaos Distro)</li>
              <li>Sablon Polyflex (Premium, Awet dan Anti Luntur 100%)</li>
              <li>Bisa COD (Bayar di Tempat)</li>
              <li>
                Produk 100% akan kami garansi jika tidak sesuai / cacat *HARAP
                PERHATIKAN UKURAN SAAT MEMESAN!* SIZE CHART (UKURAN LOKAL) : 3XS
                = 35cm x 49cm (Untuk anak 4-7 Tahun) XS = 41cm x 62cm (Untuk
                anak 7-10 Tahun) S = 44cm x 65cm M = 47cm x 68cm L = 50cm x 71cm
                XL = 53cm x 73cm XXL = 56cm x 76cm 3XL = 59cm x 79cm
              </li>
              <div class="d-flex gap-3">
                <button type="button" class="btn btn-success">
                  Add to cart
                </button>
                <p><i class="fa fa-heart">Add to wishlist</i></p>
                <p>
                  <i class="fa fa-heart">Add to compare</i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card mb-3" style="max-width: 900px">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src="https://images.tokopedia.net/img/cache/500-square/product-1/2020/2/7/1575169/1575169_61bc4d6b-0dd1-4675-b119-acf8fad9b9f1_1024_1024.jpg"
              class="img-fluid rounded-start"
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Kaos Distro Jepang Premium Cowok</h5>
              <h5 class="card-title" style="color: green">Rp95.000</h5>
              <li>Bahan Cotton Combed 30s (Kaos Distro)</li>
              <li>Sablon Polyflex (Premium, Awet dan Anti Luntur 100%)</li>
              <li>Bisa COD (Bayar di Tempat)</li>
              <li>
                Produk 100% akan kami garansi jika tidak sesuai / cacat *HARAP
                PERHATIKAN UKURAN SAAT MEMESAN!* SIZE CHART (UKURAN LOKAL) : 3XS
                = 35cm x 49cm (Untuk anak 4-7 Tahun) XS = 41cm x 62cm (Untuk
                anak 7-10 Tahun) S = 44cm x 65cm M = 47cm x 68cm L = 50cm x 71cm
                XL = 53cm x 73cm XXL = 56cm x 76cm 3XL = 59cm x 79cm
              </li>
              <div class="d-flex gap-3">
                <button type="button" class="btn btn-success">
                  Add to cart
                </button>
                <p><i class="fa fa-heart">Add to wishlist</i></p>
                <p>
                  <i class="fa fa-heart">Add to compare</i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card mb-3" style="max-width: 900px">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src="https://images.tokopedia.net/img/cache/500-square/product-1/2020/2/7/1575169/1575169_61bc4d6b-0dd1-4675-b119-acf8fad9b9f1_1024_1024.jpg"
              class="img-fluid rounded-start"
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Kaos Distro Jepang Premium Cowok</h5>
              <h5 class="card-title" style="color: green">Rp95.000</h5>
              <li>Bahan Cotton Combed 30s (Kaos Distro)</li>
              <li>Sablon Polyflex (Premium, Awet dan Anti Luntur 100%)</li>
              <li>Bisa COD (Bayar di Tempat)</li>
              <li>
                Produk 100% akan kami garansi jika tidak sesuai / cacat *HARAP
                PERHATIKAN UKURAN SAAT MEMESAN!* SIZE CHART (UKURAN LOKAL) : 3XS
                = 35cm x 49cm (Untuk anak 4-7 Tahun) XS = 41cm x 62cm (Untuk
                anak 7-10 Tahun) S = 44cm x 65cm M = 47cm x 68cm L = 50cm x 71cm
                XL = 53cm x 73cm XXL = 56cm x 76cm 3XL = 59cm x 79cm
              </li>
              <div class="d-flex gap-3">
                <button type="button" class="btn btn-success">
                  Add to cart
                </button>
                <p><i class="fa fa-heart">Add to wishlist</i></p>
                <p>
                  <i class="fa fa-heart">Add to compare</i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card mb-3" style="max-width: 900px">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src="https://images.tokopedia.net/img/cache/500-square/product-1/2020/2/7/1575169/1575169_61bc4d6b-0dd1-4675-b119-acf8fad9b9f1_1024_1024.jpg"
              class="img-fluid rounded-start"
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Kaos Distro Jepang Premium Cowok</h5>
              <h5 class="card-title" style="color: green">Rp95.000</h5>
              <li>Bahan Cotton Combed 30s (Kaos Distro)</li>
              <li>Sablon Polyflex (Premium, Awet dan Anti Luntur 100%)</li>
              <li>Bisa COD (Bayar di Tempat)</li>
              <li>
                Produk 100% akan kami garansi jika tidak sesuai / cacat *HARAP
                PERHATIKAN UKURAN SAAT MEMESAN!* SIZE CHART (UKURAN LOKAL) : 3XS
                = 35cm x 49cm (Untuk anak 4-7 Tahun) XS = 41cm x 62cm (Untuk
                anak 7-10 Tahun) S = 44cm x 65cm M = 47cm x 68cm L = 50cm x 71cm
                XL = 53cm x 73cm XXL = 56cm x 76cm 3XL = 59cm x 79cm
              </li>
              <div class="d-flex gap-3">
                <button type="button" class="btn btn-success">
                  Add to cart
                </button>
                <p><i class="fa fa-heart">Add to wishlist</i></p>
                <p>
                  <i class="fa fa-heart">Add to compare</i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item">
            <a class="page-link" href="#">→</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductDisplay",
};
</script>

<style>
.container {
  max-width: 1440;
  display: grid;
  width: 1100px;
  height: 600px;
  grid-template-columns: 250px 1fr 1fr;
  grid-template-rows: 80px 1fr 1fr 100px;
  grid-gap: 1rem;
  grid-template-areas:
    "header header header"
    "sidebar content-1 content-1"
    "sidebar content-2 content-3"
    "footer footer footer";
}
.sidebar {
  grid-area: sidebar;
 
}
.content-1 {
  grid-area: content-1;
}
.form-check-label {
  padding-top: 15px;
}
.form-check-input {
  margin-top: 15px;
}
input[type="range"]:disabled {
  filter: grayscale(1);
  cursor: not-allowed;
}
</style>
