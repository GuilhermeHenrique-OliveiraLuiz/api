import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { code } = req.query;

  const statusCode = parseInt(code as string, 10) || 200;

  res.status(statusCode).json({ code: statusCode });
}
