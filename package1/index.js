let arr = [1, 2, 3];
console.table(arr);
let obj = {a: 5, b: 2};
console.table(obj);
console.error('Сообщение об ошибке 1');
console.warn('Сообщение об ошибке 2');
process.stdout.write('test');
process.stdout.write('\n');
console.log(process.argv.length);
console.log(process.argv);
console.log(process.argv0);
console.log(process.argv[0]);
console.log(process.argv[1]);
console.log(process.execPath);