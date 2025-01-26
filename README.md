# Express.js Silent Error Handling in Async Request Handlers

This repository demonstrates a common error in Express.js applications where errors from asynchronous operations within request handlers are silently swallowed, making debugging difficult.

The `bug.js` file shows an Express.js app that performs an asynchronous operation. If the operation fails, the error is not properly handled, leading to a silent failure.

The `bugSolution.js` file provides a corrected version with proper error handling, ensuring that errors are caught and reported appropriately.  This ensures better application stability and easier debugging.

## How to reproduce the bug:
1. Clone this repository.
2. Navigate to the directory.
3. Run `node bug.js`.
4. Refresh the page several times. You will notice that the server sometimes fails silently and the error is not logged anywhere.