// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import withProtect from "../../middleware/protected";

const handler = (req, res) => {
  res.status(200).json([51703, 52304, 54607, 54000, 55000]);
};

export default handler;
