import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { ADD } from '../../redux/pdf/pdfSlice'
import { PERSONAL_DETAILS } from '../../redux/pdf/constants'

const PersonalDetails: React.FC = () => {
  // ? PHOTO input
  const [isDisable, setisDisable] = useState<boolean>(true)

  const [isNeedAdditionalForm, setIsNeedAdditionalForm] =
    useState<Boolean>(false)

  const dispatch = useDispatch()

  // * FORM DATA
  const [mainFormData, setMainFormdata] = useState({
    jobTitle: '',
    first_name: '',
    email: '',
    country: '',
    photo: '',
    last_name: '',
    phone: '',
    city: '',
  })

  const [additionalFormData, setAdditionalFormData] = useState({
    address: '',
    postalCode: '',
    place_birth: '',
    nationality: '',
    date_birth: '',
    driving_license: '',
  })

  useEffect(() => {
    setTimeout(() => {
      dispatch(
        ADD({
          section: PERSONAL_DETAILS,
          data: { ...mainFormData, ...additionalFormData },
        }),
      )
    }, 300)
  }, [mainFormData, additionalFormData])

  function handleMainFormData(e: ChangeEvent<HTMLInputElement>) {
    setMainFormdata((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  function handleAdditionalFormData(e: ChangeEvent<HTMLInputElement>) {
    setAdditionalFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  function handleShowAdditionalForm() {
    setIsNeedAdditionalForm((prev) => !prev)
  }

  return (
    <>
      <h2 className="my-2 ml-11 block text-xl font-semibold">
        Personal Details
      </h2>
      <form className=" mx-auto my-0 flex h-[371px] w-11/12 select-none  flex-col flex-wrap justify-between font-form-family">
        <label
          htmlFor="jobTitle"
          className="inline font-extralight text-gray-400"
        >
          Wanted Job Title
        </label>
        <input
          onChange={handleMainFormData}
          className={`mb-4 mt-1 block h-12 w-5/12 rounded border border-solid bg-input-bg p-2 placeholder:font-extralight focus:border-b-2 focus:border-b-additional-color focus:outline-none `}
          type="text"
          id="jobTitle"
          name="jobTitle"
          required
          placeholder="e.g HR"
          value={mainFormData.jobTitle}
        />
        {/* ======== */}
        <label htmlFor="first_name" className="font-extralight text-gray-400">
          First Name
        </label>
        <input
          onChange={handleMainFormData}
          className="mb-4 mt-1 block h-12 w-5/12 rounded border border-solid bg-input-bg p-2 focus:border-b-2 focus:border-b-additional-color focus:outline-none"
          type="text"
          id="first_name"
          name="first_name"
          required
          value={mainFormData.first_name}
        />
        {/* ======== */}
        <label htmlFor="email" className="font-extralight text-gray-400">
          Email
        </label>
        <input
          onChange={handleMainFormData}
          className=" mb-4 mt-1 block h-12 w-5/12 rounded border border-solid bg-input-bg p-2 focus:border-b-2 focus:border-b-additional-color focus:outline-none"
          type="email"
          id="email"
          name="email"
          required
          value={mainFormData.email}
        />
        {/* ======== */}
        <label htmlFor="country" className="font-extralight text-gray-400">
          Country
        </label>
        <input
          onChange={handleMainFormData}
          className="mb-4 mt-1 block h-12 w-5/12 rounded border border-solid bg-input-bg p-2 focus:border-b-2 focus:border-b-additional-color focus:outline-none"
          type="text"
          id="country"
          name="country"
          required
          value={mainFormData.country}
        />
        {/* ====== */}
        <label
          htmlFor="photo"
          className={`mb-4 mt-[28px] flex h-12 w-5/12 items-center gap-2 self-end rounded border border-solid border-gray-200 bg-input-bg p-2 font-extralight text-gray-400 hover:bg-[#553692] hover:text-white focus:border-b-2
           ${isDisable ? 'cursor-not-allowed' : 'cursor-pointer'}
          `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="inline h-6 w-6 text-center"
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
            onChange={handleMainFormData}
            className=" mb-4 mt-1 hidden h-12 w-5/12 rounded bg-input-bg  p-2 focus:border-b-additional-color focus:outline-none "
            type="file"
            id="photo"
            name="photo"
            disabled={isDisable}
            value={mainFormData.photo}
          />
        </label>
        {/* ====== */}
        <label
          htmlFor="last_name"
          className="ml-[86px] font-extralight text-gray-400"
        >
          Last Name
        </label>
        <input
          onChange={handleMainFormData}
          className="mb-4 mt-1 block h-12 w-5/12 self-end rounded border border-solid bg-input-bg p-2  focus:border-b-2 focus:border-b-additional-color focus:outline-none"
          type="text"
          id="last_name"
          name="last_name"
          value={mainFormData.last_name}
          required
        />
        {/* ===== */}
        <label
          htmlFor="phone"
          className="ml-[86px] font-extralight text-gray-400"
        >
          Phone
        </label>
        <input
          onChange={handleMainFormData}
          className="mb-4 mt-1 block h-12 w-5/12 self-end rounded border border-solid bg-input-bg p-2 placeholder:font-extralight focus:border-b-2 focus:border-b-additional-color focus:outline-none"
          type="text"
          id="phone"
          name="phone"
          placeholder="e.g +380 96 156 75 13"
          required
          value={mainFormData.phone}
        />
        {/* ====== */}
        <label
          htmlFor="city"
          className="ml-[86px] font-extralight text-gray-400"
        >
          City
        </label>
        <input
          onChange={handleMainFormData}
          className=" mb-4 mt-1 block h-12 w-5/12 self-end rounded border border-solid bg-input-bg p-2 focus:border-b-2 focus:border-b-additional-color focus:outline-none"
          type="text"
          id="city"
          name="city"
          value={mainFormData.city}
          required
        />
      </form>
      {/* Additional detail BTN */}
      <button
        type="button"
        className="ml-11 w-[16%] text-left text-sm text-additional-color hover:text-additional-hover-color"
        onClick={handleShowAdditionalForm}
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
              className="ml-2 inline h-4 w-4"
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
              className="ml-2 inline h-4 w-4"
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
        <form className="mx-auto my-4 flex h-[294px] w-11/12 select-none flex-col flex-wrap font-form-family">
          <label htmlFor="address" className="font-extralight text-gray-400">
            Address
          </label>
          <input
            onChange={handleAdditionalFormData}
            className="mb-4 mt-1 block h-12 w-5/12 rounded border border-solid bg-input-bg p-2 placeholder:font-light focus:border-b-2 focus:border-b-additional-color focus:outline-none"
            type="text"
            id="address"
            name="address"
            value={additionalFormData.address}
          />
          {/* ======== */}
          <label
            htmlFor="driving_license"
            className="font-extralight text-gray-400"
          >
            Driving License
          </label>
          <input
            onChange={handleAdditionalFormData}
            className="mb-4 mt-1 block h-12 w-5/12 rounded border border-solid bg-input-bg p-2 focus:border-b-2 focus:border-b-additional-color focus:outline-none"
            type="text"
            id="driving_license"
            name="driving_license"
            value={additionalFormData.driving_license}
          />
          {/* ======== */}
          <label
            htmlFor="place_birth"
            className="font-extralight text-gray-400"
          >
            Place Of Birth
          </label>
          <input
            onChange={handleAdditionalFormData}
            className="mb-4 mt-1 block h-12 w-5/12 rounded border border-solid bg-input-bg p-2 focus:border-b-2 focus:border-b-additional-color focus:outline-none"
            type="email"
            id="place_birth"
            name="place_birth"
          />
          {/* ======== */}
          <label
            htmlFor="postalCode"
            className="ml-[100px] font-extralight text-gray-400"
          >
            Postal Code
          </label>
          <input
            onChange={handleAdditionalFormData}
            className="mb-4 mt-1 block h-12 w-5/12 self-end rounded border border-solid bg-input-bg p-2 focus:border-b-2 focus:border-b-additional-color focus:outline-none"
            type="text"
            id="postalCode"
            name="postalCode"
            value={additionalFormData.postalCode}
          />
          {/* ====== */}
          <label
            htmlFor="nationality"
            className="ml-[100px] font-extralight text-gray-400"
          >
            Nationality
          </label>
          <input
            onChange={handleAdditionalFormData}
            className="mb-4 mt-1 block h-12 w-5/12 self-end rounded border border-solid bg-input-bg p-2 focus:border-b-2 focus:border-b-additional-color focus:outline-none"
            type="text"
            id="nationality"
            name="nationality"
            value={additionalFormData.nationality}
          />
          {/* ====== */}
          <label
            htmlFor="date_birth"
            className="ml-[100px] font-extralight text-gray-400"
          >
            Date Of Birth
          </label>
          <input
            onChange={handleAdditionalFormData}
            className=" mb-4 mt-1 block h-12 w-5/12 self-end rounded border border-solid bg-input-bg p-2 text-gray-400 focus:border-b-2  focus:border-b-additional-color focus:outline-none"
            type="date"
            id="date_birth"
            name="date_birth"
            value={additionalFormData.date_birth}
          />
        </form>
      )}
    </>
  )
}

export default PersonalDetails
