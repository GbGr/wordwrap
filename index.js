module.exports = function (str, constaint) {
  let words = str.split(/\s/);
  let results = [];
  let ruggednesses = [];
  let len = words.length;
  for (let i = 0; i <= len; i++) {
    results.push([]);
    ruggednesses.push([]);
  }
  (function calcRuggedness(start, end) {
    if (typeof ruggednesses[start][end] !== 'undefined') return ruggednesses[start][end];
    if (start === end) return 0;

    let wordsSegment = words.slice(start, end);
    let lineLength = wordsSegment.reduce(((res, word) => (res + word.length + 1)), -1);

    if (lineLength <= constaint || end - start === 1) {
      results[start][end] = wordsSegment.join(' ');
      return ruggednesses[start][end] = Math.pow(constaint - lineLength, 2);
    }

    let record = Infinity;
    let breakIdx = -1;

    for (let idx = start + 1; idx < end; idx++) {
      let result = calcRuggedness(start, idx) + calcRuggedness(idx, end);
      if (result <= record) {
        record = result;
        breakIdx = idx;
      }
    }

    // TODO: Необходимо хранить индекс слова перед которым необходимо вставить разрыв строки
    results[start][end] = results[start][breakIdx] + '\n' + results[breakIdx][end];
    return ruggednesses[start][end] = record;
  })(0, words.length);
  return results[0][words.length];
};