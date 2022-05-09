<template>
  <div>
    <div class="hdr-1">
      <div class="header-logo">
        <a href="https://www.facebook.com/smkbinusasmg"
          ><i class="fa-brands fa-facebook-f"></i
        ></a>

        <a href="https://twitter.com/smkbinusasmg"
          ><i class="fa-brands fa-twitter"></i
        ></a>

        <a href="https://www.instagram.com/smkbinanusantara_smg/"
          ><i class="fa-brands fa-instagram"></i
        ></a>

        <a href="https://www.youtube.com/channel/UCw5YNITJ8UTpWB9N55saWhw"
          ><i class="fa-brands fa-youtube"></i
        ></a>
      </div>
      <div class="header-menu">
        <p><i class="fa-solid fa-clock"></i> &nbsp;mon-fri:10.00-18.00</p>
        <p>
          <i class="fa-solid fa-location-dot"></i> &nbsp;25 west 21th street,
          miami fl, usa
        </p>
        <p><i class="fa-solid fa-envelope"></i> &nbsp;contact@example.com</p>
      </div>
    </div>
    <div class="hdr-2">
      <div class="container">
        <div class="hdr-2-header">
          <div>
            <a href="/"><img src="@/assets/cove.jpg" alt="" width="77px" /></a>
          </div>

          <div class="search">
            <input
              type="text"
              class="searchTerm"
              placeholder="What are you looking for?"
            />
            <button type="submit" class="searchButton">
              <i class="fa fa-search"></i>
            </button>
          </div>
          <div class="hdr-2-logo">
            <i class="fa-solid fa-2xl fa-user"></i>
            <i class="fa-solid fa-2xl fa-heart"></i>
            <i class="fa-solid fa-2xl fa-bag-shopping"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="hdr-3">
      <div>
        <a href="/product"
          ><button id="button" style="vertical-align: middle">
            <span>Shop </span>
          </button></a
        >
        <a href="/about"
          ><button id="button" style="vertical-align: middle">
            <span>AboutUs </span>
          </button></a
        >
        <a href="/blog"
          ><button id="button" style="vertical-align: middle">
            <span>Blog </span>
          </button></a
        >
        <a href="/contact"
          ><button id="button" style="vertical-align: middle">
            <span>ContactUs </span>
          </button></a
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.all {
  max-width: 1440px;
  margin: auto;
}

.hdr-1 {
  background: rgb(5, 138, 143);
  padding: 10px 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header-logo {
  display: flex;
  gap: 20px;
}
.header-menu {
  display: flex;
  gap: 25px;
}
.header-menu p {
  font-weight: bold;
}

@media screen and (max-width: 768px) {
  .hdr-1 {
    display: block;
    text-align: center;
  }
  .header-logo {
    justify-content: center;
  }
  .header-logo a {
    font-size: 25px;
  }
  .header-menu {
    display: none;
  }
}

.hdr-2 {
  background: rgb(5, 104, 107);
  padding: 10px 50px;
}

img {
  border-radius: 50px;
}

input {
  width: 55%;
  height: 45px;
  border-radius: 5px;
}

.hdr-2-header {
  display: flex;
  gap: 55px;
  align-items: center;
}

.hdr-2-logo {
  display: flex;
  gap: 20px;
  align-items: center;
  font-size: 20px;
  color: antiquewhite;
}

.hdr-3 {
  background: rgb(5, 104, 107);
  display: flex;
  justify-content: center;
  gap: 1px;
}

#button {
  border-radius: 3px;
  background-color: rgb(5, 138, 143);
  border: none;
  color: #ffffff;
  text-align: center;
  font-size: 15px;
  padding: 8px;
  width: 100px;
  height: 35px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 10px;
}

#button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

#button span:after {
  content: "\00bb";
  position: absolute;
  opacity: 0;
  top: 0;
  right: -8px;
  transition: 0.5s;
}

#button:hover span {
  padding-right: 15px;
}

#button:hover span:after {
  opacity: 1;
  right: 0;
}

p {
  color: #ffff;
  font-size: 14px;
}

/* input css */
@import url(https://fonts.googleapis.com/css?family=Open+Sans);

.search {
  width: 100%;
  position: relative;
  display: flex;
}

.searchTerm {
  width: 100%;
  border: 3px solid #eef4f5;
  border-right: none;
  padding: 5px;
  height: 40px;
  border-radius: 5px 0 0 5px;
  outline: none;
  color: #9dbfaf;
}

.searchTerm:focus {
  color: #000000;
}

.searchButton {
  width: 40px;
  height: 40px;
  border: 1px solid rgb(5, 138, 143);
  background: rgb(5, 138, 143);
  text-align: center;
  color: #fff;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 20px;
}

/* diatas input css */
</style>