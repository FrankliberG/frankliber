window.onload=manejarclick;
var cifra1="";
var control=true;

function manejarclick(){
	var uno=document.getElementById("uno");
	uno.addEventListener("click",function() {
								    clicboton("1");
								});
	var dos=document.getElementById("dos");
	dos.addEventListener("click",function() {
									clicboton("2");
								});
	var tres=document.getElementById("tres");
	tres.addEventListener("click",function() {
									clicboton("3");
								});
	var cuatro=document.getElementById("cuatro");
	cuatro.addEventListener("click",function() {
									clicboton("4");
								});
	var cinco=document.getElementById("cinco");
	cinco.addEventListener("click",function() {
									clicboton("5");
								});
	var seis=document.getElementById("seis");
	seis.addEventListener("click",function() {
									clicboton("6");
								});
	var siete=document.getElementById("siete");
	siete.addEventListener("click",function() {
									clicboton("7");
								});
	var ocho=document.getElementById("ocho");
	ocho.addEventListener("click",function() {
									clicboton("8");
								});
	var nueve=document.getElementById("nueve");
	nueve.addEventListener("click",function() {
									clicboton("9");
								});
	var cero=document.getElementById("cero");
	cero.addEventListener("click",function() {
									clicboton("0");
								});
	var sumar=document.getElementById("sumar");
	sumar.addEventListener("click",function() {
									clicboton("+");
								});
	var borrartodo=document.getElementById("borrartodo");
	borrartodo.addEventListener("click",borrart);

	var restar=document.getElementById("restar");
	restar.addEventListener("click",function() {
									clicboton("-");
								});
	var multi=document.getElementById("multi");
	multi.addEventListener("click",function() {
									clicboton("*");
								});
	var divi=document.getElementById("divi");
	divi.addEventListener("click",function() {
									clicboton("/");
								});
	var igual=document.getElementById("igual");
	igual.addEventListener("click",calcular);

	var men=document.getElementById("men");
	men.addEventListener("click",menos1);
}
function clicboton(e){
	cifra1+=e
	var panta=document.getElementById("respuesta");
	panta.textContent=cifra1;
}
function calcular(){
	var fin=eval(cifra1);
	var panta=document.getElementById("respuesta");
	panta.textContent=fin;
}
function borrart(){
	cifra1="";
	var panta=document.getElementById("respuesta");
	panta.textContent=cifra1;
}
function menos1(){
var pantalla=document.getElementById("respuesta");

var panta=cifra1.slice(0,-1);

cifra1=panta;

pantalla.textContent=cifra1;
}