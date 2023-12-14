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
      className="my-4 ml-4 flex h-full w-11/12 select-none flex-col justify-between gap-4 rounded-xl border border-dashed border-gray-300  p-4 font-form-family  md:h-[105px]  md:w-[96%] md:flex-row lg:w-[96.4%] 2xl:text-lg"
    >
      <div className="md:flex md:gap-14 xl:gap-5">
        <label htmlFor="label" className=" font-light text-gray-400 ">
          Label
          <input
            className={` block w-full rounded border border-solid bg-input-bg p-2 text-black placeholder:font-extralight focus:border-b-2 focus:border-b-additional-color focus:outline-none `}
            type="text"
            id="label"
            name="label"
            onChange={handleForm}
            value={localData.label}
          />
        </label>

        <label
          htmlFor="linkWebSites"
          className="mt-2 block w-full font-light text-gray-400  md:mt-0 lg:mt-0"
        >
          Link
          <input
            className="block w-full self-end rounded border border-solid bg-input-bg p-2 text-black placeholder:font-extralight focus:border-b-2 focus:border-b-additional-color focus:outline-none"
            type="text"
            id="linkWebSites"
            name="link"
            onChange={handleForm}
            value={localData.link}
          />
        </label>
      </div>
      <div className="flex justify-end gap-2 md:mb-[6px] md:w-7/12 md:self-end  lg:mb-[6px] 2xl:mb-[-1.5px]">
        <button
          onClick={handleSubmit}
          className="w-6/12 rounded bg-additional-color  p-1   text-gray-100 hover:bg-additional-hover-color focus:bg-additional-hover-color"
        >
          Save
        </button>
        <button
          onClick={handleBtnAddTrigger}
          className="rounded bg-slate-600 p-2 text-gray-100 hover:bg-slate-700 focus:bg-slate-700 "
        >
          Cancel
        </button>
      </div>
    </form>
  )
}

export default WebSitesSocLinkForm
