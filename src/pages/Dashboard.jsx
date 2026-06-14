import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import API from "../services/api";

export default function Dashboard() {
  const [transactions, setTransactions] = useState([]);

  async function fetchTransactions() {
    try {
      const response = await API.get("/transactions");
      setTransactions(response.data);
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  }

  useEffect(() => {
  const loadData = async () => {
    await fetchTransactions();
  };

  loadData();
}, []);

  const totalTransactions = transactions.length;

  const totalRevenue = transactions.reduce(
    (sum, item) => sum + item.amount,
    0
  );

  const totalVehicles = new Set(
    transactions.map((item) => item.vehicleNumber)
  ).size;

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 p-6 bg-slate-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-6">
          Toll Management Dashboard
        </h1>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-gray-500">
              Total Transactions
            </h2>

            <p className="text-4xl font-bold mt-2">
              {totalTransactions}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-gray-500">
              Total Revenue
            </h2>

            <p className="text-4xl font-bold mt-2 text-green-600">
              ₹{totalRevenue}
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-gray-500">
                Average Toll
            </h2>

            <p className="text-4xl font-bold mt-2 text-purple-600">
    ₹{
      totalTransactions > 0
        ? Math.round(totalRevenue / totalTransactions)
        : 0
    }
  </p>
</div>

          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-gray-500">
              Unique Vehicles
            </h2>

            <p className="text-4xl font-bold mt-2 text-blue-600">
              {totalVehicles}
            </p>
          </div>

        </div>

        {/* Recent Transactions */}
        <div className="mt-8 bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">
            Recent Transactions
          </h2>

          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left p-3">
                  Vehicle Number
                </th>

                <th className="text-left p-3">
                  Vehicle Type
                </th>

                <th className="text-left p-3">
                  Amount
                </th>
              </tr>
            </thead>

            <tbody>
              {transactions.length > 0 ? (
                transactions
                  .slice()
                  .reverse()
                  .slice(0, 5)
                  .map((item) => (
                    <tr
                      key={item.id}
                      className="border-b hover:bg-gray-50"
                    >
                      <td className="p-3">
                        {item.vehicleNumber}
                      </td>

                      <td className="p-3">
                        {item.vehicleType}
                      </td>

                      <td className="p-3">
                        ₹{item.amount}
                      </td>
                    </tr>
                  ))
              ) : (
                <tr>
                  <td
                    colSpan="3"
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