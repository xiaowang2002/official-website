import { createRouter, createWebHistory } from 'vue-router'
import PageView from "@/views/PageView";
import HomePage from "@/views/HomePage";
import Software from "@/views/Software";
import Service from "@/views/Service";
import NewsInformation from "@/views/NewsInformation";
import ContactUs from "@/views/ContactUs";

const routes = [
  {
    path: '/',
    name: 'PageView',
    component: PageView,
    children: [
      {
        path: '/',
        redirect: '/home'
      },
      {
        path: '/home',
        name: 'home',
        component: HomePage,
        meta: {
          title: '友加云商'
        }
      },
      {
        path: '/software',
        name: 'software',
        component: Software,
        meta: {
          title: '友加云商'
        }
      },
      {
        path: '/service',
        name: 'service',
        component: Service,
        meta: {
          title: '友加云商'
        }
      },
      {
        path: '/newsinformation',
        name: 'newsinformation',
        component: NewsInformation,
        meta: {
          title: '友加云商'
        }
      },
      {
        path: '/contactus',
        name: 'contactus',
        component: ContactUs,
        meta: {
          title: '友加云商'
        }
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
