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

/**
 *  デフォルト値、引数など
 *
//  */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん`);
// sayHello();

/**
 *  スプレッド構文　ドット３つ
 *
 */

//配列の展開
// const arr1 = [1,2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);

// sumFunc(...arr1);

//まとめる

// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

/**
 *  配列のコピー、結合
 *
 */
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// //arr4をarr6にコピーしてみる
// const arr6 = [...arr4];
// console.log(arr6);

//arr4とarr5を結合してarr7に出力する
// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

//arr8という変数にarr４と同じ内容にする
// const arr8 = arr4;
// console.log(arr8);

// //１個目に100を代入する
// arr8[0] = 100;
// console.log(arr8);

/**
 *  mapやfilterを使った配列の処理
 *
 */

//従来の書き方 for

// const nameArr = ["中桐", "山田", "田中"];
// for (let index = 0; index < nameArr.length; index++) {
// console.log(nameArr[index]);
// }

//mapの基本的な構文

// const nameArr = ["中桐", "山田", "田中"];
// const nameArr2 = nameArr.map((name) => {
// return name;
// })
// console.log(nameArr2);

// 結果　 ["中桐", "山田", "田中"]

// //一列の時は省略しても良い

// const nameArr = ["中桐", "山田", "田中"];
// nameArr.map((name) => console.log(name));

// //◯番目は◯◯です。と出力させたい時
// //mapの場合、一つ目の引数に実際の配列が追加されているので、
// //indexの要素を二つ目の引数に追加、順番が０から入ってくる。

// const nameArr = ["中桐", "山田", "田中"];
// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です。 `);

// //if文で条件を書く。中桐のときだけさんをつけない。その他にさんをつける

// const nameArr = ["中桐", "山田", "田中"];

// const newNameArr = nameArr.map((name) => {
// if (name === "中桐"){
// return name
// } else {
// return `${name}さん`;
// }
// })
// console.log(newNameArr);

//filter

//条件：数字が奇数のときだけ出力

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
// return num % 2 === 1;
// })
// console.log(newNumArr);

/**
 *  三項演算子
 *
 */

//  const val1 = 1 < 0 ? 'trueです' : 'falseです';
//  console.log(val1);

//カンマ区切りにする時は、toLocaleString()を使う　※文字列は使えない！
// const num = "1300";

// //typeof・・・判定
// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力して下さい';
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えてます" : "許容範囲です";
// };
// console.log(checkSum(50, 30));
