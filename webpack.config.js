const path = require('path');
module.exports = {
  entry: {
    bundle: './src/index.ts'
  },
  output: {
    path: path.join(__dirname, 'dist'), // コンパイル済みのjavascriptを排出する先を指定
    filename: '[name].js' // entryのbundleの部分とnameがリンクしbundle.jsという命名になる
  },
  resolve: {
    extensions: ['.ts', '.js']　// importする時に拡張子を書かなくて良くなる設定
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'), //開発サーバーを立ち上げたときの参照先
    open: true // ブラウザを自動で立ち上げる設定
  },
  module: {
    rules: [
      {
        loader: 'ts-loader',
        test: /\.ts$/
      }
    ]
  }
}