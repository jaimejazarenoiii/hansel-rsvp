import React from "react";

function Reminders() {
  return (
    <div className="w-full max-w-2xl mx-auto p-4 space-y-4">
      <h2 className="text-3xl font-bold text-center mb-8">Reminders / FAQ</h2>

      <details className="border rounded-lg shadow-sm">
        <summary className="cursor-pointer px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium flex justify-between items-center">
          When is our anniversary?
          <span className="text-xl">+</span>
        </summary>
        <div className="px-4 py-3 bg-white text-gray-600 border-t">
          Our anniversary is on August 22, 2016.
        </div>
      </details>

      <details className="border rounded-lg shadow-sm">
        <summary className="cursor-pointer px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium flex justify-between items-center">
          When is our engagement date?
          <span className="text-xl">+</span>
        </summary>
        <div className="px-4 py-3 bg-white text-gray-600 border-t">
          We got engaged on November 2, 2024.
        </div>
      </details>

      <details className="border rounded-lg shadow-sm">
        <summary className="cursor-pointer px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium flex justify-between items-center">
          What's our favorite Bible verse?
          <span className="text-xl">+</span>
        </summary>
        <div className="px-4 py-3 bg-white text-gray-600 border-t">
          1 Corinthians 13:4–7 – Love is patient, love is kind...
        </div>
      </details>
    </div>
  );
}

export default Reminders;
