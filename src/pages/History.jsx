import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import API from "../services/api";

export default function History() {
  const [transactions, setTransactions] = useState([]);
  const [search, setSearch] = useState("");

  async function fetchTransactions() {
    try {
      const response = await API.get("/transactions");
      setTransactions(response.data);
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  }

  async function searchTransactions() {
    try {
      if (search.trim() === "") {
        fetchTransactions();
        return;
      }

      const response = await API.get(
        `/transactions/search/${search}`
      );

      setTransactions(response.data);
    } catch (error) {
      console.error("Error searching transactions:", error);
    }
  }

  async function deleteTransaction(id) {
    try {
      await API.delete(`/transactions/${id}`);
      fetchTransactions();
    } catch (error) {
      console.error("Error deleting transaction:", error);
    }
  }

  useEffect(() => {
  const loadData = async () => {
    try {
      await fetchTransactions();
    } catch (error) {
      console.error(error);
    }
  };

  loadData();
}, []);

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 p-6 bg-slate-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-6">
          Transaction History
        </h1>

        <div className="mb-4 flex gap-2">
          <input
            type="text"
            placeholder="Search Vehicle Number"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border p-3 rounded w-80"
          />

          <button
            onClick={searchTransactions}
            className="bg-blue-600 text-white px-4 rounded"
          >
            Search
          </button>

          <button
            onClick={fetchTransactions}
            className="bg-gray-600 text-white px-4 rounded"
          >
            Reset
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-900 text-white">
                <th className="p-4 text-left">
                  Vehicle Number
                </th>

                <th className="p-4 text-left">
                  Vehicle Type
                </th>

                <th className="p-4 text-left">
                  Amount
                </th>

                <th className="p-4 text-left">
                  Toll Plaza
                </th>

                <th className="p-4 text-left">
                  Date & Time
                </th>

                <th className="p-4 text-left">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {transactions.length > 0 ? (
                transactions.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b hover:bg-gray-50"
                  >
                    <td className="p-4">
                      {item.vehicleNumber}
                    </td>

                    <td className="p-4">
                      {item.vehicleType}
                    </td>

                    <td className="p-4">
                      ₹{item.amount}
                    </td>

                    <td className="p-4">
                      {item.tollPlaza || "N/A"}
                    </td>

                    <td className="p-4">
                      {item.dateTime || "N/A"}
                    </td>

                    <td className="p-4">
                      <button
                        onClick={() =>
                          deleteTransaction(item.id)
                        }
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="6"
                    className="text-center p-6 text-gray-500"
                  >
                    No transactions found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}