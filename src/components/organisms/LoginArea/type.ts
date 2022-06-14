export interface Props {
  /**
   * メールアドレス入力値
   */
  inputEmail: string;
  /**
   * メールアドレス入力値変更イベント
   */
  handleInputEmailChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * パスワード入力値
   */
  inputPassword: string;
  /**
   * パスワード入力値変更イベント
   */
  handleInputPasswordChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  /**
   * ログインボタン非活性フラグ
   */
  isDisabled?: boolean;
  /**
   * ログイン処理失敗フラグ
   */
  isError?: boolean;
  /**
   * ログインボタンクリックハンドラー
   */
  onLogin?: () => void;
}
