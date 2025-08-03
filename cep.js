#!/usr/bin/env node
import fetch from 'node-fetch';
import chalk from 'chalk';

const args = process.argv.slice(2);
const cep = args[0];

if (!cep || !/^\d{8}$/.test(cep)) {
  console.log(chalk.red('❌ Digite um CEP válido com 8 dígitos. Ex: 01001000'));
  process.exit(1);
}

const buscarEndereco = async (cep) => {
  try {
    const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const dados = await resposta.json();

    if (dados.erro) {
      console.log(chalk.yellow('⚠️ CEP não encontrado.'));
      return;
    }

    console.log(chalk.green.bold('\n📍 Endereço encontrado:'));
    console.log(`Logradouro: ${dados.logradouro}`);
    console.log(`Bairro: ${dados.bairro}`);
    console.log(`Cidade: ${dados.localidade}`);
    console.log(`Estado: ${dados.uf}`);
    console.log(`DDD: ${dados.ddd}`);
  } catch (erro) {
    console.error(chalk.red.bold('❌ Erro ao buscar o CEP:', erro.message));
  }
};

buscarEndereco(cep);

