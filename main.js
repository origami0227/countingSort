let countingSort = (arr) => {
  let hashTable = {};
  let result = [];
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    //遍历数组
    if (!(arr[i] in hashTable)) {
      hashTable[arr[i]] = 1; //把数组内容写进来
    } else {
      hashTable[arr[i]] += 1;
    }
    if (arr[i] > max) {
      max = arr[i]; //max会成为数组内最大的
    }
  }

  for (let n = 0; n <= max; n++) {
    //遍历哈希表
    if (n in hashTable) {
      for (let i = 0; i < hashTable[n]; i++) {
        //再次遍历
        result.push(n);
      }
    }
  }
  return result;
};
