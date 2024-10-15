import { Link } from "react-router-dom";
export default function Vehicle({
  // eslint-disable-next-line react/prop-types
  data,
}) {
  // eslint-disable-next-line react/prop-types
  const { imageUrl, name, price, type, id } = data;
  return (
    <Link to={`/bus/${id}`}>
      <div className="col-span-1 text-sm rounded-sm">
        <img src={imageUrl} alt={name} className="w-full" />
        <div className="flex justify-between m-1 ">
          <p className="font-bold ">{name}</p>
          <p className="after:content-['$/day']">{price}</p>
        </div>
        <div className="m-1 ">
          <button>{type}</button>
        </div>
      </div>
    </Link>
  );
}
