## 方法们

43. 此段代码从Date对象里获取当前时间。

``` js
const getColonTimeFromDate = date => date.toTimeString().slice(0, 8);
console.log(new Date(), getColonTimeFromDate(new Date())) //"08:38:00"
```

44. 此段代码返回两个日期之间相差多少天

``` js
 const getDaysDiffBetweenDates = (dateInitial, dateFinal) =>
     (dateFinal - dateInitial) / (1000 * 3600 * 24);
 getDaysDiffBetweenDates(new Date('2019-01-13'), new Date('2019-01-15')); // 2
```

46. getType 获取数据类型

``` js
function mm() {}
const getType = v =>
    v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name.toLowerCase();
console.log(getType([123]), getType('123'), getType(true), getType(mm))
```

52. 删除最后一个元素initial

slice 显示所选的元素 不改变元素组

``` js
const initial = data => data.slice(0, -1);
console.log(initial([1, 2, 3])); //[1, 2]
```

55. interSection 返回两个元素之间的交集

``` js
const interSection = (a, b) => {
    const s = new Set(b);
    return a.filter(x => s.has(x));
}
console.log(interSection([1, 2, 3], [2, 3, 3, 4])); //[2,3]
```

60. 比较两个字符串是否相同

``` js
const isAnagram = (str1, str2) => {
    const normalize = str =>
        str
        .toLowerCase()
        .replace(/[^a-z0-9]/gi, '')
        .split('')
        .sort()
        .join('');
    return normalize(str1) === normalize(str2);
};

isAnagram('iceman', 'cinema'); // true
```

## 10 How to get the current url

``` js
        const currentURL = () => window.location.href
        console.log(currentURL()) //'https://google.com'
```

## 14 等待指定的时间后 调用提供的函数

``` js
        const delay = (fn, wait, ...args) => setTimeout(fn, wait, ...args);
        delay(text => console.log(text), 1000, 'later wocao ');
```

## 发起get请求
 

``` js
        const httpGet = (url, callback, err = console.error) => {
            const request = new XMLHttpRequest();
            request.open('GET', url, true);
            request.onload = () => callback(request.responseText);
            request.onerror = () => err(request);
            request.send();
        };

        httpGet(
            'https://www.easy-mock.com/mock/5e40d0309d282806e0f9d458/ReactDemo1/cc',
            console.log
        );
```

[链接](https://juejin.im/post/5e55296ef265da57663fd49d)

        

