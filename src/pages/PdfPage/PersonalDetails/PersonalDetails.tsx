import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ADD } from '../../../redux/pdf/pdfSlice'
import { PERSONAL_DETAILS } from '../../../redux/pdf/constants'
import debounce from 'debounce'
import CountryDropDownInput from './CountryDropDownInput'

import { RootState } from '../../../redux/store'
import { templatesName } from '../../../helpers/constants/resumeTemplateNames'
import ImgSelectPage from '../../ImgSelectPage/ImgSelectPage'

const PersonalDetails: React.FC = () => {
  const currentTemplateName = useSelector(
    (state: RootState) => state.pdf.templateName.currentTemplateName,
  )

  const photoInStore: string | null | undefined = useSelector(
    (state: RootState) => state.pdf.personalDetails.photo,
  )

  const [currentWidth, setCurrentWidth] = useState(window.innerWidth)
  const [isDisabled, setDisabled] = useState<boolean>(true)

  const [isNeedAdditionalForm, setIsNeedAdditionalForm] =
    useState<Boolean>(false)

  const dispatch = useDispatch()

  interface IMainForm {
    jobTitle: string
    first_name: string
    email: string
    country: string
    last_name: string
    phone: string
    city: string
  }

  // * FORM DATA

  const [mainFormData, setMainFormdata] = useState<IMainForm>({
    jobTitle: '',
    first_name: '',
    email: '',
    country: '',
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
      debouncedDispatch()
    }, 300)
  }, [mainFormData, additionalFormData])

  useEffect(() => {
    setCurrentWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [currentWidth])

  useEffect(() => {
    if (currentTemplateName === templatesName.dublin) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }, [currentTemplateName])

  function handleResize() {
    setCurrentWidth(window.innerWidth)
  }

  const debouncedDispatch = debounce(() => {
    dispatch(
      ADD({
        section: PERSONAL_DETAILS,
        data: {
          ...mainFormData,
          ...additionalFormData,
        },
      }),
    )
  }, 500)

  function handleMainFormData(
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) {
    const value: string = e.target.value

    setMainFormdata((prev) => ({
      ...prev,
      [e.target.name]: value,
      photo: photoInStore,
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
    <section>
      <h2 className="my-2 ml-3 block text-xl font-semibold 2xl:text-2xl">
        Personal Details
      </h2>
      <form className="flex h-full select-none flex-col justify-between  px-4 font-form-family md:flex-row md:flex-wrap md:items-center ">
        <label
          htmlFor="jobTitle"
          className="inline w-full font-light text-gray-400   md:w-[50%] 2xl:text-lg"
        >
          Wanted Job Title
          <input
            onChange={handleMainFormData}
            className="mb-4 mt-1 block h-12 w-full rounded border border-solid bg-input-bg p-2 text-gray-800 placeholder:font-light focus:border-b-2 focus:border-b-additional-color  focus:outline-none md:w-10/12 2xl:text-lg"
            type="text"
            id="jobTitle"
            name="jobTitle"
            placeholder="e.g HR"
            value={mainFormData.jobTitle}
          />
        </label>

        <label
          htmlFor="city"
          className="w-full self-end font-light text-gray-400 md:flex  md:w-[50%] md:flex-col md:items-end 2xl:text-lg"
        >
          <p className="w-10/12">City</p>
          <input
            onChange={handleMainFormData}
            className=" mb-4 mt-1 block h-12 w-full rounded border border-solid bg-input-bg p-2 text-gray-800 focus:border-b-2 focus:border-b-additional-color focus:outline-none md:w-10/12  2xl:text-lg "
            type="text"
            id="city"
            name="city"
            value={mainFormData.city}
          />
        </label>

        <label
          htmlFor="first_name"
          className="w-full font-light  text-gray-400 md:flex md:w-[50%] md:flex-col 2xl:text-lg"
        >
          First Name
          <input
            onChange={handleMainFormData}
            className="mb-4 mt-1 block h-12 w-full rounded border border-solid bg-input-bg p-2 text-gray-800 focus:border-b-2 focus:border-b-additional-color   focus:outline-none md:w-10/12 2xl:text-lg"
            type="text"
            id="first_name"
            name="first_name"
            value={mainFormData.first_name}
          />
        </label>

        <label
          htmlFor="last_name"
          className="w-full self-end font-light text-gray-400 md:flex  md:w-[50%] md:flex-col md:items-end 2xl:text-lg"
        >
          <p className="w-10/12">Last Name</p>
          <input
            onChange={handleMainFormData}
            className="mb-4 mt-1 block h-12 w-full rounded border border-solid bg-input-bg p-2 text-gray-800  focus:border-b-2 focus:border-b-additional-color focus:outline-none md:w-10/12  2xl:text-lg "
            type="text"
            id="last_name"
            name="last_name"
            value={mainFormData.last_name}
          />
        </label>

        <label
          htmlFor="email"
          className="w-full font-light text-gray-400 md:flex md:w-[50%] md:flex-col 2xl:text-lg"
        >
          Email
          <input
            onChange={handleMainFormData}
            className=" mb-4 mt-1 block h-12 w-full  rounded border border-solid bg-input-bg p-2 text-gray-800 focus:border-b-2 focus:border-b-additional-color focus:outline-none  md:w-10/12 2xl:text-lg"
            type="email"
            id="email"
            inputMode="email"
            name="email"
            value={mainFormData.email}
          />
        </label>

        <CountryDropDownInput handleMainFormData={handleMainFormData} />

        <label
          htmlFor="photo"
          className={`mb-4 mt-[28px] flex  h-12  w-full cursor-pointer  items-center gap-5 rounded text-sm font-light 
          text-gray-600 md:w-5/12 2xl:h-20 2xl:text-lg
          ${isDisabled ? 'cursor-not-allowed' : 'cursor-pointer'}
          `}
        >
          {photoInStore ? (
            <img
              src={photoInStore as string}
              className={`h-12 w-1/2  ${
                isDisabled ? 'cursor-not-allowed' : 'cursor-pointer'
              } bg-input-bg object-cover p-2  text-center 2xl:h-16 2xl:w-16`}
            />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className={`h-12 w-1/2 ${
                isDisabled ? 'cursor-not-allowed' : 'cursor-pointer'
              } bg-input-bg p-2 text-center  2xl:h-16 2xl:w-16`}
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
          )}

          <ImgSelectPage />

          <p
            className={`inline w-[150%] bg-white text-base  md:w-full lg:w-5/12  lg:text-sm xl:w-7/12 2xl:text-lg`}
          >
            {photoInStore ? 'Photo is saved' : 'Put your photo'}
          </p>
        </label>

        <label
          htmlFor="phone"
          className="w-full self-end font-light text-gray-400 md:flex  md:w-[50%] md:flex-col md:items-end 2xl:text-lg"
        >
          <p className="w-10/12">Phone</p>
          <input
            onChange={handleMainFormData}
            className="mb-4 mt-1 block h-12 w-full rounded border border-solid bg-input-bg p-2 text-gray-800 placeholder:font-light focus:border-b-2 focus:border-b-additional-color focus:outline-none   md:w-10/12 2xl:text-lg"
            type="tel"
            inputMode="tel"
            id="phone"
            name="phone"
            placeholder="e.g +380 96 156 75 13"
            value={mainFormData.phone}
          />
        </label>
      </form>
      {/* Additional detail BTN */}
      <button
        type="button"
        className=" my-2 ml-4 w-fit text-left text-sm text-additional-color hover:text-additional-hover-color 2xl:text-base"
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
            className="inline font-light text-gray-400 md:w-[50%] 2xl:text-lg"
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
            htmlFor="postalCode"
            className="w-full self-end font-light text-gray-400 md:flex  md:w-[50%] md:flex-col md:items-end 2xl:text-lg"
          >
            <p className="w-10/12">Postal Code</p>
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
            htmlFor="date_birth"
            className="w-full self-end font-light text-gray-400 md:flex  md:w-[50%] md:flex-col md:items-end 2xl:text-lg"
          ></label>
        </form>
      )}
    </section>
  )
}

export default PersonalDetails
