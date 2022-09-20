// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  id: number;
  label: string;
  value: number;
  maxVal: number;
  valueWeight: number;
}[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json([
    { id: 1, label: "kehadiran", value: 14, maxVal: 16, valueWeight: 35 },
    {
      id: 2,
      label: "tugas",
      value: 90,
      maxVal: 100,
      valueWeight: 25,
    },
    {
      id: 3,
      label: "uts",
      value: 80,
      maxVal: 100,
      valueWeight: 20,
    },
    {
      id: 4,
      label: "uas",
      value: 75,
      maxVal: 100,
      valueWeight: 20,
    },
    {
      id: 5,
      label: "project",
      value: 0,
      maxVal: 100,
      valueWeight: 0,
    },
  ]);
}
