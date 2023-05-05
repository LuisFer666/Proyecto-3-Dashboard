export function mostrarPrueba() {
    const contenido = document.createElement('div');
    contenido.innerHTML = 
    `
    <div class="relative bg-indigo-800">
        <div class="absolute inset-0">
            <img class="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZmluYW5jZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt="">
            <div class="absolute inset-0 bg-indigo-800" style="mix-blend-mode: multiply;" aria-hidden="true"></div>
        </div>
        <div class="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Estadisticas</h1>
            <p class="mt-6 text-xl text-indigo-100 max-w-3xl">Base de datos usada: <u><a
                        href="https://www.openbankingeurope.eu/">Open Banking Europe</a></u></p>
        </div>
    </div>
    <div class="py-6">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <h1 class="text-2xl font-semibold text-gray-900">Euro</h1>
        </div>
        <div>
            <dl
                class="mt-5 grid grid-cols-1 bg-white overflow-hidden shadow divide-y divide-gray-200 md:grid-cols-3 md:divide-y-0 md:divide-x mb-10">
                <div class="px-4 py-5 sm:p-6">
                    <dt class="text-base font-normal text-gray-900">
                        MXN
                    </dt>
                    <dd class="mt-1 flex justify-between items-baseline md:block lg:flex">
                        <div class="flex items-baseline text-2xl font-semibold text-indigo-600">
                            24.234
                        </div>

                        <div
                            class="inline-flex items-baseline px-2.5 py-0.5  text-sm font-medium bg-green-100 text-green-800 md:mt-2 lg:mt-0">
                            <!-- Heroicon name: solid/arrow-sm-up -->
                            <svg class="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-green-500"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                aria-hidden="true">
                                <path fill-rule="evenodd"
                                    d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                                    clip-rule="evenodd" />
                            </svg>

                            0.3%
                        </div>
                    </dd>
                </div>

                <div class="px-4 py-5 sm:p-6">
                    <dt class="text-base font-normal text-gray-900">
                        CAD
                    </dt>
                    <dd class="mt-1 flex justify-between items-baseline md:block lg:flex">
                        <div class="flex items-baseline text-2xl font-semibold text-indigo-600">
                            1.468
                        </div>

                        <div
                            class="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800 md:mt-2 lg:mt-0">
                            <!-- Heroicon name: solid/arrow-sm-up -->
                            <svg class="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-green-500"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                aria-hidden="true">
                                <path fill-rule="evenodd"
                                    d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                                    clip-rule="evenodd" />
                            </svg>
                            <span class="sr-only">
                                Increased by
                            </span>
                            2.02%
                        </div>
                    </dd>
                </div>

                <div class="px-4 py-5 sm:p-6">
                    <dt class="text-base font-normal text-gray-900">
                        CUP
                    </dt>
                    <dd class="mt-1 flex justify-between items-baseline md:block lg:flex">
                        <div class="flex items-baseline text-2xl font-semibold text-indigo-600">
                            31.968
                        </div>

                        <div
                            class="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium bg-red-100 text-red-800 md:mt-2 lg:mt-0">
                            <!-- Heroicon name: solid/arrow-sm-down -->
                            <svg class="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-red-500"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                aria-hidden="true">
                                <path fill-rule="evenodd"
                                    d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z"
                                    clip-rule="evenodd" />
                            </svg>
                            <span class="sr-only">
                                Decreased by
                            </span>
                            4.05%
                        </div>
                    </dd>
                </div>
            </dl>
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <div>
                <!-- <br />
                    <input id="currency-date" type="date" />
                    <button id="btn-date">Ver fecha</button> -->
            </div>
            <br />
            <canvas id="myChart" width="400" height="150"></canvas>
        </div>
    </div>
    </div>
    `;
    
    return contenido;
    
}