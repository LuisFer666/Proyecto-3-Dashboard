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

const request = await octokit.request('GET /users/{username}', {
    username: 'octocat',
    headers: {
        'X-GitHub-Api-Version': '2022-11-28'
    }
});

const public_repos = request.data.public_repos;
const public_gists = request.data.public_gists;
const followers = request.data.followers;
const following = request.data.following;
const created_at = request.data.created_at;

console.log(request.data);

console.log('Repositorios publicos: ', public_repos);
console.log('Gists publicos: ', public_gists);
console.log('Seguidores: ', followers);
console.log('Siguiendo: ', following);
console.log('Fecha de creación: ', created_at);