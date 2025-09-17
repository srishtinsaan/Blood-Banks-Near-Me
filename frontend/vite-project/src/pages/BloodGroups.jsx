import { useState } from "react";

const bloodCompatibility = {
  "A+": { canDonate: ["A+", "AB+"], cannotDonate: ["A-", "B+", "B-", "O+", "O-", "AB-"] },
  "A-": { canDonate: ["A-", "A+", "AB-", "AB+"], cannotDonate: ["B+", "B-", "O+", "O-"] },
  "B+": { canDonate: ["B+", "AB+"], cannotDonate: ["A+", "A-", "B-", "O+", "O-", "AB-"] },
  "B-": { canDonate: ["B-", "B+", "AB-", "AB+"], cannotDonate: ["A+", "A-", "O+", "O-"] },
  "AB+": { canDonate: ["AB+"], cannotDonate: ["A+", "A-", "B+", "B-", "O+", "O-", "AB-"] },
  "AB-": { canDonate: ["AB-", "AB+"], cannotDonate: ["A+", "A-", "B+", "B-", "O+", "O-"] },
  "O+": { canDonate: ["O+", "A+", "B+", "AB+"], cannotDonate: ["O-", "A-", "B-", "AB-"] },
  "O-": { canDonate: ["Everyone"], cannotDonate: [] },
};

export default function BloodGroups() {
  const [selected, setSelected] = useState(null);

  const bloodGroups = Object.keys(bloodCompatibility);

  return (
    <div className="flex flex-col items-center min-h-screen text-white p-6">
      <h1 className="text-3xl font-bold mb-10">Blood Donation Compatibility</h1>

      {/* Circles */}
      <div className="grid grid-cols-8 gap-6 mb-8">
        {bloodGroups.map((group) => (
          <button
  key={group}
  onClick={() => setSelected(group)}
  className={`w-20 h-20 flex items-center justify-center rounded-full border-2 transition
    ${selected === group 
      ? "bg-red-800 border-red-300" 
      : "hover:bg-white/10 hover:scale-110"}`
  }
>
  {group}
</button>
        ))}
      </div>

      {/* Result */}
      {selected && (
        <div className="w-full max-w-md bg-white/10 p-6 rounded-lg shadow-lg flex flex-col justify-center">
            <h2 className="text-xl font-semibold mb-4 flex justify-center">Selected Blood Group: {selected}</h2>
            <div className="flex gap-5 justify-center">
                <div>
                    <p className="text-green-400 mb-2">✅ Can Donate To:</p>
                    <ul className="list-disc list-inside mb-4 ml-5">
                        {bloodCompatibility[selected].canDonate.map((g, i) => (
                    <li key={i}>{g}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <p className="text-red-400 mb-2">❌ Can't Donate To:</p>
                    <ul className="list-disc list-inside ml-5">
                        {bloodCompatibility[selected].cannotDonate.map((g, i) => (
                        <li key={i}>{g}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
      )}
    </div>
  );
}
