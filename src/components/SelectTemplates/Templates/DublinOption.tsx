import resumePdfIcon from '../../../assets/icons/resume.png'

interface IProps {
  width?: number
}

const DublinOption: React.FC<IProps> = () => {
  return (
    <img
      src={resumePdfIcon}
      alt="Dublin template resume"
      width={325}
      className="w-[325px] rounded-lg border-2 border-solid shadow-md shadow-black 2xl:w-5/12"
    />
  )
}

export default DublinOption
