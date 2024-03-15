import { PrismaClient, Tipo_objeto_aprendizagem } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.curso.create({
    data: {
      id: "bef836be-9698-441c-8147-2385eec1448f",
      nome: "Introdução a programação com Portugol Studio",
      descricao: "Iniciando a programação com Portugol Studio",
      unidade_ensino: {
        create: [
          {
            id: "ce165ca7-df7b-42fd-befc-663288eb8224",
            nome: "Unidade de Aprendizagem 1",
            codigo: 1,
            carga_horaria: 20.0,
            topico: {
              create: [
                {
                  id: "3f3a7aec-3583-4ab0-9b6a-9f83e09128cb",
                  nome: "Entrada e Saída",
                  qtd_pontos: 20,
                  objeto_aprendizagem: {
                    create: {
                      id: "be81f389-2b37-4463-a7c0-923e36f6b2d8",
                      descricao:
                        "Entrada/saída é um termo utilizado quase que exclusivamente no ramo da computação",
                      codigo_unidade_ensino: 1,
                      tipo_objeto_aprendizagem:
                        Tipo_objeto_aprendizagem.ESTATICO,
                      topicos: "teste",
                      exercicios: true,
                      taxonomia: 22,
                    },
                  },
                },
                {
                  id: "a4b5c2a6-4248-48a6-a360-7e843179974b",
                  nome: "Variaveis e Tipos",
                  qtd_pontos: 20,
                },
              ],
            },
          },
          {
            id: "54b9cb98-06bf-4064-ae12-5a6b5263775e",
            nome: "Unidade de Aprendizagem 2",
            codigo: 2,
            carga_horaria: 10.0,
            topico: {
              create: [
                {
                  id: "2a8f5207-d186-4648-a0d5-876b7fcf490f",
                  nome: "Funções",
                  qtd_pontos: 10,
                },
                {
                  id: "b468b6b3-cc41-4e5d-a568-b4b90a5018ec",
                  nome: "Operações Aritméticas",
                  qtd_pontos: 10,
                },
              ],
            },
          },
          {
            id: "40467109-6b9b-4c35-8b8d-f04f1896063c",
            nome: "Unidade de Aprendizagem 3",
            codigo: 3,
            carga_horaria: 20.0,
            topico: {
              create: [
                {
                  id: "ae0a8107-d6f9-4b5a-99c4-851b1ac99839",
                  nome: "Operações Condicionais",
                  qtd_pontos: 10,
                },
                {
                  id: "d239c6fe-8cc6-4297-81c8-6f7ae034bc1b",
                  nome: "Operações Lógicas",
                  qtd_pontos: 10,
                },
              ],
            },
          },
          {
            id: "ddccd95e-1f55-4c78-9022-70a60740c262",
            nome: "Unidade de Aprendizagem 4",
            codigo: 4,
            carga_horaria: 10.0,
            topico: {
              create: [
                {
                  id: "08477825-0d91-494f-a402-363c9a60b495",
                  nome: "Arrays",
                  qtd_pontos: 15,
                },
                {
                  id: "a1f5f167-a1b3-41e9-8708-7dacd85642ea",
                  nome: "Loops",
                  qtd_pontos: 15,
                },
              ],
            },
          },
          {
            id: "9e605a5e-5c93-4e11-a3b1-fd5e8645de16",
            nome: "Unidade de Aprendizagem 5",
            codigo: 5,
            carga_horaria: 20.0,
            topico: {
              create: [
                {
                  id: "175e7e68-cd0b-4f82-bf42-ea0a51ab7fb9",
                  nome: "Bibliotecas",
                  qtd_pontos: 30,
                },
              ],
            },
          },
        ],
      },
    },
  });
}

main()
  .then(async () => {
    console.log("Seed operation successful");
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error("Error during seeding:", e);
    await prisma.$disconnect();
    process.exit(1);
  });
