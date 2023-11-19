import { ReactNode, useEffect, useRef, useState, useLayoutEffect } from 'react'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

interface IProps {
  tag: React.RefObject<HTMLElement>
}
const Pdf: React.FC<IProps> = ({ tag }) => {
  const pdfRef = useRef<HTMLDivElement>(null)

  async function handleDownload() {
    const pdf_settings = {
      jsPdf: {
        unit: 'mm',
        format: [210, 297],
      },
      margin: 0,
      format: 'PNG',
      dataUrl: {
        extension: 'image/png',
        quality: 1.0,
      },
    }
    const findWidth = [...tag.current!.classList].find((el) =>
      el.includes('w-'),
    )!

    tag.current!.classList.replace(findWidth, 'w-[1280px]')

    console.log(findWidth)

    //w-[1280px]
    const {
      dataUrl: { extension, quality },
      format,
      margin,
      jsPdf: { unit, format: pdf_format },
    } = pdf_settings

    const pdf = new jsPDF({
      unit: unit as any,
      format: [pdf_format[0], pdf_format[1]],
    })

    const pdfData = await html2canvas(pdfRef.current as HTMLElement)
    const imgWidth = pdf.internal.pageSize.getWidth() - 4 * margin
    const imgHeight = (pdfData.height * imgWidth) / pdfData.width

    pdf.addImage(
      pdfData.toDataURL(extension, quality),
      format,
      margin,
      margin,
      imgWidth,
      imgHeight,
    )

    pdf.save('download.pdf')
  }

  return (
    <div>
      <div
        id="pdf"
        className="flex flex-col justify-between font-math  w-full   h-full p-4 bg-white text-xl "
        ref={pdfRef}
      >
        {/* HEADER */}
        <section id="pdf__header" className="pdf__header text-center mb-6">
          <div className="flex justify-center font-bold text-2xl">
            <h2 className="mr-2 mb-2">Tim Stewart</h2>
            <p className="mb-2">Accountant</p>
          </div>
          <address>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </address>
        </section>
        <hr className="border border-solid border-black" />
        {/* Profile */}
        <section id="pdf__profile" className="flex justify-between p-2 my-6 ">
          <h3 className=" tracking-widest uppercase text-xl font-bold">
            profile
          </h3>
          <p className="float-right w-[856px]  leading-relaxed ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            praesentium aspernatur neque error odit similique ipsam! Et non
            temporibus repudiandae doloribus? Tempore odio magnam necessitatibus
            placeat, doloribus quos impedit praesentium?
          </p>
        </section>
        <hr className="border border-solid border-black" />
        {/* employment history */}
        <section id="pdf__work-history" className="p-6 pb-12">
          <h3 className=" tracking-widest uppercase text-xl font-bold">
            employment history
          </h3>
          <div>
            {/* First job history */}
            <div className="flex justify-between mt-4 mb-6">
              <p>Nov 2013 - Sep 2019</p>
              <div>
                <p className="ml-[-38px] text-2xl mb-2">
                  Staff Acciuntant, Dubone Partnership
                </p>
                <ul className="w-[500px] text-xl flex flex-col justify-center ">
                  <li className="py-2">
                    Managed accounts by analyzing costs and revenues
                  </li>
                  <li className="py-2">
                    Managed accounts by analyzing costs and revenues
                  </li>
                  <li className="py-2">
                    Managed accounts by analyzing costs and revenues
                  </li>
                </ul>
              </div>
              <p>New York</p>
            </div>

            {/* Second job history */}
            <div className="flex justify-between">
              <p>Jul 2010 - Sep 2013</p>
              <div className="pl-4">
                <p className="ml-[-38px] text-2xl mb-2">
                  Huntington Associates
                </p>
                <ul className="w-[500px] text-xl flex flex-col justify-center ">
                  <li className="py-2">
                    Managed accounts by analyzing costs and revenues
                  </li>
                  <li className="py-2">
                    Managed accounts by analyzing costs and revenues
                  </li>
                  <li className="py-2">
                    Managed accounts by analyzing costs and revenues
                  </li>
                </ul>
              </div>
              <p>Philadelphia</p>
            </div>
          </div>
        </section>
        <hr className="border border-solid border-black" />
        {/* education-history */}
        <section id="education-history" className="p-6 pb-12">
          <h3 className="text-xl tracking-widest font-bold uppercase">
            education history
          </h3>
          <div>
            {/* First eductaion history */}
            <div className="flex justify-between mt-4 mb-6">
              <p>Nov 2013 - Sep 2019</p>
              <div>
                <p className="ml-[-38px] text-2xl mb-2">
                  Master of Accountment
                </p>
                <ul className="w-[500px] ">
                  <li className="py-2">
                    Managed accounts by analyzing costs and revenues
                  </li>
                </ul>
              </div>
              <p>New York</p>
            </div>
            {/* Second eductaion history */}
            <div className="flex justify-between">
              <p>Jul 2010 - Sep 2013</p>
              <div className="pl-4">
                <p className="ml-[-32px] text-2xl mb-2">
                  Bachelor Degree in Collegue
                </p>
                <ul className="w-[500px] text-xl">
                  <li className="list-disc">
                    Managed accounts by analyzing costs and revenues
                  </li>
                </ul>
              </div>
              <p>Philadelphia</p>
            </div>
          </div>
        </section>
        <hr className="border border-solid border-black" />
        {/* skills */}
        <section id="skills" className="p-6 flex justify-between ">
          <h3 className="text-xl font-bold tracking-widest uppercase">
            Skills
          </h3>
          <ul className=" w-[856px] flex  flex-wrap justify-between">
            <li className="flex gap-3 m-2 mr-4">
              <p className="">Financial Reporting</p>-<p>2 years</p>
            </li>
            <li className="flex gap-4 m-2 mr-4">
              <p>Time Management</p>-<p>1 years</p>
            </li>
            <li className="flex gap-4 m-2 mr-4">
              <p>Time Management</p>-<p>3 years</p>
            </li>
            <li className="flex gap-4 m-2 mr-4">
              <p>Time Management</p>-<p>1 years</p>
            </li>
          </ul>
        </section>
        <hr className="border border-solid border-black" />
        {/* References */}
        <section id="references" className="p-6 flex justify-between">
          <h3 className="text-xl font-bold tracking-widest uppercase">
            References
          </h3>
          <ul className="w-[856px] flex flex-wrap gap-2">
            <li className="m-2 mt-0 mr-20">
              <p className="text-2xl">LeAnne Gaines</p>
              <address className="flex gap-2">
                <a href="mailto:" target="_blank">
                  leanne@gmail.com
                </a>
                <a href="tel:+1234567890" target="_blank">
                  +1 (234) 567-890
                </a>
              </address>
            </li>
            <li className="m-2 mt-0 mr-20">
              <p className="text-2xl">LeAnne Gaines</p>
              <address className="flex gap-2">
                <a href="mailto:" target="_blank">
                  leanne@gmail.com
                </a>
                <a href="tel:+1234567890" target="_blank">
                  +1 (234) 567-890
                </a>
              </address>
            </li>
            <li className="m-2 mt-0 mr-20">
              <p className="text-2xl">LeAnne Gaines</p>
              <address className="flex gap-2">
                <a href="mailto:" target="_blank">
                  leanne@gmail.com
                </a>
                <a href="tel:+1234567890" target="_blank">
                  +1 (234) 567-890
                </a>
              </address>
            </li>
            <li className="m-2 mt-0 mr-20">
              <p className="text-2xl">LeAnne Gaines</p>
              <address className="flex gap-2">
                <a href="mailto:" target="_blank">
                  leanne@gmail.com
                </a>
                <a href="tel:+1234567890" target="_blank">
                  +1 (234) 567-890
                </a>
              </address>
            </li>
            <li className="m-2 mt-0 mr-20">
              <p className="text-2xl">LeAnne Gaines</p>
              <address className="flex gap-2">
                <a href="mailto:" target="_blank">
                  leanne@gmail.com
                </a>
                <a href="tel:+1234567890" target="_blank">
                  +1 (234) 567-890
                </a>
              </address>
            </li>
          </ul>
        </section>
      </div>
      <button
        className="fixed  rounded-lg p-2 text-center right-6 bottom-4 text-white bg-additional-color"
        onClick={handleDownload}
      >
        Download PDF
      </button>
    </div>
  )
}

export default Pdf
