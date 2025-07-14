import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { params } = req.query;

  // Se params não existir, retorna 400
  if (!params || !Array.isArray(params) || params.length === 0) {
    res.status(400).json({ error: "Status code not provided" });
    return;
  }

  const code = params[0]; // o primeiro elemento será o código HTTP
  const statusCode = parseInt(code, 10) || 200;

  res.status(statusCode).json({ code: statusCode });
}
