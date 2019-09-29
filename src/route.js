//import todas las vistas
import { templateHome } from './assets/views/templateHome.js';
import { templateRegistre } from './assets/views/templateAboutRegistre.js';
// import { templateMuro } from "./assets/views/templateMuro.js";
import { templateLogin } from './assets/views/templateProjectLogin.js';
import { templateSignOut } from "./assets/views/templateSignOut.js";
import { observer } from './assets/js/firebase_auth.js';


const changeRoute = (hash) => {
  console.log("window.location.hash leido   /  llamando a showTemplate");
  if (hash === 'signOut' || hash === '#/registre' || hash === '#/muro' || hash === '#/login' || hash === '#/home' || hash === '' || hash === '#/' || hash === '/#') {
    return showTemplate(hash)
  }
  return showTemplate(hash)
}

// segunda función showTemplate(hash)
const showTemplate = (hash) => {
  // #/about
  const router = hash.substring(2); // home about project
  const containerRoot = document.getElementById('root');
  containerRoot.innerHTML = '';

  switch (router) {
    case 'home':
      templateHome();
      console.log(" hash paso a router --- se activa fx templateHome");
      break;
    case '':
      templateHome();
      console.log(" hash paso a router --- se activa fx templateHome");
      break;
    case 'registre':

      templateRegistre();
      console.log(" hash paso a router --- se activa fx templateRegistre");
      break;
    case 'muro':
      observer();
      // templateMuro();
      console.log(" hash paso a router --- se activa fx templateMuro");
      break;
    case 'login':
      templateLogin();
      console.log(" hash paso a router --- se activa fx templateLogin");
      break;
    case 'signOut':
      templateSignOut();
      console.log(" hash paso a router --- se activa fx templateLogin");
      break;
    default:
      containerRoot.innerHTML = `<h1>Error 404</h1>`
  }
}

export const initRouter = () => {

  // cuando la ventana se carga saca el hash y se lo pasa a changeRoute
  window.addEventListener('load', changeRoute(window.location.hash));

  // si encuentra un cambio en el hash lo vuelve a sacar y pasar como parámetro a changeRoute
  if ('onhashchange' in window) {
    window.onhashchange = () => {
      observer();
      changeRoute(window.location.hash);
    }
  }
}

