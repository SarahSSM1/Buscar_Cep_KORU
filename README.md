# 🔎 Buscador de CEP

Este é um projeto simples de **Command-Line Interface (CLI)** construído com **Node.js**.  
A ferramenta foi desenvolvida para buscar e exibir dados de endereço a partir de um **CEP**, utilizando a API pública do **ViaCEP**.

O objetivo principal deste projeto é demonstrar:

- Como criar uma ferramenta de linha de comando
- Interagir com uma API externa de forma assíncrona
- Formatar a saída para o terminal de maneira agradável

---

## 🚀 Tecnologias Utilizadas

- **Node.js**: Ambiente de execução do JavaScript
- **node-fetch**: Biblioteca para fazer requisições HTTP
- **chalk**: Biblioteca para adicionar cores ao texto do terminal

---

## 📋 Como Executar

Para rodar esta CLI, siga os passos abaixo no seu terminal:

### 1. Clone o Repositório

```bash
git clone https://github.com/seu-usuario/buscacep.git
cd buscacep 
```

---

### 2. Usar a Ferramenta

Após a instalação, você pode executar o script de duas maneiras, passando um CEP de 8 dígitos como argumento.

**Opção 1: Usando npx (Recomendado)**

```bash
npx buscacep 01001000
```

**Opção 2: Executando o arquivo diretamente**

```bash
node cep.js 01001000
```

Substitua 01001000 por qualquer CEP válido que você deseja consultar.
