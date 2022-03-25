import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home/Home.vue";
import Blogs from "@/views/Blogs/Blogs.vue";
import AboutUs from "@/views/AboutUs/AboutUs.vue";
import ContactUs from "@/views/ContactUs/ContactUs.vue";
// import ProductDisplay from "@/views/ProductDisplay/productDisplay.vue";

Vue.use(Router);

let router = new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      components: {
        default: Home,
      },
    },
    {
      path: "/blog",
      name: "Blogs",
      components: {
        default: Blogs,
      },
    },
    {
      path: "/contact",
      name: "ContactUs",
      components: {
        default: ContactUs,
      },
    },
    {
      path: "/about",
      name: "AboutUs",
      components: {
        default: AboutUs,
      },
    },
    // {
    //   path: "/product",
    //   name: "ProductDisplay",
    //   components: {
    //     default: ProductDisplay,
    //   },
    // },
  ],
  mode: "history",
});

export default router;
