import './bootstrap';
import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import 'vuetify/styles'
import * as components from 'vuetify/components'

import { createVuetify } from 'vuetify'
import * as directives from 'vuetify/directives'

createInertiaApp({
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
        return pages[`./Pages/${name}.vue`]
    },
    setup({ el, App, props, plugin }) {
        const vuetify = createVuetify({
            components,
            directives
        })
        createApp({ render: () => h(App, props) })
            .use(vuetify)
            .use(plugin)
            .mount(el);
    },
});
