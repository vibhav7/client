import useFetch from "../../hooks/useFetch"
import apiUrl from "../../utils/apiUrl"
import Attribute from "../ui/attribute"
import Button from "../ui/button"
import { useHistory } from "react-router-dom";
import getTotalTransactionAmount, { getCleverXFees } from "../../utils/transactionFees";

export default function TransactionDetail(props) {
  const history = useHistory()
  const { isLoading, apiData, apiError, isError } = useFetch(apiUrl.create_project)
  return (
    <>
      {isLoading && (<div>Loading</div>)}
      {isError && <p>Something went wrong...</p>}
      {apiData && (
        <div className="border border-blue-300 rounded-lg space-y-4 shadow-2xl">
          <div className="p-8 ">
            <div className="">
              <Attribute
                containerClassName="space-x-4 md:space-x-60"
                labelClassName="text-gray-700 font-medium text-base"
                label={apiData.name}
                valueClassName="text-lg text-blue-500 font-bold"
                value={apiData.cost} />
              <div className="text-right text-gray-400 text-sm font-medium">
                <div>Total: {getTotalTransactionAmount(apiData.cost)}</div>
                <div>(CleverX fee +20%): {getCleverXFees(apiData.cost)}</div>
              </div>
            </div>
          </div>
          <div className="p-8 rounded-lg rounded-t-none bg-white space-y-8">
            <div className="text-gray-800 text-sm">{apiData.summary}</div>
            <div className="text-right">
              <Button name="cancel" onClick={() => history.push("/")}>Cancel</Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}