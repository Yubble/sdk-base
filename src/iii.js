/**
 * @Name:
 * @Description:
 * @Author: 刘燕保
 * @Date: 2021-10-31 15:22:56
 * */
/*
 * @Name:
 * @Description:
 * @Author: 刘燕保
 * @Date: 2021-10-31 12:07:41
 */
let module1 = function (name) {
  console.log('name is ', name);
};
let getEvenNo = function (arr) {
  return arr.map(function (el) {
    return el % 2 === 0;
  });
};

/*
* @Name:
* @Description:
* @Author: 刘燕保
* @Date: 2021-10-31 12:07:29
*/
let namelog = void module1('Yubble');
let evenNo = getEvenNo([3, 5, 12, 9, 17, 28, 4]);
namelog();
Promise.resolve(123).then(console.log);
let obj = { name: 'Yubble' };
console.log('找到 obj 中的name is ', Reflect.get(obj, 'name'));
console.log('执行数组找偶, res is ', evenNo);
