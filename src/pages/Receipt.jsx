import { useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function Receipt() {
  const { state } = useLocation();

  if (!state) {
    return <h1>No Receipt Available</h1>;
  }

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 p-6 bg-slate-100 min-h-screen">
        <div className="max-w-xl mx-auto bg-white shadow-lg rounded-xl p-8">

          <h1 className="text-3xl font-bold text-center mb-6">
            Toll Receipt
          </h1>

          <div className="space-y-4">

            <p>
              <strong>Vehicle Number:</strong>
              {" "}
              {state.vehicleNumber}
            </p>

            <p>
              <strong>Vehicle Type:</strong>
              {" "}
              {state.vehicleType}
            </p>

            <p>
              <strong>Toll Plaza:</strong>
              {" "}
              {state.tollPlaza}
            </p>

            <p>
              <strong>Date & Time:</strong>
              {" "}
              {state.dateTime}
            </p>

            <p>
              <strong>Amount Paid:</strong>
              {" "}
              ₹{state.amount}
            </p>

          </div>

          <button
            onClick={() => window.print()}
            className="mt-6 bg-green-600 text-white px-4 py-2 rounded"
          >
            Print Receipt
          </button>

        </div>
      </div>
    </div>
  );
}