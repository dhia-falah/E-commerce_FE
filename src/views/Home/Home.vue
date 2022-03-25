<template>
  <div id="home" class="container">
    <!-- Carousel -->
    <div
      id="carouselExampleLight"
      class="carousel carousel-dark slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          id="a"
          type="button"
          data-bs-target="#carouselExampleLight"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          id="b"
          type="button"
          data-bs-target="#carouselExampleLight"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          id="c"
          type="button"
          data-bs-target="#carouselExampleLight"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="10000">
          <img
            src="@/assets/C&E1.jpeg"
            style="height: 670px; width: 1350px"
            alt="pict1"
          />
          <div class="carousel-caption d-none d-md-block"></div>
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img
            src="@/assets/C&E2.jpg"
            style="height: 670px; width: 1350px"
            alt="pict2"
          />
          <div class="carousel-caption d-none d-md-block"></div>
        </div>
        <div class="carousel-item">
          <img
            src="@/assets/C&E3.png"
            style="height: 670px; width: 1350px"
            alt="pict3"
          />
          <div class="carousel-caption d-none d-md-block"></div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleLight"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleLight"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <!-- End Carousel -->
    <br />
    <br />
    <br />
    <br />
    <!-- Beauty Essentials -->
    <div class="BE">
      <h2><b>Beauty Essentials</b></h2>
      <span style="color: cadetblue"><b>~~~</b></span>
      <br /><br />
      <div class="row">
        <div class="col">
          <img
            src="@/assets/FB1.jpg"
            style="height: 300px; width: 300px; border-radius: 50%"
          />
          <br />
          <br />
          <h5><b>Skincare</b></h5>
          <p>Starts from $18.00</p>
        </div>
        <div class="col">
          <img
            src="@/assets/FB2.webp"
            style="height: 300px; width: 300px; border-radius: 50%"
          />
          <br />
          <br />
          <h5><b>Makeup</b></h5>
          <p>Starts from $22.00</p>
        </div>
        <div class="col">
          <img
            src="@/assets/FB3.jpg"
            style="height: 300px; width: 300px; border-radius: 50%"
          />
          <br />
          <br />
          <h5><b>Clean Eyes</b></h5>
          <p>Starts from $18.00</p>
        </div>
      </div>
    </div>
    <!-- End Beauty Essentials -->
    <br /><br /><br /><br /><br />
    <!-- Ad -->
    <div class="Ad" style="text-align: left; padding: 100px 0px 0px 650px">
      <h1>
        ORDER NOW AND <br />
        SAVE UP TO 50%
      </h1>
      <br />
      <h3 style="margin: 25px">
        <strike style="color: red">$399</strike
        ><span style="padding: 25px; font-size: 35px">$199</span>
      </h3>
      <br />
      <h5>Take your skin to the next level with skin care product</h5>
      <br />
      <button
        type="button"
        class="btn btn-lg"
        style="background-color: rgb(39, 92, 94)"
      >
        shop now!
      </button>
      &nbsp;
      <span>* Free shipping for US and Canada only</span>
    </div>
    <!-- End Ad -->
    <br />
    <br /><br />
    <br />
    <!-- Best Selling -->
    <div class="BS">
      <h2 style="text-align: left"><b>Best Selling</b></h2>
      <span>view all product</span>
    </div>
    <br />
    <div class="row">
      <div class="col">
        <div class="card" style="width: 15rem; border: hidden">
          <img src="@/assets/BS1.jpg" class="card-img-top" alt="pict1" />
          <div class="card-body" style="text-align: left">
            <i class="fa fa-solid fa-star"></i>
            <i class="fa fa-solid fa-star"></i>
            <i class="fa fa-solid fa-star"></i>
            <i class="fa fa-solid fa-star"></i>
            <i class="fa fa-solid fa-star-half-stroke"></i>&nbsp;<span> 2</span>
            <!-- <i class="fa-regular fa-star"></i> -->
            <h6 class="card-text">Body Lava Luminizer</h6>
            <span style="color: rgb(48, 130, 133)"
              ><b>$156.00 - $190.00</b></span
            >
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card" style="width: 15rem; border: hidden">
          <img src="@/assets/BS2.jpg" class="card-img-top" alt="pict2" />
          <div class="card-body" style="text-align: left">
            <i class="fa fa-solid fa-star"></i>
            <i class="fa fa-solid fa-star"></i>
            <i class="fa fa-solid fa-star"></i>
            <i class="fa fa-solid fa-star"></i>
            <i class="fa fa-solid fa-star"></i>&nbsp; <span>3</span>
            <!-- <font-awesome-icon icon="fa-solid fa-star" /> -->
            <h6 class="card-text">Applied Artwork</h6>
            <span style="color: rgb(48, 130, 133)"><b>$260.00</b></span>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card" style="width: 15rem; border: hidden">
          <img src="@/assets/BS1.jpg" class="card-img-top" alt="pict3" />
          <div class="card-body" style="text-align: left">
            <!-- <font-awesome-icon icon="fa-solid fa-star" /> -->
            <h6 class="card-text">Aveeno Daily Moisturizing</h6>
            <span style="color: rgb(48, 130, 133)"><b>$300.00</b></span>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card" style="width: 15rem; border: hidden">
          <img src="@/assets/BS2.jpg" class="card-img-top" alt="pict4" />
          <div class="card-body" style="text-align: left">
            <i class="fa fa-solid fa-star"></i>
            <i class="fa fa-solid fa-star"></i>
            <i class="fa fa-solid fa-star"></i>
            <i class="fa fa-solid fa-star"></i>
            <i class="fa fa-solid fa-star"></i>&nbsp; <span>2</span>

            <!-- <font-awesome-icon icon="fa-solid fa-star" /> -->
            <h6 class="card-text">Careful Cosmetics</h6>
            <span style="color: rgb(48, 130, 133)"><b>$230.00</b></span>
          </div>
        </div>
      </div>
    </div>
    <!-- End Best Selling -->
    <br />
    <br />
    <br />
    <!-- Under $25 -->
    <div class="Un">
      <h2 style="text-align: left"><b>Under $25</b></h2>
      <span>view all product</span>
    </div>
    <br />
    <div class="row">
      <div class="col">
        <div class="card" style="width: 15rem; border: hidden">
          <img src="@/assets/BS2.jpg" class="card-img-top" alt="pict1" />
          <div class="card-body" style="text-align: left">
            <!-- <font-awesome-icon icon="fa-solid fa-star" /> -->
            <h6 class="card-text">Supple Symmetry</h6>
            <span style="color: rgb(48, 130, 133)"><b>$168.00</b></span>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card" style="width: 15rem; border: hidden">
          <img src="@/assets/BS1.jpg" class="card-img-top" alt="pict2" />
          <div class="card-body" style="text-align: left">
            <i class="fa fa-solid fa-star"></i>
            <i class="fa fa-solid fa-star"></i>
            <i class="fa fa-solid fa-star"></i>
            <i class="fa fa-solid fa-star"></i>
            <i class="fa fa-solid fa-star"></i>&nbsp; <span>2</span>

            <!-- <font-awesome-icon icon="fa-solid fa-star" /> -->
            <h6 class="card-text">Wella Professionals</h6>
            <span style="color: rgb(48, 130, 133)"
              ><b>$195.00 - 230.00</b></span
            >
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card" style="width: 15rem; border: hidden">
          <img src="@/assets/BS2.jpg" class="card-img-top" alt="pict3" />
          <div class="card-body" style="text-align: left">
            <i class="fa fa-solid fa-star"></i>
            <i class="fa fa-solid fa-star"></i>
            <i class="fa fa-solid fa-star"></i>
            <i class="fa fa-solid fa-star"></i>
            <i class="fa fa-solid fa-star"></i>&nbsp; <span>2</span>

            <!-- <font-awesome-icon icon="fa-solid fa-star" /> -->
            <h6 class="card-text">Poreless Putty Primer</h6>
            <span style="color: rgb(48, 130, 133)"><b>$330.00</b></span>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card" style="width: 15rem; border: hidden">
          <img src="@/assets/BS1.jpg" class="card-img-top" alt="pict4" />
          <div class="card-body" style="text-align: left">
            <i class="fa fa-solid fa-star"></i>
            <i class="fa fa-solid fa-star"></i>
            <i class="fa fa-solid fa-star"></i>
            <i class="fa fa-solid fa-star"></i>
            <i class="fa fa-solid fa-star"></i>&nbsp; <span>2</span>

            <!-- <font-awesome-icon icon="fa-solid fa-star" /> -->
            <h6 class="card-text">Physicians Formula Muru</h6>
            <span style="color: rgb(48, 130, 133)"><b>$268.00</b></span>
          </div>
        </div>
      </div>
    </div>
    <!-- End Under $25 -->
    <br />
    <br /><br />
    <!-- Question -->
    <div class="Qst shadow">
      <h2><b>Why Shop with Hara?</b></h2>
      <span style="color: cadetblue"><b>~~~</b></span>
      <br /><br /><br />
      <div class="row" style="text-align: left">
        <div class="col">
          <h4><b>Guaranteed Pure</b></h4>
          <p>
            All Grace formulations adhere to strict purity standards and will
            never contain harsh or toxic ingredients
          </p>
        </div>
        <div class="col">
          <h4><b>Completely Cruelty-Free</b></h4>
          <p>
            All Grace formulations adhere to strict purity standards and will
            never contain harsh or toxic ingredients
          </p>
        </div>
        <div class="col">
          <h4><b>Ingredient Sourcing</b></h4>
          <p>
            All Grace formulations adhere to strict purity standards and will
            never contain harsh or toxic ingredients
          </p>
        </div>
      </div>
    </div>
    <!-- End Question -->
    <br /><br />
    <!-- Ad 2 -->
    <div class="row">
      <div class="col">
        <div class="ad1">
          <h4>CLEAN BEAUTY</h4>
          <h2>Exfoliate Tone <br />& Hydrate</h2>
          <br />
          <button
            class="btn"
            type="button"
            style="background-color: rgba(165, 42, 42, 0.849)"
          >
            Shop now!
          </button>
        </div>
      </div>
      <div class="col">
        <div class="ad2">
          <h4>25% off Everything</h4>
          <p>Makeup with extended range in <br />colors for every human.</p>
          <br />
          <button class="btn btn-ad" type="button">Shop now!</button>
        </div>
      </div>
    </div>
    <!-- End Ad 2 -->
    <br />
    <br />
    <!-- Customer Favorite Beauty Essentials -->
    <div class="CF">
      <h2>
        <b>Customer Favorite Beauty Essentials</b>
      </h2>
      <span style="color: cadetblue"><b>~~~</b></span>
      <br /><br />
      <div class="row">
        <div class="col">
          <div class="pict">
            <h3><b>Empower Yourself</b></h3>
            <p>Get the skin you want to feel</p>
            <button type="button" class="btn btn-lg">Shop now!</button>
          </div>
        </div>
        <div class="col">
          <div class="card" style="width: 20rem; border: hidden">
            <img src="@/assets/BS3.jpg" class="card-img-top" alt="pict4" />
            <div class="card-body" style="text-align: left">
              <!-- <font-awesome-icon icon="fa-solid fa-star" /> -->
              <h6 class="card-text">Aveeno Daily Moisturizing</h6>
              <span style="color: rgb(48, 130, 133)"><b>$300.00</b></span>
            </div>
          </div>
          <br />
          <div class="card" style="width: 20rem; border: hidden">
            <img src="@/assets/LM.jpg" class="card-img-top" alt="pict4" />
            <div class="card-body" style="text-align: left">
              <!-- <font-awesome-icon icon="fa-solid fa-star" /> -->
              <h6 class="card-text">Cool Cosmetics</h6>
              <span style="color: rgb(48, 130, 133)"
                ><b
                  ><strike style="color: grey; font-size: 15px; opacity: 75%"
                    >$140.00</strike
                  >&nbsp; $138.00</b
                ></span
              >
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card" style="width: 20rem; border: hidden">
            <img src="@/assets/BS2.jpg" class="card-img-top" alt="pict4" />
            <div class="card-body" style="text-align: left">
              <!-- <font-awesome-icon icon="fa-solid fa-star" /> -->
              <h6 class="card-text">Careful Cos</h6>
              <span style="color: rgb(48, 130, 133)"><b>$180.00</b></span>
            </div>
          </div>
          <br />
          <div class="card" style="width: 20rem; border: hidden">
            <img src="@/assets/LMR.jpg" class="card-img-top" alt="pict4" />
            <div class="card-body" style="text-align: left">
              <!-- <font-awesome-icon icon="fa-solid fa-star" /> -->
              <h6 class="card-text">Layered Luxury</h6>
              <span style="color: rgb(48, 130, 133)"><b>$245.00</b></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Customer Favorite Beauty Essentials -->
    <br /><br /><br />
    <!-- Diagram -->
    <div class="dg">
      <div class="row">
        <div class="col" style="text-align: left">
          <h3>
            <b>Perfect Smile, <br />Excellence Defined</b>
          </h3>
          <br />
          <p>
            Beauty is worth much than I paid. We've seen amazing results
            <br />already. Beauty is worth much than I paid.
          </p>
          <br />
          <p><b>Face Treatment</b></p>
          <div class="w3-light-grey w3-round-xlarge">
            <div
              class="w3-round-xlarge w3-teal"
              style="height: 10px; width: 90%"
            ></div>
          </div>
          <br />
          <p><b>Body Treatment</b></p>
          <div class="w3-light-grey w3-round-xlarge">
            <div
              class="w3-round-xlarge w3-teal"
              style="height: 10px; width: 95%"
            ></div>
          </div>
          <br />
          <p><b>Breast Treatment</b></p>
          <div class="w3-light-grey w3-round-xlarge">
            <div
              class="w3-round-xlarge w3-teal"
              style="height: 10px; width: 87%"
            ></div>
          </div>
          <br />
          <p><b>Mens Treatment</b></p>
          <div class="w3-light-grey w3-round-xlarge">
            <div
              class="w3-round-xlarge w3-teal"
              style="height: 10px; width: 93%"
            ></div>
          </div>
        </div>
        <div class="col">
          <img src="@/assets/BA.jpg" width="500px" height="450px" />
        </div>
      </div>
    </div>
    <!-- End Diagram -->
    <br /><br /><br />
    <!-- Carousel Quotes-->
    <img
      src="@/assets/koma2.png"
      width="150px"
      height="150px"
      style="opacity: 45%"
    />
    <div
      id="carouselExampleCaptions"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="@/assets/quo1.webp"
            style="height: 670px; width: 1350px"
            alt="quotes"
          />
          <div class="carousel-caption d-none d-md-block"></div>
        </div>
        <div class="carousel-item">
          <img
            src="@/assets/quo2.jpg"
            style="height: 670px; width: 1350px"
            alt="quotes"
          />
          <div class="carousel-caption d-none d-md-block"></div>
        </div>
        <div class="carousel-item">
          <img
            src="@/assets/quo3.jpg"
            style="height: 670px; width: 1350px"
            alt="quotes"
          />
          <div class="carousel-caption d-none d-md-block"></div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <!-- End Carousel Quotes-->
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
/* * {
  margin: 0;
  padding: 0;
} */

