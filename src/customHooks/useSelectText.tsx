import { useState } from 'react'

const useSelectText = (): [string, (value: string) => void] => {
  const [data, setData] = useState<string>('')

  function saveData(value: string) {
    setData(value)
  }

  return [data, saveData]
}

export default useSelectText
