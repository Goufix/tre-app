import React from "react";
import styled from "styled-components";
import InputScreen from "./InputScreen";
import OutputScreen from "./OutputScreen";

export const INPUT_SCREEN = "INPUT_SCREEN";
export const OUTPUT_SCREEN = "OUTPUT_SCREEN";

const Error = styled.div`
  font-family: monospace;
  font-weight: bold;
  font-size: 30px;
  color: red;
`;

export default function SwitchScreen(props) {
  switch (props.screen) {
    case INPUT_SCREEN:
      return <InputScreen />;
    case OUTPUT_SCREEN:
      return <OutputScreen />;
    default:
      return <Error>Error: Screen {props.screen} does not exist.</Error>;
  }
}
