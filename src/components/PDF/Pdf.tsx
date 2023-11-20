import { ReactNode, useEffect, useRef, useState, useLayoutEffect } from 'react'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

const Pdf = () => {
  const [page, setPage] = useState(false)
  const btn = useRef<HTMLElement>(null)

  function handlePage() {
    setPage((prev) => !prev)
  }

  return <div className="relative ">{!page}</div>
}

export default Pdf
