import { NextApiRequest, NextApiResponse } from "next";
import { ObjectId } from "bson";
import { v4 as uuidv4 } from "uuid";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const mockData = {"id":"95f30883-95aa-4452-8422-75f6a92676cf","rank":500}
  return res.status(200).json(mockData);
}