#home {
  max-width: 1440;
  color: black;
  margin-top: 41px;
  margin-bottom: -555px;
  /* text-align: center; */
}
#a,
#b,
#c {
  height: 7px;
  width: 7px;
  border-radius: 50%;
}

.carousel-control-prev,
.carousel-control-next {
  margin: 350px 20px 0px 20px;
  height: 1cm;
  width: 1cm;
  background-color: rgba(128, 128, 128, 0.596);
}

/* .col span {
  border: 1px solid rgb(48, 130, 133);
  height: 50px;
  width: 50px;
  border-radius: 50%;
} */
.Ad {
  background-image: url("../../assets/Ads.jpg");
  background-size: cover;
  height: 550px;
  color: rgb(39, 92, 94);
}
.btn {
  width: 150px;
  background-color: black;
  color: white;
  padding: 5px;
}
.BS,
.Un {
  display: flex;
  justify-content: space-between;
  /* justify-content: space-around; */
}
.Qst {
  background-color: rgba(255, 235, 205, 0.719);
  padding: 50px;
}
.ad1 {
  background-image: url("../../assets/CB.jpg");
  background-size: cover;
  height: 270px;
  padding: 50px 0px 0px 50px;
  text-align: left;
  color: rgba(165, 42, 42, 0.849);
}
.ad2 {
  background-image: url("../../assets/MK.jpg");
  background-size: cover;
  height: 270px;
  padding: 50px 0px 0px 50px;
  text-align: left;
}
.btn-ad {
  width: 150px;
  background-color: black;
  color: white;
  padding: 5px;
}
.pict {
  background-image: url("../../assets/pict.jpg");
  background-size: cover;
  width: 380px;
  height: 700px;
  padding: 530px 0px 0px 35px;
  text-align: left;
}
.dg {
  background-color: rgba(255, 235, 205, 0.719);
  padding: 75px;
}
</style>
