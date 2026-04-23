import { useEffect, useState } from "react";
import axios from "axios";

const NoticesPanel = () => {
  const [notices, setNotices] = useState([]);
  const [title, setTitle] = useState("");

  // Fetch notices
  const getNotices = async () => {
    const res = await axios.get("http://localhost:5000/api/notices");
    setNotices(res.data);
  };

  useEffect(() => {
    getNotices();
  }, []);

  // Add notice
  const addNotice = async () => {
    if (!title) return alert("Enter notice");

    await axios.post("http://localhost:5000/api/notices", { title });

    setTitle("");
    getNotices();
  };

  // Delete notice
  const deleteNotice = async (id) => {
    await axios.delete(`http://localhost:5000/api/notices/${id}`);
    getNotices();
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Manage Notices</h2>

      {/* Add Notice */}
      <div className="flex gap-2 mb-4">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 w-full"
          placeholder="Enter notice"
        />
        <button onClick={addNotice} className="bg-blue-600 text-white px-4">
          Add
        </button>
      </div>

      {/* Notices List */}
      <div className="space-y-2">
        {notices.map((notice) => (
          <div
            key={notice._id}
            className="flex justify-between bg-gray-100 p-3 rounded"
          >
            <p>{notice.title}</p>

            <div className="flex gap-2">
              <button
                onClick={() => deleteNotice(notice._id)}
                className="bg-red-500 text-white px-2"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoticesPanel;
