import { NextApiRequest, NextApiResponse } from "next";
import { ObjectId } from "bson";
import { v4 as uuidv4 } from "uuid";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const mockData = {
  "id": "a1a54c6f-c98d-409d-b716-73a074878fb2",
  "status": 3,
  "unicoId": { "result": "inconclusive" },
  "identityFraudsters": { "result": "inconclusive" },
  "liveness": 1
}

  return res.status(200).json(mockData);
}
