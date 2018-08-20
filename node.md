name: inverse
layout: true
class: center, middle, inverse
---
# Node.js入門

---
layout: false
class: center, middle

![node_logo](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png)

---

class: center, middle, inverse
# Node.jsとは

---

layout:true
## Node.jsとは

---

### サーバーサイドのJavaScript実行環境
* 通常クライアントサイドで実行されるJavaScriptを、サーバーサイド開発に使用したもの
* 軽量で効率よくリクエストを処理

---
##インストール

公式サイト  
[http://nodejs.org/](http://nodejs.org/)

バージョンの確認

```console
$ node -v
```

---
layout:true
## サンプル "Hello World"
---
### 通常のJavaScript(クライアントサイド)

hello.js
```javascript
document.writeln('Hello World!');
```

index.html
```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Hello World</title>
    </head>
    <body>
        <pre>
            <script src="hello.js"></script>
        </pre>
    </body>
</html>

```
実行  
![js1](js1.png)

---
### Node.js
#### コンソール
sample1.js
```javascript
console.log("Hello world!");
```

実行

```console
$ node sample1.js
Hello world!
```

---
### Node.js
#### サーバーサイド
sample2.js
```javascript
var http = require('http');
var server = http.createServer(function(req, res) {
  res.write("Hello World!\n");
  res.end();
}).listen(8080);
```

実行
```console
$ node sample2.js
```
![sample2](sample2.png)

---
## スライド３
### スライド３
４ページ目

* リンクを貼る

__[Google](https://www.google.co.jp/)__