import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { params } = req.query;

  if (!params || !Array.isArray(params) || params.length === 0) {
    res.status(400).json({ error: "Code not provided" });
    return;
  }

  // Pega o primeiro elemento após /api/status/
  const firstSegment = params[0];

  const match = firstSegment.match(/^code(\d{3})$/);

  if (!match) {
    res
      .status(400)
      .json({ error: "Invalid code format. Use /api/status/code500" });
    return;
  }

  const statusCode = parseInt(match[1], 10);
  res.status(statusCode).json({ code: statusCode });
}
