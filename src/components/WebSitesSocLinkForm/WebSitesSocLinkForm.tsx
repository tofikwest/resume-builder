import { ChangeEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { ADD } from '../../redux/pdf/pdfSlice'
import { WEBSITE_SOC_LINK } from '../../redux/pdf/constants'
import { IWebSitesSocLink } from '../../redux/pdf/types'

interface IProps {
  handleBtnAddTrigger: () => void
}

const WebSitesSocLinkForm: React.FC<IProps> = (props: IProps) => {
  const { handleBtnAddTrigger } = props
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
      className=" my-4 ml-4 flex h-full w-11/12 select-none flex-col justify-between  rounded-xl border  border-dashed border-gray-300 p-4 font-form-family md:w-[58%] lg:w-[62%] 2xl:text-lg"
    >
      <div className="lg:flex lg:gap-14 xl:gap-5">
        <label htmlFor="label" className="w-full font-light text-gray-400 ">
          Label
          <input
            className={`mt-1  block w-full rounded border border-solid bg-input-bg p-2 placeholder:font-extralight focus:border-b-2 focus:border-b-additional-color focus:outline-none `}
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
            className="mt-1 block  w-full self-end rounded border border-solid bg-input-bg p-2 placeholder:font-extralight focus:border-b-2 focus:border-b-additional-color focus:outline-none   "
            type="text"
            id="levelWebSites"
            name="link"
            onChange={handleForm}
            value={localData.link}
          />
        </label>
      </div>
      <div className="mt-4  flex gap-2 self-end  md:w-7/12">
        <button
          onClick={handleSubmit}
          className=" mt-4 h-[42px] w-full rounded  bg-additional-color p-2  text-gray-100 hover:bg-additional-hover-color focus:bg-additional-hover-color"
        >
          Save
        </button>
        <button
          onClick={handleBtnAddTrigger}
          className=" mt-4 h-[42px]  rounded bg-red-400 p-2 text-gray-100 hover:bg-red-500 focus:bg-red-500 "
        >
          Cancel
        </button>
      </div>
    </form>
  )
}

export default WebSitesSocLinkForm
