import Image from "next/image";
import { BiErrorAlt } from "react-icons/bi";
import Link from "next/link";
const Cancel = () => {
  return (
    <>
      <div className="flex justify-start p-3">
        <Image src="/logo.svg" alt="logo" width={56} height={56} priority className="cursor-pointer object-contain" />
      </div>
      <div className="h-[90vh] flex flex-col justify-center items-center">
        <BiErrorAlt className="w-20 h-20 text-red-500" />
        <h1 className="text-2xl md:text-5xl mt-4">Canceled Subscription</h1>
        <Link href="/" className="cursor-pointer">
          <button className="mt-4 bg-[#e10856] p-4 rounded">Choose Plan</button>
        </Link>
      </div>
    </>
  );
};
export default Cancel;
