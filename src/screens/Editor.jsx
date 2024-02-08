import React, { useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/theme-monokai";

import {
  Box,
  Button,
  Card,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { Styles } from "../styles/Styles";
import {
  CPP,
  JAVA,
  JAVASCRIPT,
  KOTLIN,
  PYTHON,
  SQL,
} from "../compilers/Categories";
import CustomAceEditor from "../compilers/CustomAceEditor";
import { Compile } from "../compilers/Compile";

const Editor = () => {
  const [language, setLanguage] = useState(JAVASCRIPT);
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const handleChange = (event) => {
    setLanguage(event.target.value);
    alert(language);
  };

  // const handleCodeChange = (event) => {
  //   setCode(event.target.value);
  // };

  const handleEditor = () => {
    alert(language);
    console.log(code);
    const newOutput = Compile({ language, code });
    console.log(newOutput);
    setOutput(newOutput);
  };
  return (
    <>
      <Card sx={Styles.titleCard}>
        <Typography variant="h4">MHA Compilers</Typography>
        <Typography variant="caption">
          <i>(Currently supporting JavaScript)</i>
        </Typography>
      </Card>
      <Card sx={Styles.editorCard}>
        <Box sx={Styles.editorBoxes}>
          <Card sx={[Styles.editorHead]} elevation={0}>
            {/* <FormControl variant="outlined" sx={Styles.select}> */}
            {/* <InputLabel id="demo-simple-select-label" sx={{ color: "#fff" }}>
                Language
              </InputLabel> */}
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={language}
              onChange={(e) => {
                handleChange(e);
              }}
              sx={[
                Styles.select,
                { color: "#fff", backgroundColor: "#4b4b4b" },
              ]}
            >
              <MenuItem value={JAVASCRIPT}>JavaScript</MenuItem>
              <MenuItem value={PYTHON}>Python</MenuItem>
              {/* <MenuItem value={CPP}>C/C++</MenuItem>
              <MenuItem value={KOTLIN}>Kotlin</MenuItem>
              <MenuItem value={JAVA}>Java</MenuItem>
              <MenuItem value={SQL}>SQL</MenuItem> */}
            </Select>
            {/* </FormControl> */}
            <Button
              variant="contained"
              sx={Styles.runBtn}
              onClick={handleEditor}
            >
              run
            </Button>
          </Card>
          {/* <Card sx={Styles.editorHead} elevation={0}>
            
          </Card> */}
        </Box>
        <Box sx={Styles.editorBoxes}>
          <Card sx={Styles.editor}>
            <CustomAceEditor
              mode={language}
              theme="monokai"
              // handleCodeChange={handleCodeChange}
              code={code}
              setCode={setCode}
              height="500px"
              width="100%"
              sx={{ backgroundColor: "#5c5c5c" }}
            />
          </Card>
          <Card sx={Styles.output}>
            <Typography
              variant="h5"
              sx={{
                color: "#fff",
                borderBottom: "2px solid #4b4b4b",
                paddingY: 1,
              }}
            >
              Output
            </Typography>
            <Box>{output}</Box>
          </Card>
        </Box>
      </Card>
    </>
  );
};

export default Editor;
