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
        className="flex h-full w-full flex-col  justify-between   bg-white p-4 font-math text-xl "
        ref={pdfRef}
      >
        {/* HEADER */}
        <section id="pdf__header" className="pdf__header mb-6 text-center">
          <div className="flex justify-center text-2xl font-bold">
            <h2 className="mb-2 mr-2">Tim Stewart</h2>
            <p className="mb-2">Accountant</p>
          </div>
          <address>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </address>
        </section>
        <hr className="border border-solid border-black" />
        {/* Profile */}
        <section id="pdf__profile" className="my-6 flex justify-between p-2 ">
          <h3 className=" text-xl font-bold uppercase tracking-widest">
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
          <h3 className=" text-xl font-bold uppercase tracking-widest">
            employment history
          </h3>
          <div>
            {/* First job history */}
            <div className="mb-6 mt-4 flex justify-between">
              <p>Nov 2013 - Sep 2019</p>
              <div>
                <p className="mb-2 ml-[-38px] text-2xl">
                  Staff Acciuntant, Dubone Partnership
                </p>
                <ul className="flex w-[500px] flex-col justify-center text-xl ">
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
                <p className="mb-2 ml-[-38px] text-2xl">
                  Huntington Associates
                </p>
                <ul className="flex w-[500px] flex-col justify-center text-xl ">
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
          <h3 className="text-xl font-bold uppercase tracking-widest">
            education history
          </h3>
          <div>
            {/* First eductaion history */}
            <div className="mb-6 mt-4 flex justify-between">
              <p>Nov 2013 - Sep 2019</p>
              <div>
                <p className="mb-2 ml-[-38px] text-2xl">
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
                <p className="mb-2 ml-[-32px] text-2xl">
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
        <section id="skills" className="flex justify-between p-6 ">
          <h3 className="text-xl font-bold uppercase tracking-widest">
            Skills
          </h3>
          <ul className=" flex w-[856px]  flex-wrap justify-between">
            <li className="m-2 mr-4 flex gap-3">
              <p className="">Financial Reporting</p>-<p>2 years</p>
            </li>
            <li className="m-2 mr-4 flex gap-4">
              <p>Time Management</p>-<p>1 years</p>
            </li>
            <li className="m-2 mr-4 flex gap-4">
              <p>Time Management</p>-<p>3 years</p>
            </li>
            <li className="m-2 mr-4 flex gap-4">
              <p>Time Management</p>-<p>1 years</p>
            </li>
          </ul>
        </section>
        <hr className="border border-solid border-black" />
        {/* References */}
        <section id="references" className="flex justify-between p-6">
          <h3 className="text-xl font-bold uppercase tracking-widest">
            References
          </h3>
          <ul className="flex w-[856px] flex-wrap gap-2">
            <li className="m-2 mr-20 mt-0">
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
            <li className="m-2 mr-20 mt-0">
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
            <li className="m-2 mr-20 mt-0">
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
            <li className="m-2 mr-20 mt-0">
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
            <li className="m-2 mr-20 mt-0">
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
        className="fixed  bottom-4 right-6 rounded-lg bg-additional-color p-2 text-center text-white"
        onClick={handleDownload}
      >
        Download PDF
      </button>
    </div>
  )
}

export default Pdf
