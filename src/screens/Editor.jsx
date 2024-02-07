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
import { useState } from "react";

const Editor = () => {
  const [language, setLanguage] = useState("javascript");
  const handleChange = (event) => {
    setLanguage(event.target.value);
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
          <Card
            sx={[Styles.editorHead, { backgroundColor: "transparent" }]}
            elevation={0}
          >
            <FormControl variant="outlined" sx={Styles.select}>
              <InputLabel id="demo-simple-select-label" sx={{ color: "#fff" }}>
                Language
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={language}
                label="Language"
                onChange={handleChange}
                sx={{ color: "#fff" }}
              >
                <MenuItem value={"javascript"}>JavaScript</MenuItem>
                <MenuItem value={"python"}>Python</MenuItem>
                <MenuItem value={"c"}>C/C++</MenuItem>
                <MenuItem value={"kotlin"}>Kotlin</MenuItem>
                <MenuItem value={"java"}>Java</MenuItem>
                <MenuItem value={"sql"}>SQL</MenuItem>
              </Select>
            </FormControl>
            <Button variant="contained" sx={Styles.runBtn}>
              run
            </Button>
          </Card>
          <Card sx={Styles.editorHead}></Card>
        </Box>
        <Box sx={Styles.editorBoxes}>
          <Card sx={Styles.editor}></Card>
          <Card sx={Styles.output}></Card>
        </Box>
      </Card>
    </>
  );
};

export default Editor;
