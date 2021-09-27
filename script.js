
// todos los objetos se copian por referencia 
// solo los var se copian por valor


//TIPOS DE DATOS:
//1) PRIMITIVOS: var, number
//2) OBJETOS: number, string

/* function as a class */
function Jugador(name){  //function que es utilizada como una Clase con atributos y metodos
        this.name= name;
        this.pv = 100,
        this.sp = 100
        // this.decrementarSP= function(){  // los metodos se agregan con prototype
        //     if(this.sp>=30)
        //     this.sp -=30;

        // }

}

var ganador = new Jugador("erica"); // crea un espacio en memoria y lo asigna a var ganador
var perdedor = new Jugador("gary");


/* prototype */
/* permite agregar atributos y metodos a una clase existente */
/* prototipo solo existe 1 por cada clase, no existe 1 prototipo por objeto */

Jugador.prototype.decrementarSP = function(){
        if(this.sp>=30)
            this.sp -=40;
}

Jugador.prototype.edad = 30;

ganador.decrementarSP();

/* instanceof: devuelve true/false permite comparar dos objetos EJ: ganador instanceof Jugador */
/* typeof: devuelve el tipo de datos. EJ: typeof ganador */

/* ARRAYS*/

// definicion
var objArray1 = new Array();
var objArray2 = [2,3,5,9];

// funciones
objArray1.reverse();
//map, retorna un arreglo, permite ejecutar una funcion para cada elemento del arreglo

objArray2 = objArray2.map(function(elemento){ elemento +=1; return elemento; })
console.log(objArray2);

//join: convierte el array en un string, el separador por defecto es la Coma
var cadena = objArray2.join();
console.log(cadena);
//split: separa el string y retorna un arreglo
var array3 =  cadena.split(',');
console.log(array3);

//arreglo.push: agrega un elemento al final del arreglo
//arreglo.unshift: agrega elemento al inicio del arreglo
//arreglo.toString() : devuelve un string
//arreglo.pop() : retorna y elimina ultimo elemento
//arreglo.splice(int pos, int lengh) : elimina a partir de la posicion la cantidad indicada por lengh
//arreglo.splice(int pos, int lengh, valor): reemplaza por valor

//arreglo.slice(int pos, int posFinal) : crea array a partir de pos hasta posFinal no incluido


//FUNCTION CONTEXT:
// la funcion se encuentra en el ambito global. puedo acceder y modificar las variables. ejemplo:

var valor = 10;

function imprimirValor(){
    valor = 50;
    console.log("valor dentro de function " + valor);
}

imprimirValor();
console.log("valor fuera de function " + valor);

//FUNCTION PARAMETERS:
// los parametros de datos primitivos se pasan por copia. ejemplo:
var valor = 10;

function imprimirValorPrimitivo(valorPrim){
    valorPrim = 50;
    console.log("imprimirValorPrimitivo: " + valorPrim);
}

imprimirValorPrimitivo(valor);
console.log("imprimirValorPrimitivo fuera: " + valor);

//los parametros de tipo objeto se pasan por referencia. (ocupan misma espacio de memoria)

//ARGUMENTS: es un array que almacena los argumentos enviados a una funcion
//usos: validar cantidad de parametros recibidos

function funcionEjemploArg()
{
    if(arguments.length<2)
    {
        console.log("cantidad de parametros invalidos");
    }

}

funcionEjemploArg(1,2);


//SOBRECARGA: JS no permite la sobrecarga de funciones (con igual nombre)
//PARAMETROS POR DEFECTO: JS no permite definir valor por defecto en la firma de la funcion valor=20,
//se debe utilizar: valor = valor || 20. lo cual permite asignar 20 si valor esta vacio. ejemplo:
function funcionEjemploParDefecto(valor )
{
   valor = valor || 20;
}


//POLIMORFISMO: JS no permite, se utilizan las funciones typeof, instanceof para determinar
//el tipo de dato y darle tratamiento

function functionPolimorfismo(a)
{
    if(a===undefined)
    {
        console.log("A no esta definido");
    }

    if(typeof a === "number")
    {
        console.log("A es tipo numero primivito")
    }

    if(typeof a === "string")
    {
        console.log("A es tipo string primitivo");
    }
    if(typeof a === "object")
    {
        console.log("A es un objeto");

        if( a instanceof Number)
        {
            console.log("A es tipo Number objeto");

        }
    }
}


var numeroObjeto = new Number(1);
functionPolimorfismo(1);  // numero primitivo
functionPolimorfismo(numeroObjeto);  // numero objeto

// FUNCTION Y FUNCION ANONIMA, salvar CONTEXTO

function mostrarNumero()
{
    var numero = 1;
    var arr = new Array();

   for(i=0; i<3;i++, numero++)
   {
    arr.push(
        (function(numero){  //creo funcion anonima y la ejecuto, enviando el valor de numero
            return function(){
                console.log("numero: "+numero);
            }
        })(numero)
        );      
   }
    return arr;
}


var arr = mostrarNumero();
arr[0]();
arr[1]();
arr[2]();


// OBJECT NUMBER
//valueOf -> se utiliza para convertir string a int
var boolObject = new Boolean();  //por defecto es false
if(boolObject.valueOf())  
{
    console.log("boolObject es true");
}

 var boolPrimitivo = false
 if(boolPrimitivo)
 {
     console.log("boolPrimitivo es true");
 }

