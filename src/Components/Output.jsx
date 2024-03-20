import React, { useEffect, useState } from "react";
import axios from "axios";

function Output() {
  const [fetchedData, setFetchedData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/v1/users/getdata"
      );
      setFetchedData(response.data.message);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const truncateString = (str, maxLength) => {
    if (str.length <= maxLength) {
      return str;
    } else {
      return str.substring(0, maxLength) + "...";
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex h-screen justify-center items-center">
      <table className="flex flex-col justify-center items-center border p-4 md:p-10">
        <tr className="flex justify-items-center gap-10 w-full">
          <th>Username</th>
          <th>Language</th>
          <th>Standard Input</th>
          <th style={{ width: "25rem" }}>Source Code</th>
        </tr>
        {fetchedData.map((item) => (
          <tr className="flex justify-items-center gap-24 p-3 w-full">
            <td>{item.username}</td>
            <td>{item.language}</td>
            <td>{item.stdin}</td>
            <td>
              <pre>{truncateString(item.code, 100)}</pre>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Output;
