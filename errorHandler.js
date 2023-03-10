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
const function2 =()=>{
    console.log("FUnc two for exports");
}
// console.log(module.exports);

// module.exports.errorHandler = errorHandler
// module.exports.function2 = function2 
// or //

module.exports ={ errorHandler,function2}

// console.log(module);
