// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  id: number;
  predikat: string;
  interval: string;
  keterangan: string;
  borderColor: string;
  bgColor: string;
}[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json([
    {
      id: 1,
      predikat: "A",
      interval: "70 - 100",
      keterangan: "Sangat Baik",
      borderColor: "teal.400",
      bgColor: "teal.100",
    },
    {
      id: 2,
      predikat: "B",
      interval: "60 - 69",
      keterangan: "Baik",
      borderColor: "green.400",
      bgColor: "green.100",
    },
    {
      id: 3,
      predikat: "C",
      interval: "50 - 59",
      keterangan: "Cukup",
      borderColor: "yellow.400",
      bgColor: "yellow.100",
    },
    {
      id: 4,
      predikat: "D",
      interval: "40 - 49",
      keterangan: "Kurang",
      borderColor: "pink.400",
      bgColor: "pink.100",
    },
    {
      id: 5,
      predikat: "E",
      interval: "0 - 39",
      keterangan: "Sangat Kurang",
      borderColor: "red.400",
      bgColor: "red.100",
    },
  ]);
}
