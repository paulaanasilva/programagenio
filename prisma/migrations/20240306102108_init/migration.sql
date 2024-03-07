-- CreateEnum
CREATE TYPE "Tipo_objeto_aprendizagem" AS ENUM ('ESTATICO', 'VISUAL', 'MEDIA', 'INTERATIVO', 'AVALIATIVO', 'AVANCADO');

-- CreateTable
CREATE TABLE "curso" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT,

    CONSTRAINT "curso_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "unidade_ensino" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT,
    "codigo" INTEGER NOT NULL,
    "carga_horaria" DOUBLE PRECISION NOT NULL,
    "id_curso" TEXT NOT NULL,

    CONSTRAINT "unidade_ensino_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "topico" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "qtd_pontos" INTEGER NOT NULL,
    "id_unidade_ensino" TEXT NOT NULL,

    CONSTRAINT "topico_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "objeto_aprendizagem" (
    "id" TEXT NOT NULL,
    "id_topico" TEXT NOT NULL,
    "descricao" TEXT,
    "codigo_unidade_ensino" INTEGER NOT NULL,
    "tipo_objeto_aprendizagem" "Tipo_objeto_aprendizagem" NOT NULL,
    "topicos" TEXT NOT NULL,
    "exercicios" BOOLEAN NOT NULL,
    "taxonomia" INTEGER NOT NULL,

    CONSTRAINT "objeto_aprendizagem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "aluno" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "matricula" INTEGER NOT NULL,
    "cpf" TEXT NOT NULL,
    "telefone" TEXT,

    CONSTRAINT "aluno_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "curso_aluno" (
    "id_aluno" TEXT NOT NULL,
    "id_curso" TEXT NOT NULL,

    CONSTRAINT "curso_aluno_pkey" PRIMARY KEY ("id_aluno","id_curso")
);

-- CreateTable
CREATE TABLE "aluno_historico_topico" (
    "id_aluno" TEXT NOT NULL,
    "id_topico" TEXT NOT NULL,

    CONSTRAINT "aluno_historico_topico_pkey" PRIMARY KEY ("id_aluno","id_topico")
);

-- CreateIndex
CREATE UNIQUE INDEX "unidade_ensino_codigo_key" ON "unidade_ensino"("codigo");

-- CreateIndex
CREATE UNIQUE INDEX "objeto_aprendizagem_codigo_unidade_ensino_key" ON "objeto_aprendizagem"("codigo_unidade_ensino");

-- CreateIndex
CREATE UNIQUE INDEX "aluno_matricula_key" ON "aluno"("matricula");

-- CreateIndex
CREATE UNIQUE INDEX "aluno_cpf_key" ON "aluno"("cpf");

-- AddForeignKey
ALTER TABLE "unidade_ensino" ADD CONSTRAINT "unidade_ensino_id_curso_fkey" FOREIGN KEY ("id_curso") REFERENCES "curso"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "topico" ADD CONSTRAINT "topico_id_unidade_ensino_fkey" FOREIGN KEY ("id_unidade_ensino") REFERENCES "unidade_ensino"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "objeto_aprendizagem" ADD CONSTRAINT "objeto_aprendizagem_id_topico_fkey" FOREIGN KEY ("id_topico") REFERENCES "topico"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "curso_aluno" ADD CONSTRAINT "curso_aluno_id_aluno_fkey" FOREIGN KEY ("id_aluno") REFERENCES "aluno"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "curso_aluno" ADD CONSTRAINT "curso_aluno_id_curso_fkey" FOREIGN KEY ("id_curso") REFERENCES "curso"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "aluno_historico_topico" ADD CONSTRAINT "aluno_historico_topico_id_aluno_fkey" FOREIGN KEY ("id_aluno") REFERENCES "aluno"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "aluno_historico_topico" ADD CONSTRAINT "aluno_historico_topico_id_topico_fkey" FOREIGN KEY ("id_topico") REFERENCES "topico"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
