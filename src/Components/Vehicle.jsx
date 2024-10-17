import { Link } from "react-router-dom";
export default function Vehicle({
  // eslint-disable-next-line react/prop-types
  data,
}) {
  // eslint-disable-next-line react/prop-types
  const { imageUrl, name, price, type, id } = data;
  return (
    <Link to={`/bus/${id}`} state={data}>
      <div className="col-span-1 relative  text-sm rounded-md group duration-300 hover:rounded-md hover:border-2 hover:p-3 hover:bg-blend-luminosity">
        <img
          src={imageUrl}
          alt={name}
          className="w-full  rounded-md opacity-85 group-hover:duration-700 group-hover:rounded-md  group-hover:rounded-b-none group-hover:opacity-100 "
        />
        <div className="flex text-lg justify-between m-1 mb-2 ">
          <p className="font-bold md:text-xl font-hello">{name}</p>
          <p className="after:content-['$/day']  text-sm">{price}</p>
        </div>
        <div className="m-1 italic absolute text-base md:text-xl font-hello top-3 left-3  opacity-60 ">
          {type === "simple" ? (
            <p className="text-gray-700">simple</p>
          ) : type === "rugged" ? (
            <p className="text-emerald-700">rugged</p>
          ) : (
            <p className="text-purple-700">Luxury</p>
          )}
        </div>
      </div>
    </Link>
  );
}
