import { NextApiRequest, NextApiResponse } from "next";
import pkg from "@prisma/client";

const { PrismaClient } = pkg;

const prisma = new PrismaClient();

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    if (req.method === 'GET') {
        try {
            const disciplinas = await prisma.disciplina.findMany({});
            res.status(200).json(disciplinas);
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    } else if (req.method === 'POST') {
        try {
            const { nome_disciplina, cod_disciplina, descricao, carga_horaria } = req.body;
            const disciplina = await prisma.disciplina.create({
                data: {
                    nome_disciplina,
                    cod_disciplina,
                    descricao,
                    carga_horaria,
                },
            });
            res.status(201).json(disciplina);
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}