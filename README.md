# Atividade-Type-BancoDeDados

**Autores**

- João Pedro de Andrade Silva – 2508650  
- Caio Zanffolim Cunha – 2509832

---

## 1. Introdução

Esta atividade foi solicitada como uma introdução à junção de **Banco de Dados** com **TypeScript**. Na atividade foi pedido a criação de uma **API/Aplicação** que calculasse a média das notas por matéria para alunos e persistisse esses dados em um banco PostgreSQL (rodando via Docker).

---

## 2. Pré-requisitos

Antes de executar o sistema, é necessário ter instalado:

- Docker Desktop  
- pgAdmin 4 (opcional, mas recomendado para visualização do banco)  
- Node.js  
- VS Code (ou outro editor de código)  
- npm

---

## 3. Tecnologias Utilizadas

- TypeScript  
- Node.js  
- PostgreSQL (via Docker)  
- Docker  
- pgAdmin 4  
- readline-sync (para interface via terminal)

---

## 4. Estrutura do Projeto

Estrutura esperada do projeto:

```bash
Atividade-Type-Media/
├─ dist/
│  ├─ ExercicioBancoDeDados.js
├─ node_modules/
├─ ExercicioBancoDeDados.ts
├─ package-lock.json
├─ package.json
├─ README.md
└─ tsconfig.json
```

---

## 5. Funcionalidades do Sistema

- Cadastro de alunos com nome, idade e série.  
- Inserção de 8 notas para cada uma das 3 matérias: Matemática, Geografia e História.  
- Cálculo da média das notas de cada matéria.  
- Armazenamento dos dados no banco PostgreSQL via container Docker.  
- Interface via terminal para entrada interativa dos dados.  
- Possibilidade de inserir notas para até 3 matérias diferentes para um mesmo aluno.

---

## 6. Comandos de Instalação e Configuração

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git](https://github.com/qxxzz/BancoDeDados-Type
```

2. Entre na pasta do projeto:

```bash
cd Atividade-Type-Media
```

3. Instale as dependências:

```bash
npm install
```

4. Compile o TypeScript:

```bash
npx tsc
```

5. Configure o banco de dados PostgreSQL (utilizando Docker e pgAdmin) conforme o script SQL fornecido na seção "Estrutura do Banco de Dados".

6. Execute a aplicação:

```bash
node dist/ExercicioBancoDeDados.js
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
    "start": "node dist/ExercicioBancoDeDados.js",
    "build": "tsc"
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

Após configurar e rodar o container do PostgreSQL, siga os passos abaixo:

1. Compile o projeto TypeScript:

```bash
npx tsc
```

2. Execute o arquivo JavaScript gerado:

```bash
node dist/ExercicioBancoDeDados.js
```

3. Siga as instruções do terminal para:

- Inserir nome, idade e série do aluno.  
- Escolher a matéria para inserir notas (Matemática, Geografia ou História).  
- Informar as 8 notas da matéria escolhida.  
- Repetir para as demais matérias se desejar.  

Ao final, o programa calcula e salva a média das notas para cada matéria no banco.

---

## 10. Estrutura do Banco de Dados

Script SQL para criação das tabelas e inserção das matérias:

```sql
CREATE TABLE public.pessoas (
    codigo SERIAL PRIMARY KEY,
    nome VARCHAR(100),
    serie VARCHAR(10),
    idade INTEGER
);

CREATE TABLE public.materia (
    id SERIAL PRIMARY KEY,
    nome_materia VARCHAR(50) NOT NULL
);

INSERT INTO public.materia (nome_materia)
VALUES ('Matematica'), ('Geografia'), ('Historia');

CREATE TABLE public.notas (
    id SERIAL PRIMARY KEY,
    codigo_aluno INTEGER REFERENCES public.pessoas(codigo),
    id_materia INTEGER REFERENCES public.materia(id),
    nota1 NUMERIC(4,2),
    nota2 NUMERIC(4,2),
    nota3 NUMERIC(4,2),
    nota4 NUMERIC(4,2),
    nota5 NUMERIC(4,2),
    nota6 NUMERIC(4,2),
    nota7 NUMERIC(4,2),
    nota8 NUMERIC(4,2),
    media NUMERIC(4,2)
);
```

Observações:

- Ajuste os nomes das tabelas/colunas caso o código TypeScript espere outros nomes.  
- Certifique-se de criar o banco e o usuário no PostgreSQL e configurar as variáveis de conexão no seu código (host, port, user, password, database).

---




