import dbConnect from "../../../utils/dbConnect";
import Data from "../../../models/Data";

dbConnect();

export default async (req, res) => {
  const { 
    query: { id },
    method
  } = req;

  switch(method) {
    case 'GET':
      try {
        const data = await Data.findById(id);

        if(!data) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: data});
      } catch (error) {
        return res.status(400).json({ success: false });
      }
      break;
    case 'PUT':
      try {
        const data = await Data.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true
        });

        if(!data) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: data});
      } catch (error) {
        return res.status(400).json({ success: false });
      }
      break;
    case 'DELETE':
      try {
        const deletedData = await Data.deleteOne({ _id: id });

        if(!deletedData) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: {}});
      } catch (error) {
        return res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}