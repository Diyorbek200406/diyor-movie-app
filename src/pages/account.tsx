import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MembershipPlan } from "src/components";
const Account = () => {
  return (
    <>
      <Head>
        <title>D Movies | Account Settings</title>
        <meta name="description" content="Configure Your Account" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" as="image" />
      </Head>
      <header>
        <div className="flex items-center space-x-2 md:space-x-10">
          <Link href="/">
            <Image src="/logo.svg" alt="logo" width={56} height={56} priority className="cursor-pointer object-contain" />
          </Link>
        </div>
        <div className="flex items-center space-x-4 text-sm font-light">
          <Link href="/account">
            <AiOutlineUser className="h-6 w-6 cursor-pointer" />
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-5 pt-24 transition-all md:px-10">
        <div className="flex flex-col gap-x-4 md:flex-row md:items-center">
          <h1 className="text-3xl md:text-4xl">Account</h1>
          <div className="-ml-1 flex items-center gap-x-1.5">
            <MdOutlineSubscriptions className="w-5 h-5 text-red-500" />
            <p className="text-md font-semibold text-[#555]">Member since 14 October , 2023</p>
          </div>
        </div>

        <MembershipPlan />

        <div className="mt-6 grid grid-cols-1 gap-x-4 border p-4 md:grid-cols-4 md:border-x md:border-t md:border-b-0 md:pb-0">
          <h1 className="text-lg text-[gray]">Plan Detail</h1>
          <div className="col-span-2 font-medium">Premium</div>
          <p className="cursor-pointer text-blue-500 hover:underline md:text-right">Change Plan</p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-4 border p-4 md:grid-cols-4 md:border-x md:border-t md:border-b-0 md:pb-0">
          <h1 className="text-lg text-[gray]">Settings</h1>
          <p className="col-span-3 cursor-pointer text-blue-500 hover:underline">Sign Out All Devices</p>
        </div>
      </main>
    </>
  );
};

export default Account;
