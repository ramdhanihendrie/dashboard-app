import dbConnect from "../../../utils/dbConnect";
import Data from "../../../models/Data";

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch(method) {
    case 'GET':
      try {
        const datas = await Data.find({});

        res.status(200).json({ success: true, data: datas });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'POST':
      try {
        const data = await Data.create(req.body);

        res.status(201).json({ success: true, data: data });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}