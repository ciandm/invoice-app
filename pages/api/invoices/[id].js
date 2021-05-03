import { connectToDatabase } from '../../../utils/mongodb';

// eslint-disable-next-line consistent-return
export default async (req, res) => {
  const {
    query: { id },
    method,
  } = req;
  const { db } = await connectToDatabase();

  if (method === 'GET') {
    try {
      const invoice = await db.collection('invoices').findOne({ _id: id });
      if (!invoice) {
        return res.status(400).json({ success: false });
      }
      res.status(200).json({ data: invoice, success: true });
    } catch (e) {
      res.status(400).json({ success: false });
    }
  } else if (method === 'PUT') {
    try {
      const invoice = await db
        .collection('invoices')
        .findOneAndUpdate({ _id: id }, { $set: { ...req.body } });

      if (!invoice) {
        return res.status(400).json({ success: false });
      }

      res.status(201).json({ data: invoice, success: true });
    } catch (e) {
      console.log(e);
      res.status(400).json({ success: false });
    }
  } else if (method === 'DELETE') {
    try {
      const deletedInvoice = await db
        .collection('invoices')
        .findOneAndDelete({ _id: id });

      if (!deletedInvoice) {
        return res.status(400).json({ success: false });
      }
      res.status(200).json({ data: {}, success: true });
    } catch (e) {
      res.status(400).json({ success: false });
    }
  } else {
    res.status(400).json({ success: false });
  }
};
