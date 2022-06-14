# Next.js の Atomic Design を採用したボイラープレート

詳細はまた追記します。

## 主な採用技術など

- Next.js
- TypeScript
- Chakra UI
- Storybook

## コマンド一覧

開発サーバー起動

```
yarn dev
```

Storybook 起動

```
yarn storybook
```

hygen によるコンポーネントテンプレート生成

```
yarn hygen
```

## サンプル画面

こんな簡単なログイン画面です。
![login Image](public/readme/login.png)

## サンプルコンポーネント

以下のコンポーネントから構成されます。
![components Image](public/readme/components.png)

### Atoms/Button

![button Image](public/readme/button.png)

### Molecules/Input

![button Input](public/readme/input.png)

### Organisms/Header

![header Input](public/readme/header.png)

### Organisms/LoginArea

![login-area Input](public/readme/login-area.png)

### Templates/LoginTemplate

![login-template Input](public/readme/login-template.png)

## hygen によるコンポーネントテンプレート生成

下記コマンド実行して、新規作成するコンポーネントのテンプレートを作成できます。

```
yarn hygen
```

対話に従って、回答することで、
![hygen-command Image](public/readme/hygen-command.png)

/components 配下にテンプレートが作成される。

![hygen-output Image](public/readme/hygen-output.png)
