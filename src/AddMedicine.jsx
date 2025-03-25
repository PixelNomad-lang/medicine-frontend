import { useState } from "react";
import { addMedicine } from "./api";

const AddMedicine = () => {
  const [medicine, setMedicine] = useState({
    name: "",
    dosage: "",
    price: "",
  });

  const handleChange = (e) => {
    setMedicine({ ...medicine, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await addMedicine(medicine);
    if (result.success) {
      alert("Medicine added successfully!");
      setMedicine({ name: "", dosage: "", price: "" });
    } else {
      alert("Failed to add medicine!");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-xl font-bold text-green-700 text-center mb-4">
          Add Medicine
        </h2>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter medicine name"
            value={medicine.name}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-lg mt-1 focus:ring-2 focus:ring-green-500 outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Dosage</label>
          <input
            type="text"
            name="dosage"
            placeholder="Enter dosage"
            value={medicine.dosage}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-lg mt-1 focus:ring-2 focus:ring-green-500 outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Price</label>
          <input
            type="number"
            name="price"
            placeholder="Enter price"
            value={medicine.price}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-lg mt-1 focus:ring-2 focus:ring-green-500 outline-none"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 text-white font-semibold p-2 rounded-lg hover:bg-green-700 transition duration-300"
        >
          Add Medicine
        </button>
      </form>
    </div>
  );
};

export default AddMedicine;
