import { useState } from "react"
import getAxiosInstance from "../utils/axios"

export default function useFetchButton() {

  const [isLoading, setIsLoading] = useState(false)
  const [apiData, setApiData] = useState(null)
  const [apiError, setApiError] = useState(null)
  const [apiButtonId, setApiButtonId] = useState()

  function fetchDATA(url, method, data, id, token) {
    setApiButtonId(id)
    setIsLoading({ [id]: true })
    return getMethodType(url, method, data, token)
      .then(res => {
        setApiData(res.data)
        return res
      }
      )
      .catch((e) => {
        setApiError({ e, [id]: true })
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return {
    isLoading,
    apiData,
    apiError,
    apiButtonId,
    fetchDATA
  }
}


function getMethodType(url, method, data, token) {
  switch (method) {
    case 'get':
      return getAxiosInstance()[method](url)
    case 'post':
      return getAxiosInstance()[method](url, data)
    default:
      break;
  }
}
