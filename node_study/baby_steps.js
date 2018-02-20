//从命令行接受一个或多个数字，并打印出他们的和
function sum(argv){
  var total = -1;

  if(argv.length == 1){
    total = Number(argv[0]);
  } else {
    total = argv.reduce(getSum)
  }

  console.log(total)
}

function getSum(total,num){
   return Number(total)+Number(num)
}

sum(process.argv.slice(2))
