# 言い間違えカレンダー

## ホスティング

Github IOでホスティングしています。

https://shingo-test.github.io/wrong_word_calendar/

## 環境

Rspack + React で動いています

プロジェクトのフルパスに日本語が含まれると動かないらしい。

```sh
# nodejsはv18.15.0
# node moduleをインストール
$ npm install

# 開発用HMR起動
$ npm run dev

# 製品版のビルド
$ npm run build
```

## カレンダーについて

[fullcalendar](https://fullcalendar.io/docs/react) を使ってる

## 六曜データについて

https://www.zenbunka.or.jp/software/entry/rokuyoucal.html

禅文化研究所のカレンダー情報を使ってる。

必要に応じて、`src/assets/zenbunka.ics`を更新する
