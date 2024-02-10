// CustomAceEditor.js

import React, { useEffect, useRef, useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/theme-monokai";

const CustomAceEditor = ({
  mode,
  theme,
  height,
  width,
  sx = {},
  code,
  setCode,
}) => {
  //   const [code, setCode] = useState("");
  const editorRef = useRef(null);
  //   const handleCodeChange = (event) => {
  //     setCode(event.target.value);
  //   };

  useEffect(() => {
    if (editorRef.current) {
      const aceEditor = editorRef.current.editor;
      aceEditor.session.setUseWorker(false);
      aceEditor.setOptions({
        autoIndent: false, // Disable auto-indentation
        enableBasicAutocompletion: false, // Disable auto-completion
        enableLiveAutocompletion: false, // Disable live auto-completion
        highlightActiveLine: false, // Disable highlighting of the active line
      });
    }
  }, []);

  return (
    <AceEditor
      ref={editorRef}
      mode={mode}
      theme={theme}
      height={height}
      width={width}
      style={{ ...sx }}
      value={code}
      onChange={setCode}
    />
  );
};

export default CustomAceEditor;
