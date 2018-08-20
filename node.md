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
```
$ node -v
```

---
layout:false
## サンプル "Hello World"
### 通常のJavaScript(クライアントサイド)

```javascript:hello.js
document.writeln('Hello World!');
```

```html:index.html
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

---
layout:false
## サンプル "Hello World"
### Node.js

Console
```javascript
console.log("Hello world!");
```

サーバーサイド
```javascript:sample.js
var http = require('http');
var server = http.createServer(function(req, res) {
  res.write("Hello World!\n");
  res.end();
}).listen(8080);
```

---
## スライド３
### スライド３
４ページ目

* リンクを貼る

__[Google](https://www.google.co.jp/)__