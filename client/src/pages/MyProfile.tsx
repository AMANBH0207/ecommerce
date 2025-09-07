function MyProfile() {
  return (
    <div className="p-4 rounded-lg bg-white shadow-sm">
      <div className="pb-4">
        <h5 className="p-2 font-bold">Personal Information</h5>
        <div className="flex gap-5 p-2">
          <input
            className="p-2 border border-gray-300"
            type="text"
            placeholder="Name"
          />
          <input
            className="p-2 border border-gray-300"
            type="text"
            placeholder="Last Name"
          />
        </div>
        <div className="p-2">
          <label className="text-sm">Your Gender</label>
          <div>
            <input type="radio" />
            <label className="px-2 text-gray-500">Male</label>
            <input type="radio" />
            <label className="px-2 text-gray-500">Female</label>
          </div>
        </div>
      </div>

      <div className="pb-4">
        <h5 className="p-2 font-bold">Email Address</h5>
        <div className="flex gap-5 p-2">
          <input
            className="p-2 border border-gray-300"
            type="email"
            placeholder="Email"
          />
        </div>
      </div>

      <div className="pb-4">
        <h5 className="p-2 font-bold">Mobile Number</h5>
        <div className="flex gap-5 p-2">
          <input
            className="p-2 border border-gray-300"
            type="phone"
            placeholder="Mobile"
          />
        </div>
      </div>

      <div className="pb-4">
        <h5 className="p-2 font-bold">FAQs</h5>
        <div className="p-2">
          <label className="font-bold">
            What happens when I update my email address (or mobile number)?
          </label>
          <p className="py-2">
            Your login email id (or mobile number) changes, likewise. You'll
            receive all your account related communication on your updated email
            address (or mobile number).
          </p>
        </div>
        <div className="p-2">
          <label className="font-bold">
            When will my Swoo account be updated with the new email address (or mobile number)?
          </label>
          <p className="py-2">
            It happens as soon as you confirm the verification code sent to your email (or mobile) and save the changes.
          </p>
        </div>
        <div className="p-2">
          <label className="font-bold">
            What happens to my existing Swoo account when I update my email address (or mobile number)?
          </label>
          <p className="py-2">
            Updating your email address (or mobile number) doesn't invalidate your account. Your account remains fully functional. You'll continue seeing your Order history, saved information and personal details.
          </p>
        </div>
        <div className="p-2">
          <label className="font-bold">
            Does my Seller account get affected when I update my email address?
          </label>
          <p className="py-2">
            Swoo has a 'single sign-on' policy. Any changes will reflect in your Seller account also.
          </p>
        </div>
      </div>

      <div className="pb-4">
        <span className="text-red-500 p-2 font-bold cursor-pointer">Delete Account</span>
      </div>
    </div>
  );
}

export default MyProfile;
