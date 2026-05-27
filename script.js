// ======================================
// TECHBANK STORE
// SISTEMA BANCO
// ======================================



// --------------------------------------
// SALDO INICIAL DEL USUARIO
// --------------------------------------

let saldo = 1000;



// --------------------------------------
// ACTUALIZA EL TEXTO DEL SALDO
// EN LA PANTALLA
// --------------------------------------

function actualizarSaldo(){

document
.getElementById(
"saldo"
)
.innerHTML=

"$"

+

saldo;

}



// --------------------------------------
// DEPOSITAR DINERO
// --------------------------------------

function depositar(){


// Obtener monto

let monto =

Number(

document

.getElementById(

"montoDeposito"

)

.value

);


// Validar

if(

monto<=0

||

isNaN(

monto

)

){

alert(

"Ingrese un monto válido"

);

return;

}


// Sumar

saldo += monto;


// Actualizar

actualizarSaldo();


// Limpiar

document

.getElementById(

"montoDeposito"

)

.value="";


// Mensaje

alert(

"Depósito realizado"

);

}



// --------------------------------------
// CALCULAR INTERÉS
// --------------------------------------

function calcularInteres(){


// Obtener datos

let monto =

Number(

document

.getElementById(

"montoInteres"

)

.value

);


let porcentaje =

Number(

document

.getElementById(

"porcentajeInteres"

)

.value

);


// Validar

if(

monto<=0

||

porcentaje<=0

||

isNaN(

monto

)

||

isNaN(

porcentaje

)

){

alert(

"Complete correctamente"

);

return;

}


// Fórmula

let interes =

(

monto

*

porcentaje

)

/

100;



let total =

monto

+

interes;


// Mostrar

document

.getElementById(

"resultadoInteres"

)

.innerHTML=

`
Interés generado:
<b>$${interes}</b>

<br>

Total:
<b>$${total}</b>

`;

}



// --------------------------------------
// CARGAR SALDO AL ABRIR
// --------------------------------------

window.onload=

function(){

if(

document

.getElementById(

"saldo"

)

){

actualizarSaldo();

}
// =========================
// CARRITO
// =========================

let totalCarrito = 0;



function comprar(){

if(

totalCarrito===0

){

alert(

"No hay productos"

);

return;

}


alert(

"Compra realizada"

);

totalCarrito=0;


if(

document.getElementById(

"totalCarrito"

)

){

document.getElementById(

"totalCarrito"

)

.innerHTML="$0";

}


}
};



// ======================================
// FUTURO
// ======================================

// carrito()

// login()

// compras()

// historial()

// transferencia()