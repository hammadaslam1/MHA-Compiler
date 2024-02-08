import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/theme-monokai";

export const EvalPython = (pythonCode) => {
  // Ensure Skulpt is loaded
  if (typeof Sk === "undefined") {
    return "Python is not ready yet to use";
  }

  // // Initialize Skulpt
  // Sk.configure({
  //   output: (text) => {
  //     console.log(text); // Log Skulpt output to the console for debugging
  //   },
  //   read: (x) => {
  //     if (
  //       Sk.builtinFiles === undefined ||
  //       Sk.builtinFiles["files"][x] === undefined
  //     ) {
  //       throw "File not found: " + x;
  //     }
  //     return Sk.builtinFiles["files"][x];
  //   },
  // });

  // try {
  //   // Execute Python code
  //   const output = Sk.misceval.runAll(
  //     `__main__`,
  //     Sk.parse(`__main__`, pythonCode)
  //   );
  //   return output.$d["$jsstr"]();
  // } catch (error) {
  //   return "Error occurred: " + error.toString();
  // }
};
