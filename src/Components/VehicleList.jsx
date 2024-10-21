import { useLoaderData, useSearchParams } from "react-router-dom";
import Vehicle from "./Vehicle";

export async function loader() {
  const resp = await fetch("http://localhost:3000/microbuses");
  return await resp.json();
}

export default function VehicleList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const fil = searchParams.toString();
  const vanFilter = searchParams.get("type") || null;

  const data = useLoaderData();

  const filteredVans = vanFilter
    ? data.filter((v) => v.type === vanFilter)
    : data;
  console.log(filteredVans);

  const handleParams = (key, value) => {
    setSearchParams((prev) => {
      if (value === null) prev.delete(key);
      else prev.set(key, value);

      return prev;
    });
  };
  return (
    <div className="bg-gradient-to-b  from-orange-100 to-white    flex flex-col justify-between">
      <div>
        <h1 className="text-gray-700 italic pt-8 pb-2  font-hello font-bold text-xl md:text-2xl lg:text-3xl mx-3 md:mx-10  ">
          Discover Our Premium Buses:
        </h1>
        {
          <div className="text-left mx-3 mb-2 md:mx-10 space-x-1 ">
            <button
              className=" text-xs rounded-md px-2 py-1 bg-orange-500 text-white"
              onClick={() => handleParams("type", "simple")}
            >
              Simple
            </button>
            <button
              className=" text-xs rounded-md px-2 py-1 bg-purple-950 text-white"
              onClick={() => handleParams("type", "luxury")}
            >
              Luxury
            </button>
            <button
              className=" text-xs rounded-md px-2 py-1 bg-green-950 text-white"
              onClick={() => handleParams("type", "rugged")}
            >
              Rugged
            </button>
            {vanFilter && (
              <button
                className="border-2 border-red-400 text-xs rounded-md px-2 py-1  text-red-400"
                onClick={() => handleParams("type", null)}
              >
                Clear
              </button>
            )}
          </div>
        }
      </div>
      <div className="grid grid-cols-1 gap-2 mx-3 mb-4 rounded-sm sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:mx-10 ">
        {filteredVans.map((obj) => (
          <Vehicle key={obj.id} data={obj} filter={fil} />
        ))}
      </div>
    </div>
  );
}
