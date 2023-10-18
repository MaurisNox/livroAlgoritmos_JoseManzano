///Exercicio de lógica

/// Exercicio 03 Letra A - Ler uma temperatura em graus Celsius e apresentá-la convertida em graus Fahrenheit. 
temperaturaEmCelcius = 40;
temperaturaEmFahrenheit = (9 * temperaturaEmCelcius + 160) / 5;
console.log(temperaturaEmFahrenheit);


///Exercicio 03 Letra B - Ler uma temperatura em graus Fahrenheit e apresentá-la convertida em graus Celsius.
temperaturaEmFahrenheit = 40;
temperaturaEmCelcius = ((temperaturaEmFahrenheit - 32) * 5) / 9;
console.log(temperaturaEmCelcius);


///Exercicio 03 Letra C - Calcular e apresentar o valor do volume de uma lata de óleo.
volume = 3.14159;
altura = 2000;
raio = 50
ValorDoVolume = (3.14159 * 50 ^ 2 * 2000);
console.log(ValorDoVolume);


///Exercicio 03 Letra D - Efetuar o cálculo da quantidade de litros de combustível gasta em uma viagem, utilizando um automóvel que faz 12 quilômetros por litro.
tempo = 24;
velocidadeMedia = 100;

distanciaPercorrida = (tempo * velocidadeMedia);
litrosUsados = (distanciaPercorrida / 12);

console.log(distanciaPercorrida);
console.log(litrosUsados);


///Exercicio 03 Letra E - Efetuar o cálculo e apresentar o valor de uma prestação de um bem em atraso.
valorOriginal = 400;
taxaDeJuros = 10;
tempoDeAtraso = 10

valorPrestacaoAtraso = valorOriginal + (valorOriginal * (taxaDeJuros / 100) * tempoDeAtraso)
console.log(valorPrestacaoAtraso);


///Exercicio 03 Letra F - Ler dois valores para as variáveis A e B e efetuar a troca dos valores de forma que a variável A passe a possuir o valor da variável B e a variável B passe a possuir o valor da variável A. Apresentar os valores após a efetivação do processamento da troca.
A = 5
B = 8

temp = A;
A = B;
B = temp;

console.log(temp + A);
console.log(temp + B);

///Exercicio 03 Letra G - Ler quatro valores numéricos inteiros e apresentar o resultado das adições e das multiplicações utilizando o mesmo raciocínio aplicado quando do uso de propriedades distributivas para a máxima combinação possível entre as quatro variáveis.
A = 5
B = 10
C = 15
D = 20

console.log("Combinações de Adição:");
console.log("A + B = " + (A + B));
console.log("A + C = " + (A + C));
console.log("A + D = " + (A + D));
console.log("B + C = " + (B + C));
console.log("B + D = " + (B + D));
console.log("C + D = " + (C + D));

console.log("Combinações de Multiplicação:");
console.log("A * B = " + (A * B));
console.log("A * C = " + (A * C));
console.log("A * D = " + (A * D));
console.log("B * C = " + (B * C));
console.log("B * D = " + (B * D));
console.log("C * D = " + (C * D));


///Exercicio 03 Letra H - Elaborar um programa que calcule e apresente o valor do volume de uma caixa retangular

comprimento = 100;
largura = 50;
altura = 80;

volume = (comprimento * largura * altura)

console.log(volume)


///Exercicio 03 Letra I - Efetuar a leitura de um valor numérico inteiro e apresentar o resultado do valor lido elevado ao quadrado.

valor = 5;

resultado = valor * valor;

console.log(`O valor ${valor} elevado ao quadrado é igual a: ${resultado}`);


///Exercicio 03 Letra J - Ler dois valores numéricos inteiros (representados pelas variáveis A e B) e apresentar o resultado do quadrado da diferença do primeiro valor (variável A) em relação ao segundo valor (variável B) .
A = 10;
B = 3;

resultado = (A - B) ** 2;

console.log(`O quadrado da diferença entre A e B é igual a: ${resultado}`);

