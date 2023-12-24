interface IProps {
  width?: number
}

const DublinOption: React.FC<IProps> = () => {
  return (
    <img
      src={`https://s3.resume.io/cdn-cgi/image/width=1080,format=auto/uploads/local_template_image/image/488/persistent-resource/dublin-resume-templates.jpg`}
      alt="Dublin template resume"
      width={325}
      className="w-[325px] rounded-lg border-2 border-solid shadow-md shadow-black 2xl:w-5/12"
    />
  )
}

export default DublinOption
