## 异步编程的方法

1. 回调函数
2. 事件监听
3. 发布/订阅模式
4. Promise对象

所谓"异步", 一个任务不是连续执行

## 进化过程

回调函数=>promise=>Generator=>async

### 回调函数

``` js
let fs = require('fs');
fs.readFile("./async.txt", 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
})
```

### Generator函数

异步操作的同步化表达

``` js
function* main() {
    let result = yield("http://some.url");
    let resp = JSON.parse(result);
    console.log(resp.value);
}
```

## async 与 Generator函数比较

 async 是Generator函数的语法糖

### Generator 函数写法

``` js
const fs = require('fs');
const readFile = function(fileName) {
    return new Promise(function(resolve, reject) {
        fs.readFile(fileName, function(error, data) {
            if (error) return reject(error);
            resolve(data);
        });
    });
};

const gen = function*() {
    const f1 = yield readFile('/etc/fstab');
    const f2 = yield readFile('/etc/shells');
    console.log(f1.toString());
    console.log(f2.toString());
};
```

### async 函数写法

``` js
const asyncReadFile = async function() {
    const f1 = await readFile('/etc/fstab');
    const f2 = await readFile('/etc/shells');
    console.log(f1.toString());
    console.log(f2.toString());
};
```

### 错误处理

``` js
async function myFunction() {
    try {
        await somethingThatReturnsAPromise();
    } catch (err) {
        console.log(err);
    }
}
```

## 总结

一比较就会发现，async函数就是将 Generator 函数的星号（*）替换成async，将yield替换成await，仅此而已。

