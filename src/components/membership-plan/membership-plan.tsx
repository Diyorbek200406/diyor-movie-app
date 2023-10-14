const MembershipPlan = () => {
  return (
    <div className="mt-6 grid grid-cols-1 gap-x-4 border p-4 md:grid-cols-4 md:border-x md:border-t md:border-b-0 md:pb-0">
      <div className="space-y-2 py-4">
        <h1 className="text-lg text-[gray]">Membership & Billing</h1>

        <button className="h-10 w-3/5 transition-all whitespace-nowrap bg-gray-300 py-2 text-sm font-medium text-black shadow-md hover:bg-gray-200 md:w-4/5">
          Cancel Membership
        </button>
      </div>

      <div className="col-span-3">
        <div className="flex flex-col justify-between border-b border-white/10 py-4 md:flex-row">
          <div>
            <p className="font-medium">Example@gmail.com</p>
            <p className="text-[gray]">Password : **********</p>
          </div>

          <div className="md:text-right">
            <p className="membershipLink">Change Email</p>
            <p className="membershipLink">Change Password</p>
          </div>
        </div>

        <div className="flex flex-col justify-between py-4 md:flex-row md:pb-0">
          <div>
            <p className="">Your membership plan will end 14 November 2023</p>
          </div>

          <div className="md:text-right">
            <p className="membershipLink">Manage payment info</p>
            <p className="membershipLink">Add backup payment info</p>
            <p className="membershipLink">Billing detail</p>
            <p className="membershipLink">Change billing day</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipPlan;
