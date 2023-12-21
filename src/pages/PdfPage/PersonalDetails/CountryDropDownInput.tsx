import { ChangeEvent } from 'react'
import countryList from '../../../helpers/countryList'

interface IProps {
  handleMainFormData: (e: ChangeEvent<HTMLSelectElement>) => void
}

const CountryDropDownInput = (props: IProps) => {
  const { handleMainFormData } = props

  return (
    <>
      <label
        htmlFor="country"
        className=" w-full self-end font-light text-gray-400  md:flex md:w-[50%] md:flex-col md:items-end 2xl:text-lg"
      >
        <p className="w-10/12">Country</p>
        <select
          id="country"
          name="country"
          onChange={handleMainFormData}
          className="mb-4 mt-1 block h-12 w-full cursor-pointer rounded border border-solid bg-input-bg p-2 text-gray-800 focus:border-b-2 focus:border-b-additional-color  focus:outline-none md:w-10/12 2xl:text-lg"
        >
          {countryList.map((country) => (
            <option
              key={country}
              value={country !== countryList[0] ? country : ''}
            >
              {country}
            </option>
          ))}
        </select>
      </label>
    </>
  )
}

export default CountryDropDownInput