///Exercicio 03 Letra K - Elaborar um programa que apresente o valor da conversão em real (R$) de um valor lido em dólar (US$). O programa deve solicitar o valor da cotação do dólar e também a quantidade de dólares disponível com o usuário. 
quantidadeDolares = 1500;
CotacaoDolar = 5.05, 1;

valorEmReais = quantidadeDolares * CotacaoDolar;

console.log(`O valor de ${quantidadeDolares} dólares é igual a R$${valorEmReais}`);


///Exercicio 03 Letra L - Elaborar um programa que apresente o valor da conversão em dólar (US$) de um valor lido em real
quantidadeEmReais = 1500;
CotacaoDolar = 5.05;

valorEmDolares = quantidadeEmReais * CotacaoDolar;

console.log(`O valor de R$${quantidadeEmReais}  é igual a US$${valorEmDolares} dolares`);

///Exercicio 03 Letra M - Construir um programa que leia três valores numéricos inteiros (representados pelas variáveis A, B e C) e apresente como resultado final o valor da soma dos quadrados dos três valores lidos. 
A = 2
B = 4
C = 6

quadradoA = A * A;
quadradoB = B * B;
quadradoC = C * C;

somaDosQuadrados = quadradoA + quadradoB + quadradoC;

console.log(`A soma dos quadrados de ${"A"}, ${"B"} e ${"C"} é igual a: ${somaDosQuadrados}`);

///Exercicio 03 Letra N - Construir um programa que leia três valores numéricos inteiros (representados pelas variáveis A, B e C) e apresente como resultado final o valor do quadrado da soma dos três valores lidos.

A = 15;
B = 20;
C = 25;

soma = A + B + C;

quadradoDaSoma = soma * soma;

console.log(`O quadrado da soma de ${A}, ${B} e ${C} é igual a: ${quadradoDaSoma}`);


///Exercicio 03 Letra O - Elaborar um programa que leia quatro valores numéricos inteiros (variáveis A, B, C e D). Ao final o programa deve apresentar o resultado do produto (variável P) do primeiro com o terceiro valor, e o resultado da soma (variável S) do segundo com o quarto valor.

A = 1;
B = 2;
C = 3;
D = 4;

P = A * C;
S = B + D;

console.log(`O produto de ${A} e ${C} é igual a: ${P}`);
console.log(`A soma de ${B} e ${D} é igual a: ${S}`);


///Exercicio 03 Letra P - Elaborar um programa que leia o valor numérico correspondente ao salário mensal (variável SM) de um trabalhador e também faça a leitura do valor do percentual de reajuste (variável PR) a ser atribuído. Apresentar o valor do novo salário (variável NS).

SM = 4000;
PR = 50;

reajuste = (SM * PR) / 100;
NS = SM + reajuste;

console.log(`O novo salário com ${PR}% de reajuste é igual a R$${NS.toFixed(2)}`);


///Exercicio 03 Letra Q - Elaborar um programa que calcule e apresente o valor do resultado da área de uma circunferência (variável A)

R = 8000;

A = Math.PI * Math.pow(R, 2);

console.log(`A área da circunferência com raio ${R} é igual a: ${A.toFixed(2)}`);


///Exercicio 03 Letra R - Em uma eleição sindical concorreram ao cargo de presidente três candidatos (representados pelas variáveis A, B e C).
votosA = 200;
votosB = 500;
votosC = 900;


votosNulos = 50;
votosEmBranco = 600;

totalEleitores = votosA + votosB + votosC + votosNulos + votosEmBranco;

percentualVotosValidos = ((votosA + votosB + votosC) / totalEleitores) * 100;
percentualVotosA = (votosA / totalEleitores) * 100;
percentualVotosB = (votosB / totalEleitores) * 100;
percentualVotosC = (votosC / totalEleitores) * 100;
percentualVotosNulos = (votosNulos / totalEleitores) * 100;
percentualVotosEmBranco = (votosEmBranco / totalEleitores) * 100;

