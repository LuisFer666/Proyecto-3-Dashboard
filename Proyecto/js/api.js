//import { Octokit } from 'https://cdn.skypack.dev/octokit'; // se rompió 18/05/2023 https://github.com/octokit/octokit.js/issues/2450
import { Octokit, App } from "https://esm.sh/octokit@2.0.19";

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
