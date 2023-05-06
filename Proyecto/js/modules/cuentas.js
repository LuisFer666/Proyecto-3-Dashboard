export async function mostrarCuentas() {
    const contenido = document.createElement('div');

    contenido.innerHTML = await ((await fetch('./js/modules/cuentas.html')).text());
    return contenido;
}