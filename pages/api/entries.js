import db from "../../utils/db";

/*eslint-disable*/

export default async (req, res) => {
  try {
    const entries = await db.collection("entries").orderBy("created").get();
    const entriesData = entries.docs.map((entry) => ({
      id: entry.id,
      ...entry.data(),
    }));
    res.status(200).json({ entriesData });
  } catch (e) {
    res.status(400).end();
  }
};

//we’ll fetch all documents in the entries collection
// se this endpoint as follows:
// await axios.get('/api/entries');
