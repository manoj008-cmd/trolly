import { useState } from "react";
import Sidebar from "../components/Sidebar";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

export default function AddTransaction() {
  const navigate = useNavigate();
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [vehicleType, setVehicleType] = useState("Car");
  const [tollPlaza, setTollPlaza] = useState("Bangalore Toll");

  const getTollAmount = () => {
    switch (vehicleType) {
      case "Bike":
        return 50;
      case "Car":
        return 100;
      case "Bus":
        return 250;
      case "Truck":
        return 350;
      default:
        return 100;
    }
  };

  const handleSubmit = async () => {
    try {
      const transaction = {
        vehicleNumber,
        vehicleType,
        tollPlaza,
        dateTime: new Date().toLocaleString(),
        amount: getTollAmount(),
      };
      console.log("API URL:", import.meta.env.VITE_API_URL);
     await API.post("/transactions", transaction);

navigate("/receipt", {
  state: transaction,
});
      setVehicleNumber("");
      setVehicleType("Car");
      setTollPlaza("Bangalore Toll");
    } catch (error) {
  console.log("ERROR OBJECT:", error);

  if (error.response) {
    console.log("STATUS:", error.response.status);
    console.log("DATA:", error.response.data);
  }

  if (error.request) {
    console.log("REQUEST:", error.request);
  }

  alert("Failed to save transaction");
}
  };

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 p-6 bg-slate-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-6">
          Add Transaction
        </h1>

        <div className="bg-white p-6 rounded-2xl shadow-lg max-w-lg">

          <input
            type="text"
            placeholder="Vehicle Number"
            value={vehicleNumber}
            onChange={(e) => setVehicleNumber(e.target.value)}
            className="w-full border p-3 rounded mb-4"
          />

          <select
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
            className="w-full border p-3 rounded mb-4"
          >
            <option>Bike</option>
            <option>Car</option>
            <option>Bus</option>
            <option>Truck</option>
          </select>

          <select
            value={tollPlaza}
            onChange={(e) => setTollPlaza(e.target.value)}
            className="w-full border p-3 rounded mb-4"
          >
            <option>Bangalore Toll</option>
            <option>Mysore Toll</option>
            <option>Tumkur Toll</option>
            <option>Hubli Toll</option>
          </select>

          <div className="bg-gray-100 p-4 rounded mb-4">
            <h2 className="text-lg font-semibold">
              Toll Amount: ₹{getTollAmount()}
            </h2>
          </div>

          <button
            onClick={handleSubmit}
            className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded"
          >
            Save Transaction
          </button>

        </div>
      </div>
    </div>
  );
}