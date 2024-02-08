import { Typography } from "@mui/material";
import { JAVASCRIPT, PYTHON } from "./Categories";
import { EvalJS } from "./EvalJS";
import { EvalPython } from "./EvalPython";

export const Compile = (props) => {
  // handleTheme();
  console.log(props.code);
  let newOutput = props.language;

  switch (props.language) {
    case PYTHON:
      try {
        newOutput = EvalPython(props.code);
      } catch (error) {
        newOutput = error.toString();
      }
      break;
    case JAVASCRIPT:
      try {
        newOutput = EvalJS(props.code);
      } catch (error) {
        newOutput = error.toString();
      }
      break;
    default:
      newOutput = "Language not supported for execution";
      return (
        <Typography variant="caption">
          <i>(Currently supporting JavaScript)</i>
        </Typography>
      );
  }

  //   setOutput(newOutput);
  return newOutput;
};
