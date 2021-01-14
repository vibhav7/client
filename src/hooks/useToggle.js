import { useState } from 'react';

function useToggle(initialValut = false) {
  const [isShow, setIsShow] = useState(initialValut)

  function setShow(newState) {
    setIsShow(newState)
  }

  return {
    isShow,
    setShow,
  }
}

export default useToggle;