//OBJECT DATE. moment.js
//constructor recibe 7 parametros. MES es en base 0 => 0=enero, 1=febrero
// var fechaFija = new Date(anio, mes, dia, hora, minuto, segundo, milisegundo);
var hoy = new Date();
var anio = hoy.getFullYear();
var milisegundos = hoy.getTime();

//operaciones con fechas. puedo agregar un metodo en prototype:  Date.prototype.sumarDias = function(dias){...}
var result = hoy.setDate( hoy.getDate() + 5); //suma 5 dias
var resultAnio = hoy.setFullYear( hoy.getFullYear()+5); //suma 5 años

//expresion regular. ver: mozilla regular expresion
// ? => 0 o 1 vez
// + => 1 o mas veces
// * => 0 o mas veces
// a{2} => dos veces
// a{2,4} => de 2 a 4 veces la a
// a{2,} => a partir de 2
// \w{2} => separa de a 2 letras
// \d => digito
// | => or


//MANEJO DE ERRORES. se puede lanzar objetos, funciones o mensajes. se puede lanzar un codigo, y en el catch
//llamar a una funcion que solicite al servidor guardar en DB o enviar correo notificando

try {
   // throw new Error("mensaje de error");
   throw  { // objeto
        mensaje: "mensaje de error",
        codeerror: 1
   }
   // throw 1;
}
catch(e)
{
    console.error(e);
    //llamar funcion
}
finally{
    console.log("siempre se ejecuta");
}


//COOKIES: no colocar datos importantes. se debe escapar el valor de la cookie => utilizar funcion escape
// funcion escape reemplaza los caracteres especiales por tu codigo html. 
// todas las cookies se almacenan en document.cookie
//ejemplo sencillo:
//CREAR
document.cookie = "nombre=erica;"
document.cookie =  "apellido=" + escape("ach;a");

var fechaExpiracion = new Date();
fechaExpiracion.setMonth( fechaExpiracion.getMonth()+1); //expira el proximo mes
document.cookie ="conExpiracion=erica;"+ "expires = "+ fechaExpiracion.toUTCString() +";";
//LEER
var valorCookie = document.cookie;
//ELIMINAR  => se sobreescribe el nombre de la cookie y se setea una fecha de expiracion anterior a la actual.
var fechaEliminar = new Date();
fechaEliminar.setMonth( fechaEliminar.getMonth()-1);
document.cookie =  "apellido=x; expires ="+fechaEliminar.toUTCString();

//FUNCTION
//BIND: permite setear el contexto. Devuelve la funcion con el binding. Ejemplo:
function miFuncion()
{
    console.log(this.sumar());  //this se refiere al contexto variable (ya no al global)
}
var variable = {
    sumar: function(){ return 3;},
    mostrarApellido: function(){return this.apellidos; }
}

var miFuncionBinding = miFuncion.bind(variable);  // de esta forma puedo llamar a sumar
miFuncionBinding();

//CALL
// permite llamar la funcion enviando como parametros: el contexto y los parametros:
miFuncion.call(variable, "primerParam");

//APLY. Permite llamar la funcion enviado como parametros: el contexto y un array de parametros:
miFuncion.apply(variable, ["primerParametros"]);

//FUNCIONES PRESTADAS: permite usar funciones definidas por otras variables, utilizando el contexto enviado por parametro
var variable2 = {
    nombre: "erica",
    apellidos: "acha"
}
console.log("funcion prestada", variable.mostrarApellido.call(variable2));

//JSON
// JSON.stringify: convert object to JSON
var jsonObtenido = JSON.stringify(variable2);
console.log("json: ",jsonObtenido);
// convierte json a objeto
var objeto = JSON.parse(jsonObtenido);


//CICLO FOR para obtener propiedades (incluse prototype)

for(prop in variable2)
{
    console.log(prop,": ",variable2[prop]);
}

//hasOwnProperty: para excluir a las propiedad definidas en
//prototype. returna true o false. variable2.hasOwnProperty(nombrePropiedad)

//FOREACH
[1,2,3,4,5,6,7,8,9,10].forEach(function(valor){console.log(valor)})

//ROTULADOR DE CICLOS

for_principal:
for(var i=0;i<=3;i++){
    for(var j=0; j<5; j++){
        if(j==1)
        continue for_principal; //corta el ciclo actual y continua con el ciclo indicado por el rotulo
        break for_principal; //corta el ciclo indicado por el rotulador
    }

}


//FUNCIONES DE TIEMPO. IMPORTANTE: apuntan al contexto global windows. SOLUCION: salvar el contexto. utilizando self
// self = this
//dentro de interval utilizar self en lugar de this

//SETTIMEOUT: espera cierto tiempo antes de ejecutar una accion
setTimeout(function(){console.log("espero 1 segundo antes de ejectar");}, 1000);

//setInterval: ejecuta la funcion anonima cada determinado tiempo de forma indeterminada.

/*
var intervalo = setInterval(() => {
    console.log("ejecuto luego de 1 segundo");
    //se agrega un contador para causar el fin de la ejecucion
    segundos++;
    if(segundos==5)
        clearInterval(intervalo);

}, 1000);
*/

//obtener URI
console.log(window.location.search);

function getURI(name){
    return decodeURIComponent( new RegExp());
}

//ALERT: son bloqueantes
//consejo: utilizar sweet alert
var x;
(x? console.log("hola"): console.log("chau"))