<script type="text/javascript">
function calcula_imc(){
var altura = document.imcForm.altura.value;
var peso = document.imcForm.peso.value;

var quadrado = (altura * altura);

var calculo = (peso/quadrado);

if(calculo<18.5){
alert("Peso abaixo do normal: " + calculo);
}
else if(calculo>=18.5 && calculo<24.9){
alert("Peso ideal: " + calculo);
}

else if(calculo>=25 && calculo<29.9) {
alert("Acima do peso: " + calculo);
}
else if(calculo>=30 && calculo<34.9) {
alert("Obesidade grau 1: " + calculo);
}
else if(calculo>=35 && calculo<40) {
alert("Obesidade grau 2: " + calculo);
}
else if (calculo>40)
alert("Obesidade grau 3: " + calculo);
}

</script>

<title>Documento sem título</title>
</head>

<body>

<form name="imcForm" id="imcForm" action="#">

<p>
Altura<br />
<input type="text" id="altura" name="altura" />
</p>

<p>Peso <br />
<input type="text" id="peso" name="peso" />
</p>

<p>
<label>
<input type="radio" name="sexo" value="opção" id="sexo_0" />
Masculino</label>
<br />
<label>
<input type="radio" name="sexo" value="opção" id="sexo_1" />
Feminino</label>
</p>
<p><input name="Enviar" type="submit" value="Calcular" onclick="calcula_imc()" />
</p>
</form>