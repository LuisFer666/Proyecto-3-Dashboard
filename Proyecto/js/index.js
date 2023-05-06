import { mostrarCuentas } from './modules/cuentas.js';
import { mostrarEstadisticas } from './modules/estadisticas.js';

var mainPage = document.getElementById("mainPage");
mainPage.innerHTML = '';
mainPage.appendChild(await mostrarEstadisticas());

const btnEstadisticas = document.getElementById('btnEstadisticas');
btnEstadisticas.addEventListener('click', async () => {
    mainPage.innerHTML = '';
    mainPage.appendChild(await mostrarEstadisticas());
});

const btnCuentas = document.getElementById('btnCuentas');
btnCuentas.addEventListener('click', async () => {
    mainPage.innerHTML = '';
    mainPage.appendChild(await mostrarCuentas());
});