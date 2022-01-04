function groupBy(collection, it) {
  return collection.reduce((obj, curr) => {
    if (typeof it === "string") {
      obj[curr[it]] = obj[curr[it]] || [];
      obj[curr[it]].push(curr);
    } else {
      obj[(() => it(curr))()] = obj[(() => it(curr))()] || [];
      obj[(() => it(curr))()].push(curr);
    }
    return obj;
  }, {});
}

console.log("a", groupBy([6.1, 4.2, 6.3], Math.floor));
// { 6: [6.1, 6.3], 4: [4.2] }

console.log("b", groupBy(["one", "two", "three"], "length"));
// { 3: ['one', 'two'], 5: ['three'] }

console.log("c", groupBy([{ age: 23 }, { age: 24 }], "age"));
// { 23: [{age: 23}], 24: [{age: 24}] }

console.log(
  "d",
  groupBy([1397639141184, 1363223700000], (timestamp) =>
    new Date(timestamp).getFullYear()
  )
);
// { 2013: [1363223700000], 2014: [1397639141184] }

console.log(
  "c",
  groupBy(
    [
      { title: "JavaScript: The Good Parts", rating: 8 },
      { title: "Aprendiendo Git", rating: 10 },
      { title: "Clean Code", rating: 9 },
    ],
    "rating"
  )
);
// { 8: [{ title: 'JavaScript: The Good Parts', rating: 8 }],
//   9: [{ title: 'Clean Code', rating: 9 }],
//   10: [{ title: 'Aprendiendo Git', rating: 10 }] }
