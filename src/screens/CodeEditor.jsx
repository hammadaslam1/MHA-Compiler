import React, { useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/theme-monokai";
import ThemeSwitches from "../components/switches/ThemeSwitches";

const CodeEditor = () => {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("javascript");
  const [output, setOutput] = useState("");
  const [isDark, setIsDark] = useState(true);
  // document.getElementById('body').style.backgroundColor = isDark ? '#272727' : '#ccc'
  const handleTheme = () => {
    setIsDark(!isDark);
    // document.getElementById('body').style.backgroundColor = isDark ? '#272727' : '#ccc'
  };

  const handleCodeChange = (newCode) => {
    setCode(newCode);
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const runCode = () => {
    // handleTheme();
    let newOutput = "";

    switch (language) {
      // case 'python':
      //     try {
      //         newOutput = evalPython(code);
      //     } catch (error) {
      //         newOutput = error.toString();
      //     }
      //     break;
      case "javascript":
        try {
          newOutput = evalJS(code);
        } catch (error) {
          newOutput = error.toString();
        }
        break;
      // Add cases for other languages here
      default:
        newOutput = "Language not supported for execution";
    }

    setOutput(newOutput);
  };

  // const evalPython = (pythonCode) => {
  //     // Ensure Skulpt is loaded
  //     if (typeof Sk === 'undefined') {
  //         return 'Skulpt is not loaded. Please include Skulpt library.';
  //     }

  //     // Initialize Skulpt
  //     Sk.configure({
  //         output: (text) => {
  //             console.log(text); // Log Skulpt output to the console for debugging
  //         },
  //         read: (x) => {
  //             if (Sk.builtinFiles === undefined || Sk.builtinFiles['files'][x] === undefined) {
  //                 throw 'File not found: ' + x;
  //             }
  //             return Sk.builtinFiles['files'][x];
  //         },
  //     });

  //     try {
  //         // Execute Python code
  //         const output = Sk.misceval.runAll(`__main__`, Sk.parse(`__main__`, pythonCode));
  //         return output.$d['$jsstr']();
  //     } catch (error) {
  //         return 'Error occurred: ' + error.toString();
  //     }
  // };

  const evalJS = (javascriptCode) => {
    let capturedOutput = "";
    const originalConsoleLog = console.log;
    const originalConsoleError = console.error;

    // Override console.log and console.error to capture logs and errors
    console.log = (...args) => {
      capturedOutput += args.join(" ") + "\n";
    };
    console.error = (...args) => {
      capturedOutput += "Error: " + args.join(" ") + "\n";
    };

    try {
      // Execute JavaScript code
      const result = eval(javascriptCode);
      if (result !== undefined && result !== null) {
        capturedOutput += "Output: " + result + "\n";
      }
    } catch (error) {
      capturedOutput += "Error: " + error.toString() + "\n";
    } finally {
      // Restore original console.log and console.error
      console.log = originalConsoleLog;
      console.error = originalConsoleError;
    }

    return capturedOutput;
  };

  return (
    <div className="main">
      <h2 className="heading">
        MHA Compiler
        <span>(currently supporting only javascript)</span>
      </h2>
      <div className="titles">
        <div
          style={{
            flex: 1,
            display: "flex",
            padding: 20,
            justifyContent: "space-between",
          }}
        >
          <select value={language} onChange={handleLanguageChange}>
            {/* <option value="python">Python</option> */}
            <option value="javascript">JavaScript</option>
            {/* <option value="c_cpp">C/C++</option> */}
          </select>
          <button onClick={runCode}>Run Code</button>
        </div>
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "space-between",
            padding: 20,
          }}
        >
          <h3>Output:</h3>
          <ThemeSwitches />
        </div>
      </div>
      <div className="boxes">
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <AceEditor
            mode={language}
            theme={isDark ? "monokai" : ""}
            onChange={handleCodeChange}
            value={code}
            name="code-editor"
            editorProps={{ $blockScrolling: true }}
          />
        </div>

        <div
          style={{
            flex: 1,
            backgroundColor: isDark ? "#2F3129" : "#ccc",
            overflow: "auto",
            border: isDark ? "2px solid transparent" : "2px solid #777777",
          }}
        >
          <pre>{output}</pre>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
