import { useEffect, useState } from "react";
import Vehicle from "./Vehicle";
export default function VehicleList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/microbuses")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  return (
    <>
      <h1 className="text-gray-700 italic pt-8 pb-2  font-hello font-bold text-xl md:text-2xl lg:text-3xl mx-3 md:mx-10  ">
        Discover Our Premium Buses:
      </h1>
      <div className="grid grid-cols-1 gap-2 mx-3 mb-4 rounded-sm sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:mx-10 ">
        {data.map((obj) => (
          <Vehicle key={obj.id} data={obj} />
        ))}
      </div>
    </>
  );
}
