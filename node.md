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
## 対象者

* Node.js未経験者
* サーバーサイド未経験者

---

class: center, middle, inverse
# Node.jsとは

---

layout: true
## Node.jsとは

---

### サーバーサイドのJavaScript実行環境

* 通常クライアントサイドで実行されるJavaScriptを、サーバーサイド開発に使用したもの
* 軽量で効率よくリクエストを処理

### アーキテクチャ

* ノンブロッキングI/O
    * 複数のプロセスを同時実行
    * ステータスを定期的に確認している(非同期とは異なる)
　　
* イベントループ
    * イベントを待機するループ機能を持つ
    * 発生したイベントはイベントキューに入れられ、順次取り出される
    * イベントに対する処理はコールバック関数を使用

---
layout: false
## インストール  

公式サイト  
[http://nodejs.org/](http://nodejs.org/)

バージョンの確認

```console
$ node -v
```

---
class: center, middle, inverse
# サンプル

---
layout: true
## "Hello World"

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

---
### 通常のJavaScript(クライアントサイド)

実行(ダブルクリック)

![jssample1](js1.png)

---
### Node.js(コンソール)

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
### Node.js(サーバーサイド)

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

---
### Node.js(サーバーサイド)

localhost:8080 にアクセス

![sample2](sample2.png)


---
layout: false
class: center, middle, inverse
# パッケージ管理

---
layout: true
## npm

---
### Node.jsのパッケージ管理ツール

* Github等で公開されているライブラリパッケージを導入するためのツール
    Nuget や gem のようなもの
  
* Node.jsをインストールすると標準でついてくる  
    (アンインストールすると消えるので注意)  
* 最近では yarn の方が主流？  
    [https://yarnpkg.com/ ](https://yarnpkg.com/ )

---

バージョンの確認

```console
$ npm -v
```

パッケージのインストール

```console
$ node install -g パッケージ名
```

-g はグローバルインストールのオプション。付けない場合はカレントディレクトリにインストールされる

---
layout: false
class: center, middle, inverse
# フレームワーク

---
layout: true
## Express.js

---
layout: false
### Node.jsのWebアプリケーションフレームワーク

* URI解析など、ローレベルな部分を実装しなくて済む

インストール

```console
$ npm install express
```

---
class: center, middle, inverse
# デモ

---
layout: true
## デモ

---
フォルダを作成

```console
$ mkdir ~/myapp
$ cd ~/myapp
```

package.json を作成

```console
$ npm init
```

Express パッケージをインストール

```console
$ npm install express
```

---
リクエストのbodyパーサーをインストール

```console
$ npm install body-parser
```

ファイルを作成(sample.js)  
[sample.js](sample.js)

Webサーバーを起動

```console
$ node sample.js
```

---
 localhost:8081 にアクセス

![demo.png](demo.png)

---
layout: false
## おわりに

Webに関する理解を深めるためには、サーバーの応答の仕組みを知ることも大事だと思います。  
Node.jsはライブラリが豊富で簡単に始められるので、まだサーバーサイド開発に触れたことがない方はNode.jsを使ってみてはどうでしょうか。

---
## 参考  
Node.js入門  
[http://www.tohoho-web.com/ex/nodejs.html](http://www.tohoho-web.com/ex/nodejs.html)

基礎から学ぶNode.js  
[http://gihyo.jp/dev/serial/01/nodejs](http://gihyo.jp/dev/serial/01/nodejs)

Wikipedia  
[https://ja.wikipedia.org/wiki/Node.js](https://ja.wikipedia.org/wiki/Node.js)

Node.jsのフレームワーク「Express」とは【初心者向け】  
[https://techacademy.jp/magazine/16119](https://techacademy.jp/magazine/16119)