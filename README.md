EKK
==================

## Requirements
- node 8.8.1
- npm 5.4.2
- yarn 1.2.1
- python 3.6.2
- pip 9.0.1
- pipenv 9.0.0


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
- `node`のパッケージのインストール

```
yarn
```

- `python`のパッケージのインストール

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
- AWSの`Lambda`にアップロードするためのライブラリのインストール

```
pip install -r ./requirements.txt -t .
```

- `python`関数の実行

```
pipenv run python (target).py
```
