// eslint-disable-next-line react/prop-types
export default function Footer({ typ }) {
  return (
    <div className={typ == "bus" ? "bg-white" : "bg-orange-100"}>
      <div className=" text-xs    lg-text-base">
        <div className="  flex  justify-evenly gap-6 sm:gap-16 text-black pt-4   mx-4">
          <div>
            <h1 className=" md:text-xl lg:text-2xl">SWIFT RIDE</h1>
          </div>
          <div>
            <ul>
              <li className="underline underline-offset-4 mb-2 ">Get Help:</li>
              <li>FAQ</li>
              <li>Blog</li>
              <li>Events</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="underline  underline-offset-4 mb-2">Follow Us:</li>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
        <div className="text-center text-zinc-700 py-2">
          &copy;SwiftRide2024
        </div>
      </div>
    </div>
  );
}
