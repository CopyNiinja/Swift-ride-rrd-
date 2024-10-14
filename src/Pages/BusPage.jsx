import { useEffect, useState } from "react";
import Nav from "../Components/Nav";

export default function BusPage() {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("http://localhost:3000/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  return (
    <div>
      <Nav />
      Bus
      <p>{data?.name}</p>
    </div>
  );
}
