import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const mockData = {
    id: "objectId",
    status: 3,
    document: {
      id: "objectId",
      type: "unico.moja.dictionary.br.cnh.v2.Cnh",
      cpfMatch: false,
      faceMatch: true,
      content: {
        numero: "1234567890",
        rgNumero: "MG1234567",
        cpfNumero: "123.456.789-00",
        nomeCivil: "João da Silva",
        filiacao: ["Maria da Silva", "José da Silva"],
        dataNascimento: "1990-01-01",
        dataHabilitacao: "2010-06-15",
        dataExpiracao: "2030-06-15",
        dataEmissao: "2020-06-15",
        localEmissao: "São Paulo - SP",
        categoria: "B",
      },
      fileUrls: ["https://api-1313.vercel.app/api/download-pdf"],
    },
  };

  return res.status(200).json(mockData);
}
