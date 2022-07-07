//map 陣列
const array = [1, 2, 3];

const result = array.map((elem, idx, arr) => <li>{elem}</li>);

//filter 陣列
const result = array.filter((elem, idx, arr) => {
  return elem % 2 === 0;
});

//reduce  不一定是陣列 如何定義
// initValue
//
            //    0  1  3  6  10 15
const array = [1, 2, 3, 4, 5, 6];
            //    1  3  6  10 15 21
//
const result = array.reduce((accumulator, elem, idx, arr) => {
  return accumulator + elem;
}, 0);
const result = array. reduce((acc,value)=> acc+value, 0);

// 會更改的array
// const array = [1, 2, 3, 4];

// array.pop(); //4
// array.push(5); //5
// array.shift(); //1
// array.unshift(); //0

// array.reverse();

// const newArr = [...array];
// newArr.reverse();

// array.sort();
// array.splice();

// //mutate
// .map
// .filter
// .reduce