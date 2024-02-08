/* eslint-disable no-unused-vars */
/* eslint-disable no-eval */
export const EvalJS = (javascriptCode) => {
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
