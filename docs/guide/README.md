## 闪断腰的js代码

1. 使用 Array.length = 0 来清空数组

``` js
    let arr = [1, 2, 3];
    console.log("before", arr) //[1, 2, 3]
    arr.length = 0;
    console.log("after", arr) //[]
```

2. Array重复字符串

``` js
    let b = "nihao,".repeat(7);
    console.log(b); //nihao,nihao,nihao,nihao,nihao,nihao,nihao,
```

3.void 0 会比undefined更快一些

``` js
    let d = void 0;
    console.log(d); //undefined
```

4. 合并对象

使用扩展运算符号{... } 合并对象

``` js
const person1 = {
    name: 'David ',
    gender: 'Male'
};
const tools2 = {
    computer: 'Mac',
    editor: 'Atom'
};
const attributes3 = {
    handsomeness: 'Extreme',
    hair: 'black',
    eyes: 'Blue'
};

const summary = {
    ...person1,
    ...tools2,
    ...attributes3
};
console.log(summary);
// Object {
//   "computer": "Mac",
//   "editor": "Atom",
//   "eyes": "Blue",
//   "gender": "Male",
//   "hair": "black",
//   "handsomeness": "Extreme",
//   "name": "David ",
// }
```

***
<font color=#0099ff size=5 face="黑体">结尾</font>   
虽然上述操作能在一定程度上使代码更简洁，但会降低可读性。在目前的大环境下，机器的性能损失远比不上人力的损失，因为升级机器配置的成本远低于维护晦涩代码的成本，所以请谨慎使用这些“黑魔法”。就算要使用，也请加上注释，毕竟，这世上还有很多“麻瓜”需要生存。

![solar](./img/gaga.jpg)

***
链接参考:[链接](https://mp.weixin.qq.com/s/e2o52pzcGjyEokLXU7cvIg)

