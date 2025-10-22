import { Pool } from 'pg';
import readlineSync from 'readline-sync';

type Materia = { id: number; nome_materia: string };

const dbConfig = {
  user: 'aluno',
  host: 'localhost',
  database: 'db_profedu',
  password: '102030',
  port: 5432,
};

const pool = new Pool(dbConfig);

function perguntarNota(numero: number): number {
  while (true) {
    const nota = readlineSync.questionFloat(`Nota ${numero} (0 a 10): `);
    if (nota >= 0 && nota <= 10) {
      return nota;
    } else {
      console.log("Nota invalida! Digite um numero entre 0 e 10.");
    }
  }
}

async function inserirDados(): Promise<void> {
  console.log("\n--- Cadastro de Novo Aluno ---");

  const nome: string = readlineSync.question('Digite o nome do aluno: ');
  const idade: number = readlineSync.questionInt('Digite a idade: ');
  const serie: string = readlineSync.question('Digite a serie (ex: 5 Ano): ');

  if (!nome || !serie || isNaN(idade)) {
    console.error("Todos os campos sao obrigatorios!");
    await pool.end();
    return;
  }

  const client = await pool.connect();

  try {
    const { rows: codigoRows } = await client.query(`SELECT MAX(codigo) AS max FROM public.pessoas`);
    const novoCodigo = (codigoRows[0].max || 0) + 1;

    await client.query(
      `INSERT INTO public.pessoas (codigo, nome, serie, idade) VALUES ($1, $2, $3, $4)`,
      [novoCodigo, nome, serie, idade]
    );

    const { rows: materias } = await client.query<Materia>(`
      SELECT id, nome_materia 
      FROM public.materia 
      WHERE nome_materia IN ('Matematica', 'Geografia', 'Historia')
    `);

    let materiasDisponiveis = [...materias];
    const materiasInseridas: Materia[] = [];

    while (materiasDisponiveis.length > 0) {
      const opcoes = materiasDisponiveis.map(m => m.nome_materia);
      const index = readlineSync.keyInSelect(opcoes, 'Escolha a materia para inserir notas (ou Cancelar para sair):');

      if (index === -1) break;

      const materiaSelecionada = materiasDisponiveis[index];

      console.log(`\nInforme as 8 notas para a materia: ${materiaSelecionada.nome_materia}`);
      const notas: number[] = [];
      for (let i = 1; i <= 8; i++) {
        const nota = perguntarNota(i);
        notas.push(nota);
      }

      const media = notas.reduce((acc, n) => acc + n, 0) / notas.length;

      await client.query(
        `INSERT INTO public.notas (
          codigo_aluno, id_materia,
          nota1, nota2, nota3, nota4,
          nota5, nota6, nota7, nota8,
          media
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`,
        [novoCodigo, materiaSelecionada.id, ...notas, media]
      );

      console.log(`Notas da materia ${materiaSelecionada.nome_materia} cadastradas com media ${media.toFixed(2)}.`);
      console.log(`Notas: ${notas.join(', ')}`);

      materiasDisponiveis.splice(index, 1);
      materiasInseridas.push(materiaSelecionada);

      if (materiasDisponiveis.length > 0) {
        const continuar = readlineSync.keyInYNStrict('Deseja inserir notas para outra materia?');
        if (!continuar) break;
      }
    }

    if (materiasInseridas.length === 0) {
      console.log('Nenhuma materia foi cadastrada para o aluno.');
    } else {
      console.log(`\nCadastro finalizado! Materias cadastradas: ${materiasInseridas.map(m => m.nome_materia).join(', ')}`);
    }
  } catch (error: any) {
    console.error('Erro:', error.message);
  } finally {
    client.release();
    await pool.end();
    console.log('Conexao com o banco encerrada.');
  }
}

inserirDados();
