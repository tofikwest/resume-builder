import { ChangeEvent, useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { ADD } from '../../redux/pdf/pdfSlice'
import { WEBSITE_SOC_LINK } from '../../redux/pdf/constants'
import { IWebSitesSocLink } from '../../redux/pdf/types'

const HTTP_STR = 'http'

const WebSitesSocLinkForm: React.FC = () => {
  const [localData, setLocalData] = useState<IWebSitesSocLink>({
    label: '',
    link: '',
  })

  const dispatch = useDispatch()

  function handleSubmit() {
    if (localData.label && localData.link) {
      dispatch(
        ADD({
          section: WEBSITE_SOC_LINK,
          data: localData,
        }),
      )
    }
    setLocalData({
      label: '',
      link: '',
    })
  }

  function handleForm(e: ChangeEvent<HTMLInputElement>) {
    setLocalData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className=" my-4 ml-4 flex h-full w-11/12 select-none flex-col justify-between  rounded-xl border  border-dashed border-gray-300 p-4 font-form-family lg:w-6/12"
    >
      <div className="lg:flex lg:gap-20 xl:gap-5">
        <label htmlFor="label" className="w-full font-light text-gray-400 ">
          Label
          <input
            className={`  block w-full rounded border border-solid bg-input-bg p-2 placeholder:font-extralight focus:border-b-2 focus:border-b-additional-color focus:outline-none `}
            type="text"
            id="label"
            name="label"
            onChange={handleForm}
            value={localData.label}
          />
        </label>

        <label
          htmlFor="level"
          className="mt-2 block w-full font-light  text-gray-400 lg:mt-0  "
        >
          Link
          <input
            className="block  w-full self-end rounded border border-solid bg-input-bg p-2 placeholder:font-extralight focus:border-b-2 focus:border-b-additional-color focus:outline-none   "
            type="text"
            id="levelWebSites"
            name="link"
            onChange={handleForm}
            value={localData.link}
          />
        </label>
      </div>
      <button
        onClick={handleSubmit}
        className=" mt-4 h-[42px] w-full self-end rounded bg-additional-color p-2  text-gray-100   lg:self-center"
      >
        Save
      </button>
    </form>
  )
}

export default WebSitesSocLinkForm
