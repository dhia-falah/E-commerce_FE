<template>
  <nav id="sidebar">
    <div class="sidebar-header">
      <a href="#"><h3>User Management</h3></a>
    </div>

    <ul class="list-unstyled components">
      <li>
        <a href="/admin"
          ><i class="fa-solid fa-gauge-high"></i>&nbsp;&nbsp;Dasbor</a
        >
      </li>

      <li>
        <a href="/products"
          ><i class="fa-solid fa-box"></i>&nbsp;&nbsp;Product</a
        >
      </li>
      <li>
        <a href="/profil"><i class="fa-solid fa-user"></i>&nbsp;&nbsp;Profil</a>
      </li>

      <li>
        <a href="/abouts"
          ><i class="fa-solid fa-address-card"></i>&nbsp;&nbsp;About Us</a
        >
      </li>

      <li>
        <a href="/contacts"
          ><i class="fa-solid fa-address-book"></i>&nbsp;&nbsp;Contact Us
        </a>
      </li>
      <li>
        <a href="blogs"
          ><i class="fa-brands fa-blogger"></i>&nbsp;&nbsp;Blogs
        </a>
      </li>

      <li>
        <a href="#" class="out"
          ><i class="fa-solid fa-arrow-right"></i>&nbsp;Keluar</a
        >
      </li>
    </ul>
  </nav>
</template>

// <script>
export default {
  name: "Sidebar",
};
</script>

<style>
@import "./css-sidebar.css";
</style>
