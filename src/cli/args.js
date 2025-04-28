const parseArgs = () => {
  const parseArgsArr = process.argv.slice(2);
  const props = new Array();
  for (let i = 0; i < parseArgsArr.length; i += 2) {
    const key = parseArgsArr[i].slice(2);
    const value = parseArgsArr[i + 1];
    props.push(`${key} is ${value}`);
  }
  console.log(props.join(", "));
};

parseArgs();
