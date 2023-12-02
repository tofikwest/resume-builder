import { useState, useEffect } from 'react'

const useSelectText = (): [string, (value: string) => void] => {
  const [data, setData] = useState<string>('')

  function saveData(value: string) {
    setData(value)
  }

  useEffect(() => {
    console.log('Data has changed inside the hook:', data)
  }, [data])

  return [data, saveData]
}

export default useSelectText
