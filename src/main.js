// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import './assets/style/index.scss'


import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);

  // Google Fonts
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Bad+Script&family=Gochi+Hand&display=swap',
  });

  // FontAwesome
  head.link.push({
    rel: 'stylesheet',
    href: 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
  });

  // Bootstrap 4 grid only
  head.link.push({
    rel: 'stylesheet',
    href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap-grid.min.css',
  });

  // Animate.css
  head.link.push({
    rel: 'stylesheet',
    href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css',
  });

  // PageClip
  head.link.push({
    rel: 'stylesheet',
    href: 'https://s.pageclip.co/v1/pageclip.css',
  });
  head.script.push({
    src: 'https://s.pageclip.co/v1/pageclip.js',
    body: true
  })



}
