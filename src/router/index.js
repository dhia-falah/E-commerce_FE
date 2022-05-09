import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home/Home.vue";
import Blogs from "@/views/Blogs/Blogs.vue";
import AboutUs from "@/views/AboutUs/AboutUs.vue";
import ContactUs from "@/views/ContactUs/ContactUs.vue";
import ProductDisplay from "@/views/ProductDisplay/productDisplay.vue";
import Admin from "@/views/Admin/Admin.vue";
import Login from "@/components/login/login.vue";
import ProductAdmin from "@/views/pages/ProductAdmin.vue";
import BlogAdmin from "@/views/pages/BlogAdmin.vue";
import AboutAdmin from "@/views/pages/AboutAdmin.vue";
import ContactAdmin from "@/views/pages/ContactAdmin.vue";
import ProfilAdmin from "@/views/pages/ProfilAdmin.vue";

Vue.use(Router);

let router = new Router({
    routes: [{
            path: "/dasbordAdmin",
            name: "Login",
            components: {
                default: Login,
            },
        },
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
            path: "/profil",
            name: "ProfilAdmin",
            components: {
                default: ProfilAdmin,
            },
        },
        {
            path: "/about",
            name: "AboutUs",
            components: {
                default: AboutUs,
            },
        },
        {
            path: "/product",
            name: "ProductDisplay",
            components: {
                default: ProductDisplay,
            },
        },
        {
            path: "/admin",
            name: "Admin",
            components: {
                default: Admin,
            },
        },
        {
            path: "/products",
            name: "ProductAdmin",
            components: {
                default: ProductAdmin,
            },
        },
        {
            path: "/contacts",
            name: "ContactAdmin",
            components: {
                default: ContactAdmin,
            },
        },
        {
            path: "/abouts",
            name: "AboutAdmin",
            components: {
                default: AboutAdmin,
            },
        },
        {
            path: "/blogs",
            name: "BlogAdmin",
            components: {
                default: BlogAdmin,
            },
        },
    ],
    mode: "history",
});

export default router;