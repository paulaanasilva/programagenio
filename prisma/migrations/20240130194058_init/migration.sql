-- CreateTable
CREATE TABLE "curso" (
    "id_curso" TEXT NOT NULL,
    "nome_curso" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "curso_pkey" PRIMARY KEY ("id_curso")
);

-- CreateTable
CREATE TABLE "aluno" (
    "id_aluno" TEXT NOT NULL,
    "nome_aluno" TEXT NOT NULL,
    "matricula" INTEGER NOT NULL,
    "cpf" TEXT NOT NULL,
    "telefone" TEXT,

    CONSTRAINT "aluno_pkey" PRIMARY KEY ("id_aluno")
);

-- CreateTable
CREATE TABLE "cursos_alunos" (
    "id_aluno" TEXT NOT NULL,
    "id_curso" TEXT NOT NULL,

    CONSTRAINT "cursos_alunos_pkey" PRIMARY KEY ("id_aluno","id_curso")
);

-- CreateTable
CREATE TABLE "historico" (
    "id_historico" TEXT NOT NULL,
    "notas" INTEGER,
    "media" DOUBLE PRECISION,

    CONSTRAINT "historico_pkey" PRIMARY KEY ("id_historico")
);

-- CreateTable
CREATE TABLE "disciplina" (
    "id_disciplina" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "carga_horaria" DOUBLE PRECISION NOT NULL,
    "nome_disciplina" TEXT NOT NULL,
    "cod_disciplina" INTEGER NOT NULL,

    CONSTRAINT "disciplina_pkey" PRIMARY KEY ("id_disciplina")
);

-- CreateTable
CREATE TABLE "conteudo_disciplina" (
    "id_conteudo_disciplina" TEXT NOT NULL,
    "id_disciplina" TEXT NOT NULL,
    "conteudo" TEXT NOT NULL,

    CONSTRAINT "conteudo_disciplina_pkey" PRIMARY KEY ("id_conteudo_disciplina")
);

-- CreateTable
CREATE TABLE "disciplina_dependente" (
    "id_disciplina_dependente" TEXT NOT NULL,
    "id_disciplina" TEXT NOT NULL,

    CONSTRAINT "disciplina_dependente_pkey" PRIMARY KEY ("id_disciplina_dependente")
);

-- CreateTable
CREATE TABLE "disciplina_curso" (
    "id_disciplina" TEXT NOT NULL,
    "id_curso" TEXT NOT NULL,

    CONSTRAINT "disciplina_curso_pkey" PRIMARY KEY ("id_disciplina","id_curso")
);

-- CreateTable
CREATE TABLE "disciplina_historico" (
    "id_disciplina" TEXT NOT NULL,
    "id_historico" TEXT NOT NULL,

    CONSTRAINT "disciplina_historico_pkey" PRIMARY KEY ("id_disciplina","id_historico")
);

-- CreateTable
CREATE TABLE "disciplina_aluno" (
    "id_disciplina" TEXT NOT NULL,
    "id_aluno" TEXT NOT NULL,

    CONSTRAINT "disciplina_aluno_pkey" PRIMARY KEY ("id_disciplina","id_aluno")
);

-- CreateIndex
CREATE UNIQUE INDEX "aluno_matricula_key" ON "aluno"("matricula");

-- CreateIndex
CREATE UNIQUE INDEX "aluno_cpf_key" ON "aluno"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "disciplina_cod_disciplina_key" ON "disciplina"("cod_disciplina");

-- AddForeignKey
ALTER TABLE "cursos_alunos" ADD CONSTRAINT "cursos_alunos_id_aluno_fkey" FOREIGN KEY ("id_aluno") REFERENCES "aluno"("id_aluno") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cursos_alunos" ADD CONSTRAINT "cursos_alunos_id_curso_fkey" FOREIGN KEY ("id_curso") REFERENCES "curso"("id_curso") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "conteudo_disciplina" ADD CONSTRAINT "conteudo_disciplina_id_disciplina_fkey" FOREIGN KEY ("id_disciplina") REFERENCES "disciplina"("id_disciplina") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "disciplina_dependente" ADD CONSTRAINT "disciplina_dependente_id_disciplina_fkey" FOREIGN KEY ("id_disciplina") REFERENCES "disciplina"("id_disciplina") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "disciplina_curso" ADD CONSTRAINT "disciplina_curso_id_disciplina_fkey" FOREIGN KEY ("id_disciplina") REFERENCES "disciplina"("id_disciplina") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "disciplina_curso" ADD CONSTRAINT "disciplina_curso_id_curso_fkey" FOREIGN KEY ("id_curso") REFERENCES "curso"("id_curso") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "disciplina_historico" ADD CONSTRAINT "disciplina_historico_id_disciplina_fkey" FOREIGN KEY ("id_disciplina") REFERENCES "disciplina"("id_disciplina") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "disciplina_historico" ADD CONSTRAINT "disciplina_historico_id_historico_fkey" FOREIGN KEY ("id_historico") REFERENCES "historico"("id_historico") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "disciplina_aluno" ADD CONSTRAINT "disciplina_aluno_id_disciplina_fkey" FOREIGN KEY ("id_disciplina") REFERENCES "disciplina"("id_disciplina") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "disciplina_aluno" ADD CONSTRAINT "disciplina_aluno_id_aluno_fkey" FOREIGN KEY ("id_aluno") REFERENCES "aluno"("id_aluno") ON DELETE RESTRICT ON UPDATE CASCADE;
