import { NextApiRequest, NextApiResponse } from "next";
import pkg from "@prisma/client";
import { disciplina } from "@prisma/client";
const { PrismaClient } = pkg;

const prisma = new PrismaClient();


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;

    if (req.method === "GET") {
        console.log("api", id);
        if (typeof id !== "string") {
            res.status(400).json({ message: "Invalid id" });
        }

        const disciplina = await prisma.disciplina.findUnique({
            where: { id_disciplina: id as string },
        });

        if (disciplina) {
            res.status(200).json(disciplina);
        } else {
            res.status(404).json({ message: "Curso not found" });
        }
    } else {
        res.status(405).json({ message: "Method not allowed" });
    }
}



