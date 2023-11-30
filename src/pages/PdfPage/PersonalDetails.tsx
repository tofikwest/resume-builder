import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { ADD } from '../../redux/pdf/pdfSlice'
import { PERSONAL_DETAILS } from '../../redux/pdf/constants'

const PersonalDetails: React.FC = () => {
  const [currentWidth, setCurrentWidth] = useState(window.innerWidth)
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

  useEffect(() => {
    setCurrentWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [currentWidth])

  function handleResize() {
    setCurrentWidth(window.innerWidth)
  }

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
    <section className="">
      <h2 className="my-2 ml-3 block text-xl font-semibold 2xl:text-3xl">
        Personal Details
      </h2>
      <form className="flex h-full select-none flex-col justify-between  px-4 font-form-family md:flex-row md:flex-wrap md:items-center ">
        <label
          htmlFor="jobTitle"
          className="inline w-full font-extralight text-gray-400   md:w-[50%] 2xl:text-lg"
        >
          Wanted Job Title
          <input
            onChange={handleMainFormData}
            className="mb-4 mt-1 block h-12 w-full rounded border border-solid bg-input-bg p-2 text-gray-800 placeholder:font-extralight focus:border-b-2 focus:border-b-additional-color  focus:outline-none md:w-10/12 2xl:text-lg"
            type="text"
            id="jobTitle"
            name="jobTitle"
            required
            placeholder="e.g HR"
            value={mainFormData.jobTitle}
          />
        </label>

        <label
          htmlFor="city"
          className="w-full self-end font-extralight text-gray-400 md:flex  md:w-[50%] md:flex-col md:items-end 2xl:text-lg"
        >
          <p className="md:ml-16 md:self-start lg:ml-20 xl:ml-14 2xl:ml-[100px]">
            City
          </p>
          <input
            onChange={handleMainFormData}
            className=" mb-4 mt-1 block h-12 w-full rounded border border-solid bg-input-bg p-2 text-gray-800 focus:border-b-2 focus:border-b-additional-color focus:outline-none md:w-10/12  2xl:text-lg "
            type="text"
            id="city"
            name="city"
            value={mainFormData.city}
            required
          />
        </label>

        <label
          htmlFor="first_name"
          className="w-full font-extralight  text-gray-400 md:flex md:w-[50%] md:flex-col 2xl:text-lg"
        >
          First Name
          <input
            onChange={handleMainFormData}
            className="mb-4 mt-1 block h-12 w-full rounded border border-solid bg-input-bg p-2 text-gray-800 focus:border-b-2 focus:border-b-additional-color   focus:outline-none md:w-10/12 2xl:text-lg"
            type="text"
            id="first_name"
            name="first_name"
            required
            value={mainFormData.first_name}
          />
        </label>

        <label
          htmlFor="last_name"
          className="w-full self-end font-extralight text-gray-400 md:flex  md:w-[50%] md:flex-col md:items-end 2xl:text-lg"
        >
          <p className="md:ml-16 md:self-start lg:ml-20 xl:ml-14 2xl:ml-[100px]">
            Last Name
          </p>
          <input
            onChange={handleMainFormData}
            className="mb-4 mt-1 block h-12 w-full rounded border border-solid bg-input-bg p-2 text-gray-800  focus:border-b-2 focus:border-b-additional-color focus:outline-none md:w-10/12  2xl:text-lg "
            type="text"
            id="last_name"
            name="last_name"
            value={mainFormData.last_name}
            required
          />
        </label>

        <label
          htmlFor="email"
          className="w-full font-extralight text-gray-400 md:flex md:w-[50%] md:flex-col 2xl:text-lg"
        >
          Email
          <input
            onChange={handleMainFormData}
            className=" mb-4 mt-1 block h-12 w-full  rounded border border-solid bg-input-bg p-2 text-gray-800 focus:border-b-2 focus:border-b-additional-color focus:outline-none  md:w-10/12 2xl:text-lg"
            type="email"
            id="email"
            inputMode="email"
            name="email"
            required
            value={mainFormData.email}
          />
        </label>

        <label
          htmlFor="country"
          className=" w-full self-end font-extralight text-gray-400 md:flex  md:w-[50%] md:flex-col md:items-end 2xl:text-lg"
        >
          <p className="md:ml-16 md:self-start lg:ml-20 xl:ml-14 2xl:ml-[100px]">
            Country
          </p>
          <input
            onChange={handleMainFormData}
            className="mb-4 mt-1 block h-12 w-full rounded border border-solid bg-input-bg p-2 text-gray-800 focus:border-b-2 focus:border-b-additional-color focus:outline-none  md:w-10/12 2xl:text-lg"
            type="text"
            id="country"
            name="country"
            required
            value={mainFormData.country}
          />
        </label>

        <label
          htmlFor="photo"
          className={`mb-4 mt-[28px] flex  h-12  w-full cursor-not-allowed items-center justify-center gap-2 rounded border border-solid border-gray-200 bg-input-bg p-2  text-sm font-extralight text-gray-400 hover:bg-[#d75151] hover:text-white focus:border-b-2
           md:w-5/12 2xl:text-lg 
          `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className=" h-8 w-8 text-center 2xl:h-10 2xl:w-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
            />
          </svg>

          <input
            onChange={handleMainFormData}
            className=" mb-4 mt-1 hidden h-12  w-full rounded  bg-input-bg p-2 focus:border-b-additional-color    focus:outline-none md:w-5/12"
            type="file"
            id="photo"
            name="photo"
            disabled={true}
            value={mainFormData.photo}
          />
          <p className="inline w-10/12 text-center text-gray-500 lg:text-sm 2xl:text-lg">
            This template doesn't support photo upload
          </p>
        </label>

        <label
          htmlFor="phone"
          className="w-full self-end font-extralight text-gray-400 md:flex  md:w-[50%] md:flex-col md:items-end 2xl:text-lg"
        >
          <p className="md:ml-16 md:self-start lg:ml-20 xl:ml-14 2xl:ml-[100px]">
            Phone
          </p>
          <input
            onChange={handleMainFormData}
            className="mb-4 mt-1 block h-12 w-full rounded border border-solid bg-input-bg p-2 text-gray-800 placeholder:font-extralight focus:border-b-2 focus:border-b-additional-color focus:outline-none   md:w-10/12 2xl:text-lg"
            type="tel"
            inputMode="tel"
            id="phone"
            name="phone"
            placeholder="e.g +380 96 156 75 13"
            required
            value={mainFormData.phone}
          />
        </label>
      </form>
      {/* Additional detail BTN */}
      <button
        type="button"
        className=" mb-2 ml-4 w-fit text-left text-sm text-additional-color hover:text-additional-hover-color"
        onClick={handleShowAdditionalForm}
      >
        {isNeedAdditionalForm ? (
          <>
            Hide additional details
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="ml-2 inline h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
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
              strokeWidth="2.5"
              stroke="currentColor"
              className="ml-2 inline h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </>
        )}
      </button>
      {isNeedAdditionalForm && (
        <form className="flex h-full select-none flex-col justify-between  px-4 font-form-family md:flex-row md:flex-wrap md:items-center ">
          <label
            htmlFor="address"
            className="inline font-extralight text-gray-400 md:w-[50%] 2xl:text-lg"
          >
            Address
            <input
              onChange={handleAdditionalFormData}
              className="mb-4 mt-1 block h-12 w-full  rounded border border-solid bg-input-bg p-2 text-gray-800 placeholder:font-light focus:border-b-2 focus:border-b-additional-color  focus:outline-none  md:w-10/12 2xl:text-lg"
              type="text"
              id="address"
              name="address"
              value={additionalFormData.address}
            />
          </label>

          <label
            htmlFor="driving_license"
            className="w-full self-end font-extralight text-gray-400 md:flex  md:w-[50%] md:flex-col md:items-end 2xl:text-lg"
          >
            <p className="md:ml-16 md:self-start lg:ml-20 xl:ml-14 2xl:ml-[100px]">
              Driving License
            </p>
            <input
              onChange={handleAdditionalFormData}
              className="mb-4 mt-1 block h-12 w-full rounded border border-solid bg-input-bg p-2 text-gray-800 focus:border-b-2 focus:border-b-additional-color focus:outline-none   md:w-10/12 2xl:text-lg"
              type="text"
              id="driving_license"
              name="driving_license"
              value={additionalFormData.driving_license}
            />
          </label>

          <label
            htmlFor="place_birth"
            className="w-full font-extralight text-gray-400 md:w-[50%] 2xl:text-lg"
          >
            Place Of Birth
            <input
              onChange={handleAdditionalFormData}
              className="mb-4 mt-1 block h-12 w-full rounded border border-solid bg-input-bg p-2 text-gray-800 focus:border-b-2 focus:border-b-additional-color focus:outline-none md:w-10/12 2xl:text-lg"
              type="text"
              id="place_birth"
              name="place_birth"
            />
          </label>

          <label
            htmlFor="postalCode"
            className="w-full self-end font-extralight text-gray-400 md:flex  md:w-[50%] md:flex-col md:items-end 2xl:text-lg"
          >
            <p className="md:ml-16 md:self-start lg:ml-20 xl:ml-14 2xl:ml-[100px]">
              Postal Code
            </p>
            <input
              onChange={handleAdditionalFormData}
              className="d mb-4 mt-1 block  h-12 w-full rounded border border-solid bg-input-bg p-2 text-gray-800 focus:border-b-2 focus:border-b-additional-color   focus:outline-none md:w-10/12"
              type="text"
              id="postalCode"
              name="postalCode"
              value={additionalFormData.postalCode}
            />
          </label>

          <label
            htmlFor="nationality"
            className="inline w-full font-extralight text-gray-400 md:w-[50%] 2xl:text-lg"
          >
            Nationality
            <input
              onChange={handleAdditionalFormData}
              className="mb-4 mt-1 block h-12 w-full rounded border border-solid bg-input-bg p-2 text-gray-800 focus:border-b-2 focus:border-b-additional-color focus:outline-none   md:w-10/12 "
              type="text"
              id="nationality"
              name="nationality"
              value={additionalFormData.nationality}
            />
          </label>

          <label
            htmlFor="date_birth"
            className="w-full self-end font-extralight text-gray-400 md:flex  md:w-[50%] md:flex-col md:items-end 2xl:text-lg"
          >
            <p className="md:ml-16 md:self-start lg:ml-20 xl:ml-14 2xl:ml-[100px]">
              Date Of Birth
            </p>
            <input
              onChange={handleAdditionalFormData}
              className=" mb-4 mt-1 block h-12  w-full rounded border border-solid bg-input-bg p-2  text-gray-800  focus:border-b-2 focus:border-b-additional-color focus:outline-none  md:w-10/12 "
              type="month"
              lang="en"
              id="date_birth"
              name="date_birth"
              value={additionalFormData.date_birth}
            />
          </label>
        </form>
      )}
    </section>
  )
}

export default PersonalDetails
