// Main SCSS
import './assets/style/index.scss'

import DefaultLayout from '~/layouts/Default.vue'
import * as Sentry from "@sentry/vue";
import { Integrations } from "@sentry/tracing";

export default function (Vue, {router, head, isClient}) {
    Sentry.init({
        Vue: Vue,
        dsn: "https://f423a039018c4ef18664f47d0271d68d@o543602.ingest.sentry.io/5664481",
        integrations: [new Integrations.BrowserTracing()],
        tracesSampleRate: 1.0,
        tracingOptions: {
            trackComponents: true,
        },
    });

    // Set default layout as a global component
    Vue.component('Layout', DefaultLayout);

    // Google Fonts
    head.link.push({
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Gochi+Hand&family=Josefin+Sans:wght@200;300;400&display=swap',
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

}
