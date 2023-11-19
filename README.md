# ReactNative-Hands-on-Firestore

## 環境構築手順

### Node.jsとnpmのインストール(Window or Mac OS)
Node.jsとnpmが入っていない方は以下のURLを参考にダウンロードをしてください。

以下のサイトではWindowsまたはMac OSでのインストール手順が記載されていますので、こちらを参考に進めてください！
https://kinsta.com/jp/blog/how-to-install-node-js/

バージョンは基本的に最新のLTS版(長期サポートバージョン、いわゆる安定版)をダウンロードしていただければ良いかと思います。

(私は今回ver17.9.0のものを使用してプロジェクトを作成しています。)

### 1.Nodeとnpmのバージョンを確認する
```
node -v
```

<img width="206" alt="スクリーンショット 2023-04-22 10 48 19" src="https://user-images.githubusercontent.com/65134351/233790013-78a34098-79a7-4be2-8565-2159615cc52b.png">

```
npm -v
```

<img width="232" alt="スクリーンショット 2023-07-20 23 43 52" src="https://github.com/miyakei1225/ReactNative-Hands-on-Firestore/assets/65134351/6dba7cae-2f97-4341-859e-ac92de0fa2d0">

### 2.expoコマンドをグローバルに使えるようにインストールする
```
npm i -g expo-cli
```

### 3.適宜ディレクトリを作成し、その中に今回私が作成したGitHubリポジトリの内容をcloneしてください。
```
// mkdirコマンドでディレクトリ作成(名前はなんでもok🙆)
mkdir CAMP
```

```
cd CAMP
```

```
git clone https://github.com/miyakei1225/ReactNative-Hands-on-Firestore.git
```

<img width="645" alt="スクリーンショット 2023-07-20 23 50 32" src="https://github.com/miyakei1225/ReactNative-Hands-on-Firestore/assets/65134351/760cb8c2-0301-4850-ae7f-258cb79106fb">

### 4.ReactNative-Hands-on-Firestoreディレクトリに移動し、lsコマンドでファイル群があることを確認する。
```
cd ReactNative-Hands-on-Firestore
```

```
ls
```

<img width="649" alt="スクリーンショット 2023-07-20 23 51 05" src="https://github.com/miyakei1225/ReactNative-Hands-on-Firestore/assets/65134351/26c3abeb-cfb0-4dec-ac1d-434a7903f225">


### 5.package.jsonに記載されているライブラリ群をインストールする
```
npm install
```

### 6.VS Codeでプロジェクトフォルダを開く(未ダウンロードの方は各自ダウンロードしていただけると幸いです。)
【※もしcode .コマンドで立ち上げるのであれば設定必須🙆】
code . コマンドで現在のディレクトリのフォルダを開く便利なコマンドがあるため、ぜひこちらを参考に設定してみてください！
```
code .
```
https://qiita.com/naru0504/items/c2ed8869ffbf7682cf5c

### 手持ちのスマートフォンでExpoのインストール(実機で実行するために必要なアプリです！)
App Store
https://apps.apple.com/jp/app/expo-go/id982107779

Google Play
https://play.google.com/store/apps/details?id=host.exp.exponent&hl=ja&gl=US&pli=1

### 環境構築は一旦ここまでで完了です！お疲れ様でした💪当日はよろしくお願いいたします！ (環境構築中に手詰まりがあればお悩み相談チャンネルにて随時ご質問お待ちしております！)

### メモ書き　※こちらは事前に実行する必要はありません
expoコマンドでReact Nativeプロジェクトを作成したい時のコマンド
```
expo init my-first-react-native-app
```
