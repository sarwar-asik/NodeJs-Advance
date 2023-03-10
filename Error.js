console.log(",,,,,,,,,Error.js connected //////");

async function getData() {
  try {
    undefined.find();
    const emailError = new Error("Email Already access");
    throw emailError;
  } catch (error) {
    // console.table({error,name:error.name,message:error.message,stack:error.stack});
    errorHandler(error);
  }
}
getData();

function errorHandler(error) {
  const { name, message, stack } = error;
  console.table({ name, message, stack }, error);
  //  const logger= error({
  //     name,
  //     message,
  //     stack
  //   })
  //   console.log(logger);
}
