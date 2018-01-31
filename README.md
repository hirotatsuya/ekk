EKK
==================

## Requirements
- node 8.8.1
- npm 5.4.2
- yarn 1.2.1
- python 3.6
- pip 9.0.1


## First
- `yarn`のインストール

```
npm i -g yarn
```

- `pipenv`のインストール

```
pip install pipenv
```


## Setup
- nodejsのパッケージのインストール

```
yarn
```

- pythonのパッケージのインストール

```
pipenv install
```


## Usage(frontend)
- `webpack-dev-server`を起動して、`localhost:1192`にアクセスできるようにする

```
yarn dev
```

- `dist`ディレクトリに`bundle.js`を生成する

```
yarn build
```


## Usage(backend)
- AWSのLambdaにアップロードするためのライブラリのインストール

```
pip install -r ./requirements.txt -t .
```

- python関数の実行

```
pipenv run python (target).py
```
