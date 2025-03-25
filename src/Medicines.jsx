import { useEffect, useState } from "react";
import { getMedicines } from "./api";

const Medicines = () => {
  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    const fetchMedicines = async () => {
      const data = await getMedicines();
      if (data.success) setMedicines(data.medicines);
    };
    fetchMedicines();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-center text-green-700 mb-6">
        Medicines List
      </h2>
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
        {medicines.length === 0 ? (
          <p className="text-center text-gray-500">No medicines available</p>
        ) : (
          <ul className="space-y-4">
            {medicines.map((med) => (
              <li
                key={med._id}
                className="p-4 border rounded-lg flex justify-between items-center shadow-sm hover:shadow-md transition duration-300"
              >
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{med.name}</h3>
                  <p className="text-gray-600 text-sm">{med.dosage}</p>
                </div>
                <span className="text-green-600 font-semibold">₹{med.price}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Medicines;
