import { useEffect, useState } from "react"
import getAxiosInstance from "../utils/axios"


export default function useFetch(url) {
  const [isLoading, setIsLoading] = useState(false)
  const [apiData, setApiData] = useState(null)
  const [isError, setIsError] = useState(null)
  const [apiError, setApiError] = useState(null)

  useEffect(() => {
    setIsLoading(true)
    getAxiosInstance().get(url)
      .then((res) => {
        setApiData(res.data)
        setIsError(false)
        return res
      })
      .catch((e) => {
        setIsError(true)
        setApiError({ e })
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])


  return {
    isLoading,
    apiData,
    isError,
    apiError,
  }
}
