"use strict";
exports.__esModule = true;
var soma_1 = require("./soma");
var divisao_1 = require("./divisao");
var multiplicar_1 = require("./multiplicar");
var subtrair_1 = require("./subtrair");
var dados_1 = require("./dados");
var dados = dados_1.coletaDados(3);
dados = soma_1.soma(dados, 5);
dados = subtrair_1.subtrair(dados, 2);
dados = multiplicar_1.multiplicar(dados, 3);
dados = divisao_1.divisao(dados, 2);
console.log(dados);