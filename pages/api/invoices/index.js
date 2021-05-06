import { connectToDatabase } from '../../../utils/mongodb';

export default async (req, res) => {
  const { method } = req;
  const { db } = await connectToDatabase();

  if (method === 'GET') {
    try {
      const invoices = await db
        .collection('invoices')
        .find({})
        .toArray();

      res.status(200).json({ data: invoices, success: true });
    } catch (e) {
      res.status(400).json({ success: false });
    }
  } else if (method === 'POST') {
    try {
      const invoice = await db.collection('invoices').insert(req.body);
      console.log(req.body);

      res.status(201).json({ data: invoice, success: true });
    } catch (e) {
      res.status(400).json({ success: false });
    }
  } else {
    res.status(400).json({ success: false });
  }
};
