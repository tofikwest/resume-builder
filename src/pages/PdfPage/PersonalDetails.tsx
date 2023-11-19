import React, { useState } from 'react'

const PersonalDetails = () => {
  const [isNeedAdditionalForm, setIsNeedAdditionalForm] =
    useState<Boolean>(false)

  function handleAdditionalForm() {
    setIsNeedAdditionalForm((prev) => !prev)
  }
  return (
    <>
      <h2 className="block my-2 ml-14 text-xl font-semibold">
        Personal Details
      </h2>
      <form className=" select-none font-form-family flex flex-col flex-wrap h-[371px]  w-11/12 my-0 mx-auto justify-between">
        <label
          htmlFor="jobTitle"
          className="inline text-gray-400 font-extralight"
        >
          Wanted Job Title
        </label>
        <input
          className="placeholder:font-extralight block border rounded border-solid p-2 mt-1 mb-4 bg-input-bg focus:outline-none focus:border-b-additional-color focus:border-b-2 w-5/12 h-12 "
          type="text"
          id="jobTitle"
          name="jobTitle"
          required
          placeholder="e.g HR"
        />
        {/* ======== */}
        <label htmlFor="first_name" className="text-gray-400 font-extralight">
          First Name
        </label>
        <input
          className="block border rounded border-solid p-2 mt-1 mb-4 bg-input-bg focus:outline-none focus:border-b-additional-color focus:border-b-2 w-5/12 h-12"
          type="text"
          id="first_name"
          name="first_name"
          required
        />
        {/* ======== */}
        <label htmlFor="email" className="text-gray-400 font-extralight">
          Email
        </label>
        <input
          className="block border rounded border-solid p-2 mt-1 mb-4 bg-input-bg focus:outline-none focus:border-b-additional-color focus:border-b-2 w-5/12 h-12"
          type="email"
          id="email"
          name="email"
          required
        />
        {/* ======== */}
        <label htmlFor="country" className="text-gray-400 font-extralight">
          Country
        </label>
        <input
          className="block border rounded border-solid p-2 mt-1 mb-4 bg-input-bg focus:outline-none focus:border-b-additional-color focus:border-b-2 w-5/12 h-12"
          type="text"
          id="country"
          name="country"
          required
        />
        {/* ====== */}
        <label
          htmlFor="photo"
          className=" p-2 h-12 rounded mt-[28px] text-gray-400 font-extralight flex items-center gap-2 cursor-pointer bg-input-bg hover:bg-slate-700 mb-4 w-5/12 border border-solid border-gray-200 focus:border-b-2
          self-end
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6 inline text-center"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
            />
          </svg>
          {/* <p>Upload photo</p> */}
          <p>This template doesn't support photo upload</p>
          <input
            className="  rounded p-2 mt-1 mb-4 bg-input-bg focus:outline-none focus:border-b-additional-color  w-5/12 h-12 hidden"
            type="file"
            id="photo"
            name="photo"
            disabled
          />
        </label>
        {/* ====== */}
        <label
          htmlFor="last_name"
          className="text-gray-400 font-extralight ml-[100px]"
        >
          Last Name
        </label>
        <input
          className="block focus:border-b-2 border rounded border-solid p-2 mt-1 mb-4 bg-input-bg focus:outline-none focus:border-b-additional-color  w-5/12 h-12 self-end"
          type="text"
          id="last_name"
          name="last_name"
          required
        />
        {/* ===== */}
        <label
          htmlFor="phone"
          className="text-gray-400 font-extralight ml-[100px]"
        >
          Phone
        </label>
        <input
          className="placeholder:font-extralight self-end block border rounded border-solid p-2 mt-1 mb-4 bg-input-bg focus:outline-none focus:border-b-additional-color focus:border-b-2 w-5/12 h-12"
          type="text"
          id="phone"
          name="phone"
          placeholder="e.g +380 96 156 75 13"
          required
        />
        {/* ====== */}
        <label
          htmlFor="city"
          className="text-gray-400 font-extralight ml-[100px]"
        >
          City
        </label>
        <input
          className=" self-end block border rounded border-solid p-2 mt-1 mb-4 bg-input-bg focus:outline-none focus:border-b-additional-color focus:border-b-2 w-5/12 h-12"
          type="text"
          id="city"
          name="city"
          required
        />
      </form>
      {/* Additional detail BTN */}
      <button
        type="button"
        className="ml-14 text-left text-sm text-additional-color hover:text-additional-hover-color"
        onClick={handleAdditionalForm}
      >
        {isNeedAdditionalForm ? (
          <>
            Hide additional details
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="inline ml-2 w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 15.75l7.5-7.5 7.5 7.5"
              />
            </svg>
          </>
        ) : (
          <>
            Edit additional details
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2.5"
              stroke="currentColor"
              className="inline ml-2 w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </>
        )}
      </button>
      {isNeedAdditionalForm && (
        <form className="w-11/12 select-none font-form-family flex flex-col flex-wrap h-[294px] my-4 mx-auto">
          <label htmlFor="address" className="text-gray-400 font-extralight">
            Address
          </label>
          <input
            className="block border rounded border-solid p-2 mt-1 mb-4 bg-input-bg focus:outline-none focus:border-b-additional-color focus:border-b-2 w-5/12 h-12 placeholder:font-light"
            type="text"
            id="address"
            name="address"
          />
          {/* ======== */}
          <label
            htmlFor="driving_license"
            className="text-gray-400 font-extralight"
          >
            Driving License
          </label>
          <input
            className="block border rounded border-solid p-2 mt-1 mb-4 bg-input-bg focus:outline-none focus:border-b-additional-color focus:border-b-2 w-5/12 h-12"
            type="text"
            id="driving_license"
            name="driving_license"
          />
          {/* ======== */}
          <label
            htmlFor="place_birth"
            className="text-gray-400 font-extralight"
          >
            Place Of Birth
          </label>
          <input
            className="block border rounded border-solid p-2 mt-1 mb-4 bg-input-bg focus:outline-none focus:border-b-additional-color focus:border-b-2 w-5/12 h-12"
            type="email"
            id="place_birth"
            name="place_birth"
          />
          {/* ======== */}
          <label
            htmlFor="postalCode"
            className="text-gray-400 font-extralight ml-[100px]"
          >
            Postal Code
          </label>
          <input
            className="self-end block border rounded border-solid p-2 mt-1 mb-4 bg-input-bg focus:outline-none focus:border-b-additional-color focus:border-b-2 w-5/12 h-12"
            type="text"
            id="postalCode"
            name="postalCode"
          />
          {/* ====== */}
          <label
            htmlFor="nationality"
            className="text-gray-400 font-extralight ml-[100px]"
          >
            Nationality
          </label>
          <input
            className="self-end block border rounded border-solid p-2 mt-1 mb-4 bg-input-bg focus:outline-none focus:border-b-additional-color focus:border-b-2 w-5/12 h-12"
            type="text"
            id="nationality"
            name="nationality"
          />
          {/* ====== */}
          <label
            htmlFor="date_birth"
            className="text-gray-400 font-extralight ml-[100px]"
          >
            Date Of Birth
          </label>
          <input
            className=" self-end block focus:border-b-2 border rounded border-solid p-2 mt-1 mb-4 bg-input-bg focus:outline-none focus:border-b-additional-color text-gray-400  w-5/12 h-12"
            type="date"
            id="date_birth"
            name="date_birth"
          />
        </form>
      )}
    </>
  )
}

export default PersonalDetails
