const parseArgs = () => {
  const parseArgsArr = process.argv.slice(2);

  for (let i = 0; i < parseArgsArr.length; i += 2) {
    const key = parseArgsArr[i].slice(2);
    const value = parseArgsArr[i + 1];
    console.log(`${key} is ${value}`);
  }
};

parseArgs();
