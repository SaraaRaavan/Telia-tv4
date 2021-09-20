import { useState, useEffect, useCallback } from "react";
import { useErrorHandler } from "react-error-boundary";

/**
 * custom hook to fetch data and update state accordingly also used for error handling 
*/

const useAsync = (asyncFunction, immediate = true) => {
  const [status, setStatus] = useState("idle");
  const [value, setValue] = useState(null);
  const [error, setError] = useState(null);
  const handleError = useErrorHandler();

  const execute = useCallback(() => {
    setStatus("pending");
    setValue(null);
    setError(null);

    return asyncFunction() 
      .then(response => response.json())
      .then((response) => {
        setValue(response);
        setStatus("success");
      })
      .catch((error) => {
        setError(error);
        setStatus("error");
        handleError(error);
      });
  }, [asyncFunction, handleError]);

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);

  return { execute, status, value, error };
};

export { useAsync };
