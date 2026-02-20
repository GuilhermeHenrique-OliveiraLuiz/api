import { NextApiRequest, NextApiResponse } from "next";
import { ObjectId } from "bson";
import { v4 as uuidv4 } from "uuid";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const mockData = {"id":"7e1656c2-e015-4aca-991c-cf21b77b5092","status":3,"biometryToken":{"result":true}};

  return res.status(200).json(mockData);
}
