// Inicializando 
import { initRouter } from './route.js';
import { initiationFirebase } from './assets/js/firebase_init.js';
import { observer } from './assets/js/firebase_auth.js'

export const init = () => {
  
  initiationFirebase();
  initRouter();
  observer();
};

window.addEventListener('load',init);