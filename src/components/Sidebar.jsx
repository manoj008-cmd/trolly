import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 bg-slate-900 text-white min-h-screen p-5">
      <h2 className="text-2xl font-bold mb-8">
        Toll System
      </h2>

      <nav className="space-y-4">
        <Link
          to="/dashboard"
          className="block p-2 rounded hover:bg-slate-700"
        >
          Dashboard
        </Link>

        <Link
          to="/add-transaction"
          className="block p-2 rounded hover:bg-blue-600"
        >
          Add Transaction
        </Link>

        <Link
          to="/history"
          className="block p-2 rounded hover:bg-blue-600"
        >
          Transaction History
        </Link>
      </nav>
    </div>
  );
}