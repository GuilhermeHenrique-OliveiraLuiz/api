import { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import fs from "fs";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Caminho fixo do PDF
  const filePath = path.join(process.cwd(), "public", "meuarquivo.pdf");

  try {
    const fileBuffer = fs.readFileSync(filePath);

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=meuarquivo.pdf");
    res.send(fileBuffer);
  } catch (error) {
    res.status(404).json({ error: "PDF não encontrado" });
  }
}
