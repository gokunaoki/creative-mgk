import React,{FC,Dispatch, SetStateAction} from "react";
import styled, { css } from "styled-components";
import Toggle from "react-toggle";
import { GiSun } from "react-icons/gi";
import { RiMoonFill } from "react-icons/ri";
import { useDarkMode } from "../../hooks/useDarkMode";

type ColorPickProps={
  isDarkMode:boolean;
  setIsDarkMode:Dispatch<SetStateAction<boolean>>
}
const ColorPick:FC<ColorPickProps> = (props) => {
  const {isDarkMode,setIsDarkMode}=props
  // if (typeof window === "undefined") return null;
  // const [isDarkMode, seIsDarkMode, isLoading] = useDarkMode();
  // console.log(isLoading);
  // // if (isLoading) return null;
  return (
    <StyledToggleWrap>
      <Toggle
        defaultChecked={isDarkMode}
        onChange={(e) => setIsDarkMode(e.target.checked)}
        icons={{
          checked: (
            <RiMoonFill
              color="orange"
              size={16}
              style={{ position: "relative", top: -3 }}
            />
          ),
          unchecked: (
            <GiSun
              color="orange"
              size={16}
              style={{ position: "relative", top: -3 }}
            />
          ),
        }}
      />
    </StyledToggleWrap>
  );
};

export default ColorPick;

const StyledToggleWrap = styled.div`
  line-height: 1;
  
  .react-toggle {
    touch-action: pan-x;

    display: inline-block;
    position: relative;
    cursor: pointer;
    background-color: transparent;
    border: 0;
    padding: 0;

    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-tap-highlight-color: transparent;
  }

  .react-toggle-screenreader-only {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

  .react-toggle--disabled {
    cursor: not-allowed;
    opacity: 0.5;
    -webkit-transition: opacity 0.25s;
    transition: opacity 0.25s;
  }

  .react-toggle-track {
    width: 50px;
    height: 24px;
    padding: 0;
    border-radius: 30px;
    background-color: #4d4d4d;
    -webkit-transition: all 0.2s ease;
    -moz-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }

  .react-toggle:hover:not(.react-toggle--disabled) .react-toggle-track {
    background-color: #000000;
  }

  .react-toggle--checked .react-toggle-track {
    background-color: black;
  }

  .react-toggle--checked:hover:not(.react-toggle--disabled)
    .react-toggle-track {
    background-color: black;
  }

  .react-toggle-track-check {
    position: absolute;
    width: 14px;
    height: 10px;
    top: 0px;
    bottom: 0px;
    margin-top: auto;
    margin-bottom: auto;
    line-height: 0;
    left: 8px;
    opacity: 0;
    -webkit-transition: opacity 0.25s ease;
    -moz-transition: opacity 0.25s ease;
    transition: opacity 0.25s ease;
  }

  .react-toggle--checked .react-toggle-track-check {
    opacity: 1;
    -webkit-transition: opacity 0.25s ease;
    -moz-transition: opacity 0.25s ease;
    transition: opacity 0.25s ease;
  }

  .react-toggle-track-x {
    position: absolute;
    width: 10px;
    height: 10px;
    top: 0px;
    bottom: 0px;
    margin-top: auto;
    margin-bottom: auto;
    line-height: 0;
    right: 10px;
    opacity: 1;
    -webkit-transition: opacity 0.25s ease;
    -moz-transition: opacity 0.25s ease;
    transition: opacity 0.25s ease;
  }

  .react-toggle--checked .react-toggle-track-x {
    opacity: 0;
  }

  .react-toggle-thumb {
    transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1) 0ms;
    position: absolute;
    top: 1px;
    left: 1px;
    width: 22px;
    height: 22px;
    border: 1px solid #4d4d4d;
    border-radius: 50%;
    background-color: #fafafa;

    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;

    -webkit-transition: all 0.25s ease;
    -moz-transition: all 0.25s ease;
    transition: all 0.25s ease;
  }

  .react-toggle--checked .react-toggle-thumb {
    left: 27px;
    -webkit-box-shadow: 0px 0px 5px 5px #26c6da;
    -moz-box-shadow: 0px 0px 5px 5px #26c6da;
    box-shadow: 0px 0px 5px 5px #26c6da;
  }

  .react-toggle--focus .react-toggle-thumb {
    -webkit-box-shadow: 0px 0px 3px 2px #26c6da;
    -moz-box-shadow: 0px 0px 3px 2px #26c6da;
    box-shadow: 0px 0px 2px 3px #26c6da;
  }

  .react-toggle:active:not(.react-toggle--disabled) .react-toggle-thumb {
    -webkit-box-shadow: 0px 0px 5px 5px #26c6da;
    -moz-box-shadow: 0px 0px 5px 5px #26c6da;
    box-shadow: 0px 0px 5px 5px #26c6da;
  }
`;
