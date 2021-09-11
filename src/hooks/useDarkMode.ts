import { Dispatch, SetStateAction } from "react";
import { useLocalStorage } from "./useLocalStorage";

// sets scrollY position of window based on a setting condition, i.e. when api calls are done
// also sets the scroll position when unmounting, i.e. a user navigates to a different page
export const useDarkMode = (): [boolean, Dispatch<SetStateAction<boolean>>,boolean] => {
  const [isDarkModel, setIsDarkMode,remove,isLoading] = useLocalStorage("isDarkMode", false);
  return [isDarkModel, setIsDarkMode,isLoading];
};
