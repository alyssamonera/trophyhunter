module.exports = {
  module: {
    // Shut off warnings about using pre-built javascript files
    // as Quill.js unfortunately ships one as its `main`.
    noParse: /node_modules\/quill\/dist/
  }
}
