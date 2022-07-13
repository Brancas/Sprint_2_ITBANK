// Inicializamos las variables
let DISPLAY_NOMBRE = document.getElementById('nombre'),
    DISPLAY_MONTO = document.getElementById('monto'),
    TOTAL,
    TOTAL_INDIVIDUAL;
var DICTIONARY = {},
BTN = document.getElementById('enviar');


// Vamos cargando en pantalla la lista de personas y gastos
function Screen(nombre, monto) {
    this.nombre = nombre;
    this.monto = monto;
    this.card = document.createElement('div');
    this.card.className = 'card';
    this.card.innerHTML = `
        <div class="card-body">
            <span class="name card-title h5">${this.nombre} gastó</span>
            <span class="amount card-text h5">$${this.monto}</span>
        </div>
    `;
    document.querySelector('.new-screens').appendChild(this.card);
}

//Funcion para calcular el total gastado
function calculateTotal() {
    TOTAL=0;
    for (let key in DICTIONARY) {
        TOTAL += DICTIONARY[key];
    }
    return TOTAL;
}

// Agregamos el contenido a la clase TOTAL y RESULTADO en el HTML
function changeContent() {
    document.querySelector('.total').innerHTML = `<span class="bg-primary fw-bold">TOTAL: $${TOTAL}</span>`;
    document.querySelector('.resultado').innerHTML = `<span class="bg-info fw-bold"> A cada uno le toca aportar: $${TOTAL_INDIVIDUAL}</span>`;
}


// Creamos una funcion que divida el total entre la cantidad final de participantes
function calculateIndividual() {
    let TOTAL_INDIVIDUAL = TOTAL / Object.keys(DICTIONARY).length;
    return TOTAL_INDIVIDUAL;
}


var Refresh = function() {
    if (DISPLAY_NOMBRE.value && DISPLAY_MONTO.value) {
        nombre = DISPLAY_NOMBRE.value,
        monto = parseFloat(DISPLAY_MONTO.value);
        let screen = new Screen(nombre, monto);
        DICTIONARY[nombre] = monto;
        console.log(DICTIONARY);
        TOTAL = calculateTotal();
        TOTAL_INDIVIDUAL = calculateIndividual();
        changeContent();
    }
}

// Inicializador de eventos
BTN.addEventListener('click', Refresh);