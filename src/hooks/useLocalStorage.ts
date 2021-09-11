import {
  Dispatch,
  SetStateAction,
  useCallback,
  useState,
  useRef,
  useEffect,
} from "react";

export const useLocalStorage = <T>(
  key: string,
  initialValue?: T
): [T | undefined, Dispatch<SetStateAction<T | undefined>>, () => void,boolean] => {
  if (!key) {
    throw new Error("useLocalStorage key may not be falsy");
  }

  

  const deserializer = JSON.parse;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const initializer = useRef((key: string) => {
    try {
      const serializer = JSON.stringify;
      if (typeof window === "undefined") return;
      const localStorageValue = localStorage.getItem(key);
      if (localStorageValue !== null) {
        return deserializer(localStorageValue);
      } else {
        initialValue && localStorage.setItem(key, serializer(initialValue));
        return initialValue;
      }
    } catch {
      // If user is in private mode or has storage restriction
      // localStorage can throw. JSON.parse and JSON.stringify
      // can throw, too.
      return initialValue;
    }finally{
     setIsLoading(false)
    }
  });

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isLoading,setIsLoading]=useState(true)
  console.log(1)
  const [state, setState] = useState<T | undefined>(() =>
    initializer.current(key)
  );
 

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    console.log('hofe')
    if (typeof window !== "undefined") {
      setState(initializer.current(key));
    }
  }, [key]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const set: Dispatch<SetStateAction<T | undefined>> = useCallback(
    (valOrFunc) => {
      try {
        const newState =
          typeof valOrFunc === "function"
            ? (valOrFunc as Function)(state)
            : valOrFunc;
        if (typeof newState === "undefined") return;
        const value = JSON.stringify(newState);
        localStorage.setItem(key, value);
        setState(deserializer(value));
      } catch {
        // If user is in private mode or has storage restriction
        // localStorage can throw. Also JSON.stringify can throw.
      }
    },
    [key, setState]
  );

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const remove = useCallback(() => {
    try {
      localStorage.removeItem(key);
      setState(undefined);
    } catch {
      // If user is in private mode or has storage restriction
      // localStorage can throw.
    }
  }, [key, setState]);

  return [state, set, remove,isLoading];
};
