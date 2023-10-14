import Image from "next/image";
import { AiFillCheckCircle } from "react-icons/ai";
import Link from "next/link";
const Success = () => {
  return (
    <>
      <div className="flex justify-start p-3">
        <Image src="/logo.svg" alt="logo" width={56} height={56} priority className="cursor-pointer object-contain" />
      </div>
      <div className="h-[90vh] flex flex-col justify-center items-center">
        <AiFillCheckCircle className="w-20 h-20 text-green-500" />
        <h1 className="text-2xl md:text-5xl mt-4">SuccessFully Subscription Complete</h1>
        <Link href="/" className="cursor-pointer">
          <button className="mt-4 bg-green-600 p-4 rounded">Dashboard</button>
        </Link>
      </div>
    </>
  );
};
export default Success;
