import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

/*eslint-disable*/

const List = () => {
  const [entries, setEntries] = useState([]);
  useEffect(() => {
    const getEntries = async () => {
      const res = await axios.get("/api/entries");
      setEntries(res.data.entriesData);
    };
    getEntries();
  }, []);

  return (
    <div>
      <h1>Entries</h1>
      {entries.map((entry) => (
        <div key={entry.id}>
          <Link href={`/admin/edit/${entry.id}`}>
            <a>{entry.title}</a>
          </Link>
          <br />
        </div>
      ))}
    </div>
  );
};

export default List;