console.log(`Número total de eleitores: ${totalEleitores}`);
console.log(`Percentual de votos válidos: ${percentualVotosValidos.toFixed(2)}%`);
console.log(`Percentual de votos do candidato A: ${percentualVotosA.toFixed(2)}%`);
console.log(`Percentual de votos do candidato B: ${percentualVotosB.toFixed(2)}%`);
console.log(`Percentual de votos do candidato C: ${percentualVotosC.toFixed(2)}%`);
console.log(`Percentual de votos nulos: ${percentualVotosNulos.toFixed(2)}%`);
console.log(`Percentual de votos em branco: ${percentualVotosEmBranco.toFixed(2)}%`);

///Exercicio 03 Letra S - Elaborar um programa que leia dois valores numéricos reais desconhecidos representados pelas variáveis A e B. Calcular e apresentar os resultados das quatro operações aritméticas básicas.
A = 45;
B = 89;

soma = A + B;
subtracao = A - B;
multiplicacao = A * B;
divisao = A / B;

console.log(`A + B = ${soma}`);
console.log(`A - B = ${subtracao}`);
console.log(`A * B = ${multiplicacao}`);
console.log(`A / B = ${divisao}`);


/// Exercicio 03 Letra T - Construir um programa que calcule e apresente em metros por segundo o valor da velocidade de um projétil que percorre uma distância em quilômetros a um espaço de tempo em minutos. Utilize a fórmula VELOCIDADE+- (DISTÂNCIA* 1000) /(TEMPO* 60).

// Solicita ao usuário que insira a distância em quilômetros e o tempo em minutos
distanciaEmKm = 500;
tempoEmMinutos = 60;

distanciaEmMetros = distanciaEmKm * 1000;
tempoEmSegundos = tempoEmMinutos * 60;

velocidade = distanciaEmMetros / tempoEmSegundos;

console.log(`A velocidade do projétil é de ${velocidade.toFixed(2)} metros por segundo.`);

/// Exercicio 03 Letra U - Elaborar um programa de computador que calcule e apresente o valor do volume de uma esfera.Utilize a fórmula VOLUME +- (4 / 3) * 3.14159 * (RAIO j 3).

// Solicita ao usuário que insira o raio da esfera
raio = 3;

volume = (4 / 3) * 3.14159 * Math.pow(raio, 3);

console.log(`O volume da esfera é de aproximadamente ${volume.toFixed(2)} unidades cúbicas.`);


/// Exercicio 03 Letra V - Elaborar um programa que leia dois valores numéricos inteiros, os quais devem representar a base e o expoente de uma potência, calcule a potência e apresente o resultado obtido.

base = 9;
expoente = 2;

potencia = Math.pow(base, expoente);

console.log(`${base} elevado a ${expoente} é igual a ${potencia}`);


/// Exercicio 03 Letra W - Elaborar um programa que leia uma medida em pés e apresente o seu valor convertido em metros, lembrando que um pé mede 0,3048 metro, ou seja, um pé é igual a 30,48 centímetros.

medidaEmPes = 15;

medidaEmMetros = medidaEmPes * 0.3048;

console.log(`${medidaEmPes} pés equivalem a ${medidaEmMetros} metros.`);

/// Exercicio 03 Letra X - Elaborar um programa que calcule uma raiz de base qualquer com índice qualquer.

base = 80;
indice = 2;

resultado = Math.pow(base, 1 / indice);

console.log(`A raiz de ${base} com índice ${indice} é aproximadamente igual a ${resultado.toFixed(2)}`);


/// Exercicio 03 Letra Y - Construir um programa que leia um valor numérico inteiro e apresente como resultado os seus valores sucessor e antecessor.

numero = 679;

sucessor = numero + 1;
antecessor = numero - 1;

console.log(`O sucessor de ${numero} é ${sucessor} e o antecessor é ${antecessor}.`);

/// Exercicio 03 Letra Z - Ler dois valores numéricos inteiros (representados pelas variáveis A e B) e apresentar o resultado do quadrado da divisão do primeiro valor (variável A) em relação ao segundo valor (variável B) .

A = 9;
B = 9;
resultado = Math.pow(A / B, 2);

console.log(`O quadrado da divisão de ${A} por ${B} é igual a ${resultado}`);

























