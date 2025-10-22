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
├─ README.md         
└─ tsconfig.json             
5. Funcionalidades do Sistema
Cadastro de alunos com nome, idade e série.

Inserção das 8 notas para cada uma das 3 matérias: Matemática, Geografia e História.

Cálculo da média das notas de cada matéria.

Armazenamento dos dados no banco PostgreSQL via container Docker.

Interface via terminal para entrada interativa dos dados.

Possibilidade de inserir notas para até 3 matérias diferentes para um mesmo aluno.

6. Comandos de Instalação e Configuração
Clone o repositório:

bash
Copiar código
git clone https://github.com/seu-usuario/seu-repositorio.git
Entre na pasta do projeto:

bash
Copiar código
cd Atividade-Type-Media
Instale as dependências:

bash
Copiar código
npm install
Compile o TypeScript:

bash
Copiar código
npx tsc
Configure o banco de dados PostgreSQL (utilizando Docker e pgAdmin) conforme o script SQL fornecido.

Execute a aplicação:

bash
Copiar código
node dist/ExercicioBancoDeDados.js
7. package.json recomendado
json
Copiar código
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
8. tsconfig.json recomendado
json
Copiar código
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
9. Como Executar
Após configurar e rodar o container do PostgreSQL, siga os passos abaixo:

Compile o projeto TypeScript:

bash
Copiar código
npx tsc
Execute o arquivo JavaScript gerado:

bash
Copiar código
node dist/ExercicioBancoDeDados.js
Siga as instruções do terminal para:

Inserir nome, idade e série do aluno.

Escolher a matéria para inserir notas (Matemática, Geografia ou História).

Informar as 8 notas da matéria escolhida.

Repetir para as demais matérias se desejar.

Ao final, o programa calcula e salva a média das notas para cada matéria no banco.

10. Estrutura do Banco de Dados
Criação das tabelas
sql
Copiar código
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
11. Configuração do Git (Opcional)
Configure seu usuário git com:

bash
Copiar código
git config --global user.name "Seu Nome"
git config --global user.email "seuemail@example.com"
Para subir o código ao GitHub:

bash
Copiar código
git add .
git commit -m "Minha mensagem de commit"
git push origin main
12. Contribuição
Contribuições são bem-vindas! Abra uma issue ou faça um pull request.

13. Licença
Este projeto está licenciado sob a MIT License.
