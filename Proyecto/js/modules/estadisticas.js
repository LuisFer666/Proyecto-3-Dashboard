export async function mostrarEstadisticas() {
    const contenido = document.createElement('div');

    contenido.innerHTML = await ((await fetch('./js/modules/estadisticas.html')).text());
    return contenido;
}