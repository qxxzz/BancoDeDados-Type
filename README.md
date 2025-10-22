# Atividade-Type-BancoDeDados

**Autores:**

* João Pedro de Andrade Silva – 2508650
* Caio Zanffolim Cunha – 2509832

## 1. Introdução

Essa atividade foi solicitada como uma introdução da junção de **Banco de Dados** com **TypeScript** e como ela funciona, na atividade nos foi pedido a criação de uma **API** que calculasse a media dos alunos, muito similar a outra atividade ja feita. Mas neste caso devemos refazer e armazenar em um **banco de dados**.

---

## 2. Pré-requisitos

Antes de executar o sistema, é necessário ter instalado:

* **Docker Desktop**
* **pgAdmin 4**
* **Node.js**
* **VS Code** 
* **npm** 

---

## 3. Tecnologias Utilizadas

* **TypeScript**
* **Node.js**
* **Banco de Dados**
* **Docker**
* **pgAdmin 4**

---

## 4. Estrutura do Projeto

```bash
Atividade-Type-Media/
├─ dist/
│  ├─ ExercicioBancoDeDados.js           
├─ node_modules/         
├─ ExercicioBancoDeDados.ts              
├─ package-lock.json          
├─ package.json     
├─ READMe.md         
└─ tsconfig.json             
````

---

## 5. Funcionalidades do Sistema

* **Entrada:** nome, série, total de aulas, faltas e notas (trabalhos e provas).
* **Cálculos:** presença (%) e média de cada matéria.
* **Aprovação:** presença mínima de 75% e nota mínima 7 por matéria.
* **Saída:** boletim individual em TXT, com status aprovado/reprovado.
* **Armazenamento:** todos os alunos registrados no `alunos.csv`.

---

## 6. Comandos de Instalação e Configuração

```bash
# Instalar dependências
npm install

# Compilar o TypeScript para JavaScript
npm run build
```

---

## 7. package.json recomendado

```json
{
  "name": "escrever-no-banco",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "pg": "^8.11.3",
    "readline-sync": "^1.4.10"
  },
  "devDependencies": {
    "@types/pg": "^8.15.5",
    "@types/readline-sync": "^1.4.8",
    "typescript": "^5.9.3"
  }
}

```

---

## 8. tsconfig.json recomendado

```json
{
  "compilerOptions": {
    "target": "es2020",
    "module": "Node16",
    "moduleResolution": "Node16",
    "outDir": "./dist",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  }
}
```

---

## 9. Como Executar

No terminal, dentro da pasta raiz do projeto:

```bash
# Rodar o programa compilado
npm start
```

Ou diretamente com Node:

```bash
node dist/index.js
```

---


