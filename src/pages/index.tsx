import type { NextPage } from "next";
import { useState, useEffect } from "react";
import { LoginTemplate } from "@/components/templates/LoginTemplate";

const Home: NextPage = () => {
  /**
   * State
   */
  // メールアドレス入力値
  const [inputEmail, setInputEmail] = useState("");
  // パスワード入力値
  const [inputPassword, setInputPassword] = useState("");
  // ログインボタン非活性フラグ
  const [isDisabledLoginButton, setIsDisabledLoginButton] = useState(true);
  // ログイン処理失敗フラグ
  const [isErrorLogin, setIsErrorLogin] = useState(false);
  // ログイン済みフラグ
  const [isLogined, setIsLogined] = useState(false);

  /**
   *  イベントハンドラー
   */
  // メールアドレス入力値変更
  const handleInputEmailChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setInputEmail(event.target.value);
  // パスワード入力値変更
  const handleInputPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => setInputPassword(event.target.value);
  // ログインボタンクリック
  const onLogin = () => {
    setIsLogined(true);
    console.log("login!");
  };
  // ログアウトボタンクリック
  const onLogout = () => {
    setIsLogined(false);
    console.log("logout!");
  };

  /**
   *  副作用
   */
  // メールアドレスとパスワードが両方入力済の場合のみ、ログインボタンを活性化
  useEffect(() => {
    if (inputEmail && inputPassword) {
      setIsDisabledLoginButton(false);
    } else {
      setIsDisabledLoginButton(true);
    }
  }, [inputEmail, inputPassword]);

  return (
    <LoginTemplate
      inputEmail={inputEmail}
      handleInputEmailChange={handleInputEmailChange}
      inputPassword={inputPassword}
      handleInputPasswordChange={handleInputPasswordChange}
      isDisabledLoginButton={isDisabledLoginButton}
      isErrorLogin={isErrorLogin}
      onLogin={onLogin}
      isLogined={isLogined}
      onLogout={onLogout}
    ></LoginTemplate>
  );
};

export default Home;
