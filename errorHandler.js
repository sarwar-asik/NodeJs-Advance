// console.log(module);

function errorHandler(error) {
  const { name, message, stack } = error;
  console.table({ name, message, stack }, "and", error);
  //  const logger= error({
  //     name,
  //     message,
  //     stack
  //   })
  //   console.log(logger);
}

// console.log(module.exports);

module.exports = errorHandler
