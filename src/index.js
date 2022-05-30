/**
 *  const、let等の変数宣言
 *
 */
// var val1 = "var変数";

// console.log(val1);

// // varは上書き
// val1 = "var変数を上書き";
// console.log(val1);

// //再宣言

// var bal1 = "var変数を再宣言";
// console.log(bal1);

// let val2 = "let変数";
// console.log(val2);

// val2 = "let変数を上書き";
// console.log(val2);

// let val2 = "let変数を再宣言";
// console.log(val2);

//constで定義したオブジェクトは　プロパティの変更が可能
// const val4 = {
//   name: "名前",
//   age: 30
// };
// val4.name = "じゃけ";
// val4.address = "広島";
// console.log(val4);

// const val4 = {
//   name:"まりな",
//   age: 30,
// };
// val4.name = "name"
// console.log(val4);

//配列
// const val5 = ['dog', 'cat'];
// console.log(val5);
// //constで定義した配列は　プロパティの変更が可能
// const val5 = ['dog','cat'];
// val5[0] = 'bard';
// val5.push('monky');
// console.log(val5);

/**
 *  テンプレート文字列
 *
 */

// const name = "まりな";
// const age = 30;
// //私の名前はnameです。年齢はageです。

// //従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "歳です。";
// console.log(message1);

// //テンプレート文字列

// const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message2)

/**
 *  アロー関数
 *
 */

//  //従来の書き方
//  function func1(str) {
//    return str;
//  }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// //アロー関数
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です"));

// const func3 = (num1, num2) => {
// return num1 + num2;
// };
// console.log(func3(10, 20));

/**
 *  分割代入
 *
 */
// const myProfile = {
//   name: "marina",
//   age: "30",
// };

// const {name, age} = myProfile;
// const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// const myProfile = ["marina", 30];
// const message3 = `私の名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message4);
