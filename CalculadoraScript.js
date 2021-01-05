function potencia(){
	let a = document.getElementById("a");
	let b = document.getElementById("b");
	let resultado = document.getElementById("resultado");

	let va = parseInt(a.value);
	let vb = parseInt(b.value);
	let vr = Math.pow(va,vb);

	resultado.textContent = vr;
}