// Functions - how many args

function howManyArgs() {
  console.log(arguments.length);
}

howManyArgs("string", 45);
howManyArgs();
howManyArgs(12);
howManyArgs("string", 45, true, {});