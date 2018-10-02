import React from "react";
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
// import ContentPaste from "@material-ui/icons/ContentPaste";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Plus from "@material-ui/icons/NoteAdd";
import Store from "@material-ui/icons/Store";
// core components/views
import DashboardPage from "views/PresentationPage/Sections/SectionFreeDemo.jsx";
import mainPage from "views/App/mainPage/mainPage";
import Noticias from "views/App/Noticias/Noticias";
import BlogPostsPage from "views/BlogPostsPage/BlogPostsPage.jsx";
import SectionProjects from "views/SectionsPage/Sections/SectionProjects.jsx";
import SectionBlogs from "views/SectionsPage/Sections/SectionBlogs.jsx";
import ContactUsPage from "views/ContactUsPage/ContactUsPage.jsx";


const pageRoutes = [
  {
    path: "/Noticias",
    sidebarName: "Noticias",
    navbarName: "Noticias",
    icon: Dashboard,
    component: SectionProjects
  },
  {
    path: "/Peliculas",
    sidebarName: "BlogPostsPage",
    navbarName: "BlogPostsPage",
    icon: Dashboard,
    component: BlogPostsPage
  },

  {
    path: "/Blog",
    sidebarName: "SectionBlogs",
    navbarName: "SectionBlogs",
    icon: Dashboard,
    component: SectionBlogs
  },
  { path: "/contactanos", name: "ContactUsPage", component: ContactUsPage },
  { path: "/", component: mainPage, navbarName: "Redirect" }
];

export default pageRoutes;
