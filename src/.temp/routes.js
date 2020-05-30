const c1 = () => import(/* webpackChunkName: "page--src-pages-about-vue" */ "C:\\Users\\PatentLobster\\PhpstormProjects\\itzik-co\\src\\pages\\About.vue")
const c2 = () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "C:\\Users\\PatentLobster\\PhpstormProjects\\itzik-co\\node_modules\\gridsome\\app\\pages\\404.vue")
const c3 = () => import(/* webpackChunkName: "page--src-templates-base-vue" */ "C:\\Users\\PatentLobster\\PhpstormProjects\\itzik-co\\src\\templates\\Base.vue")

export default [
  {
    path: "/about/",
    component: c1
  },
  {
    name: "404",
    path: "/404/",
    component: c2
  },
  {
    path: "/",
    component: c3,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--content-index-md" */ "C:\\Users\\PatentLobster\\PhpstormProjects\\itzik-co\\content\\index.md")
    }
  },
  {
    name: "*",
    path: "*",
    component: c2
  }
]
