<template>
  <div class="container1">
    <div class="p1">
      <h2><b>Contact Us</b></h2>
      <p class="lane1">Home - <b>Page</b></p>
    </div>
    <div class="p2">
      <br /><br />
      <h5><b>Keep in touch with us</b></h5>
      <p>
        We're talking about clean beauty gift sets, of course - and we've got a
        bouquet of <br />beauties for yourself or someone you love.
      </p>
      <br />

      <div class="container2">
        <div class="row">
          <div class="col">
            <i class="fa fa-map-marker circle-icon" aria-hidden="true"></i
            ><br /><br />
            <h5><b>Store Location</b></h5>
            <p>Address: 25 west 21th Street, Miami FL, USA</p>
          </div>

          <div class="col">
            <i
              class="fa fa-volume-control-phone circle-icon"
              aria-hidden="true"
            ></i
            ><br /><br />
            <h5><b>Contact</b></h5>
            <p>Hotline 1900 26886<br />E-mail Info@harashop.com</p>
          </div>

          <div class="col">
            <i class="fa fa-clock-o circle-icon" aria-hidden="true"></i
            ><br /><br />
            <h5><b>Open Hours</b></h5>
            <p>Monday-Saturday: 8:00 am - 4:00pm<br />Sunday: Close</p>
          </div>
        </div>
      </div>
      <br /><br />

      <div class="container3">
        <div class="mapouter">
          <div class="gmap_canvas">
            <iframe
              width="600"
              height="500"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=London%20Eye&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe
            ><a href="https://123movies-to.org"></a><br />
            <a href="https://www.embedgooglemap.net">how to add google map</a>
          </div>
        </div>
      </div>
      <br /><br />

      <div class="p3">
        <h5><b>Send Message</b></h5>
        <p>
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
              />
            </div>

            <div class="col">
              <input
                type="text"
                class="form-control"
                placeholder="Your Email *"
                aria-label="Last name"
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
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </div>
        <br /><br />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactUs",
};
</script>

<style >
/* * {
  padding: 0;
  margin: 0;
} */
.p1 {
  background-image: url("../../assets/img.jpg");
  background-repeat: no-repeat;
  padding: 70px 0;
  border: 3px;
  text-align: center;
  color: whitesmoke;
  width: 100%;
  height: 250px;
}

.p2 {
  text-align: center;
}

.container1 {
  max-width: 1440px;
  margin: auto;
  margin-bottom: -555px;
}

.container3 {
  margin: auto;
  width: 50%;
  /* border: 3 px solid; */
  padding: 10px;
}

.container4 {
  margin: auto;
  width: 50%;
  border: 3 px solid;
  padding: 10px;
}

.gmap_canvas {
  overflow: hidden;
  background: none !important;
  height: 500px;
  width: 600px;
}

.mapouter {
  position: relative;
  text-align: right;
  height: 500px;
  width: 600px;
}
.circle-icon {
  background: #00bfff;
  color: blue;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  text-align: center;
  line-height: 10px;
  vertical-align: middle;
  padding: 17px;
}
</style>