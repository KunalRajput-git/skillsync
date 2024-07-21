import Image from "next/image";
import { SendFill } from "../../../node_modules/react-bootstrap-icons/dist/index";

const Card = () => {
  return (
    <div className="w-full md:w-2/5 border-4  m-4 rounded-2xl bg--100 p-6 relative shadow-lg">
      <div className="flex gap-4 items-center">
        <span className="absolute top-4 right-4 border px-4 py-1 rounded-md">
          Beginner
        </span>
        <div className="w-20 h-20 border rounded-md">
          <Image
            src="https://shorturl.at/sr5ui"
            alt="My Image"
            width={500}
            height={300}
            className="object-contain rounded-md"
          />
        </div>
        <div className="">
          <h1 className="text-xl font-bold">Kunal Rajput</h1>
          <h2>Delhi, India</h2>
        </div>
      </div>
      <h1 className="mt-4">Learning frontend development...</h1>
      <div className="mt-4 flex gap-3 flex-wrap text-emerald-500 font-bold">
        <span className="border border-emerald-300 px-4 py-2 rounded-md">
          Html
        </span>
        <span className="border border-emerald-300 px-4 py-2 rounded-md">
          CSS
        </span>
        <span className="border border-emerald-300 px-4 py-2 rounded-md">
          Javascript
        </span>
        <span className="border border-emerald-300 px-4 py-2 rounded-md">
          React
        </span>
      </div>
    </div>
  );
};

export default Card;
