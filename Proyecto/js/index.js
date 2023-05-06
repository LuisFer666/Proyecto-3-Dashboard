import { Octokit } from 'https://cdn.skypack.dev/octokit';
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

const octokit = new Octokit({
    auth: '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'
});

/*
const request = await octokit.request("GET /repos/{owner}/{repo}/issues", {
    owner: "octocat",
    repo: "Spoon-Knife",
  });

  console.log(request.data);
  */

const request = await octokit.request("GET /users/LuisFer666/events");

console.log(request.data);