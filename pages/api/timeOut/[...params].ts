/* import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  new Promise((resolve) => setTimeout(resolve, 5000));

  res.status(200).json({ message: "5000ms" });
}
 */

import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { params } = req.query;
  const delayMs = parseInt(params[0], 10);

  await new Promise((resolve) => setTimeout(resolve, delayMs));

  res.status(200).json({
    message: `Resposta retornada após ${delayMs}ms`,
  });
}
