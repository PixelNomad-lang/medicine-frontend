import Medicines from "./Medicines";
import AddMedicine from "./AddMedicine";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-green-700 text-white py-4 shadow-md">
        <h1 className="text-2xl font-bold text-center">Medicine Management System</h1>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <AddMedicine />
        </div>

        <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
          <Medicines />
        </div>
      </main>
    </div>
  );
}

export default App;
