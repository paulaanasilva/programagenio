// pages/api/sensores/[id].ts
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient, Sensores } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const sensorId = parseInt(req.query.id as string);

  switch (req.method) {
    case "GET":
      const sensor: Sensores | null = await prisma.sensores.findUnique({
        where: { id: sensorId },
      });
      res.json(sensor);
      break;
    case "PUT":
      const { filled, pref } = req.body;
      const updatedSensor: Sensores = await prisma.sensores.update({
        where: { id: sensorId },
        data: { filled, pref },
      });
      res.json(updatedSensor);
      break;
    case "DELETE":
      const deletedSensor: Sensores = await prisma.sensores.delete({
        where: { id: sensorId },
      });
      res.json(deletedSensor);
      break;
    default:
      res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
