import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { 
    faUser, faUpload, faPaperPlane,
    faHeadphones, faCode, faHouseChimney, faChartLine, faSackDollar, faTruck, faUtensils, faFire,
    faStar, faBuilding, faCreditCard, faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome';

library.add(faUser, faUpload, faPaperPlane, faHeadphones, faCode, faHouseChimney, faChartLine, faSackDollar, faTruck, faUtensils, faFire, faStar, faBuilding, faCreditCard, faBriefcase,)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.component('font-awesome-layers', FontAwesomeLayers)
.component('font-awesome-layer-text', FontAwesomeLayersText)
.mount('#app');