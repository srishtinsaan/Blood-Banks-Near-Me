function FormResults({ banks }) {
  if (!banks || banks.length === 0) {
    return <p className="text-gray-400 mt-6"></p>;
  }

  return (
    <div className="flex flex-col gap-6 mt-6 justify-center items-center">
  {banks.map((bank, index) => (
    <div 
      key={index} 
      className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-md border border-red-500/30 flex flex-col justify-center items-center w-full max-w-md"
    >
      <h3 className="text-lg font-bold text-red-400">
        {bank[" Blood Bank Name"]}
      </h3>
      <p className="text-gray-200">{bank[" Address"]}</p>
    </div>
  ))}
</div>

  );
}

export default FormResults;
