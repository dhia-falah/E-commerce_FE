<template>
  <div class="app">
    <Header />
    <div class="container1">
      <div class="p1">
        <div
          class="d-flex1 flex-column align-items-center justify-content-center"
        >
          <h3 class="lane1"><b>Contact Us</b></h3>
          <div class="p2">
            <p class="lane2">Home</p>
            <p class="lane2">-</p>
            <p class="lane2"><b>Page</b></p>
          </div>
        </div>
      </div>
      <div class="p3">
        <br /><br />
        <h6><b>Keep in touch with us</b></h6>
        <p>
          We're talking about clean beauty gift sets, of course - and we've got
          a bouquet of <br />beauties for yourself or someone you love.
        </p>
        <br />

        <div class="container2">
          <div class="row">
            <div class="col">
              <i class="fa fa-map-marker circle-icon" aria-hidden="true"></i
              ><br /><br />
              <h6><b>Store Location</b></h6>
              <p>Address: 28F2+QH Wonosari, Semarang City, Jawa Tengah</p>
            </div>

            <div class="col">
              <i
                class="fa fa-volume-control-phone circle-icon"
                aria-hidden="true"
              ></i
              ><br /><br />
              <h6><b>Contact</b></h6>
              <p>Hotline: (024) 8662971 <br />E-mail: smkbinusasmg@yahoo.com</p>
            </div>

            <div class="col">
              <i class="fa fa-clock-o circle-icon" aria-hidden="true"></i
              ><br /><br />
              <h6><b>Open Hours</b></h6>
              <p>Monday-Saturday: 07.00-15.00<br />Sunday: Close</p>
            </div>
          </div>
        </div>
        <br /><br />

        <div class="container3">
          <div class="mapouter">
            <div class="map-responsive">
              <iframe
                width="600"
                height="450"
                src="https://maps.google.com/maps?q=SMK%20Bina%20Nusantara%20Semarang&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameborder="0"
                allowfullscreen
              ></iframe
              ><a
                href="https://www.embedgooglemap.net/blog/divi-discount-code-elegant-themes-coupon/"
              ></a
              ><br />
              <a href="https://www.embedgooglemap.net">how to add google map</a>
            </div>
          </div>
        </div>
        <br /><br />

        <div class="p4">
          <h6 class="y"><b>Send Message</b></h6>
          <p class="y">
            Fill out this form and our specialistis will contact you shortly for
            detailed consultation.
          </p>
          <br />

          <div class="container4">
            <div class="row">
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Your Name *"
                  aria-label="First name"
                  required
                />
              </div>

              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Your Email *"
                  aria-label="Last name"
                  required
                />
              </div>
            </div>
            <br />

            <div class="form-floating">
              <textarea
                class="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea"
              ></textarea>
              <label for="floatingTextarea">Comments</label>
            </div>
            <br />

            <div class="col-12">
              <button type="submit" class="rgb">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header/Header.vue";
import Footer from "@/components/Footer/Footer.vue";
export default {
  name: "ContactUs",
  components: {
    Header,
    Footer,
  },
};
</script>

<style >
.p1 {
  background-image: url("../../assets/img.jpg");
  width: 100%;
  height: auto;
  color: white;
}

.p2 {
  display: inline-flex !important;
}

.p3 {
  text-align: center;
}

.lane1 {
  font-weight: 300;
}

.lane2 {
  margin: 0 !important;
}

.container1 {
  margin: 0;
  font-size: 1rem;
  font-weight: 300;
  box-sizing: border-box;
}

.container2 {
  text-align: center;
}

.container3 {
  width: 70%;
  height: auto;
  margin-right: auto;
  margin-left: auto;
  border: 3px relative;
}

.container4 {
  margin: auto;
  width: 50%;
  border: 3 px solid;
  padding: 10px;
}

.circle-icon {
  background: rgb(53, 168, 172);
  color: rgb(5, 104, 107);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  line-height: 10px;
  vertical-align: middle;
  padding: 17px;
}

.d-flex1 {
  min-height: 300px;
  display: flex !important;
}

.map-responsive {
  border: none;
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
  height: 0;
}

.map-responsive iframe {
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  border: 0;
  position: absolute;
}

.mapouter {
  position: relative;
  text-align: right;
  height: 100%;
  width: 100%;
}

.rgb {
  color: white;
  background-color: rgb(5, 104, 107);
  border-radius: 5px;
  border-color: rgb(5, 104, 107);
  width: 150px;
}
@media (max-width: 768px) {
  .p3 {
    font-size: 11px;
  }
}
</style>