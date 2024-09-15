// let arr = [1, 2, 3, 4];
// console.log(arr);
// console.log( typeof arr ); //object

//оператор SPRAED
// let arr1 = [1, 2];
// let arr2 = [4, 5];
// let arr3 = [...arr1, 3, ...arr2, 6];
// console.log(arr3); //[ 1, 2, 3, 4, 5, 6 ]

// let arr = new Array(); //массив нулевой длины
// console.log(arr); //[]
// console.log(typeof arr); //object

// let arr = new Array(3);
// console.log(arr); //[undefined, undefined, undefined]

// let arr = new Array(1, 2 , 3, 4);
// console.log(arr);

//создать массив на основе другого объекта, поддерживающего итерации(массивоподобного объекта)
//можно с помощью статического метода from() из класса Array
// console.log(Array.from('123')); //['1', '2', '3']
// console.log(Array.from([1, 2, 3],
    // function(n) {
        // return n * 2;
    // }
// ));


//методы из подсказок vsCode
// apply - method
// arguments - property
// bind - method
// call - method
// caller -property
// from - method
// isArray - method
// length - property
// name - property
// of - method
// prototype - property
// toString - method

// isArray - является ли объект массивом 

// console.log(Array.isArray([1, 2]));
// console.log(Array.isArray({}));

// let arr = [1, 2, 3];
// console.table(arr);

//распаковка
// let arr = [1, 2];
// let [a, b] = arr;
// console.log(a + ' ' + b);

// let a = 0, b = 0, arr = [1, 2, 3, 4, 5];
// [a, , b] = arr;
// console.log(a + ' ' + b); //1 3

// let arr = [1, 2];
// [a, b, c] = arr;
// console.log(a, b, c); //1 2 undefined

// let arr = [1, 2];
// [a, b, c = 3] = arr;
// console.log(a, b, c); //1 2 3

// let arr = [1, 2, 3, 4, 5];
// let [a, b, ...other] = arr;
// console.log(a + ' ' + b); //1 2 
// console.log(other); //[3, 4, 5]


//метод fill(<Значение>[, <Начало>[, <Конец>]])
// let arr = new Array(5);
// arr.fill(1);
// console.log(arr); //[1, 1, 1, 1, 1]
// arr.fill(2, 1, 4);
// console.log(arr); // [1, 2, 2, 2, 1]

//метод copyWithin() копирует заданные элементы ("источник") текущего
//массива на новое место("цель") в том же массиве
// copyWithin(<Начальный индекс позиции цели>,
//            <Начальный индекс позиции источника>[, 
//            <конечный индекс позиции источника>]) 

let arr = [1, 2, 3, 4, 5, 6, 7];
arr.