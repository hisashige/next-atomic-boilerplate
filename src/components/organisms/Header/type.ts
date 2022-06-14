export interface Props {
  /**
   * ログイン済みフラグ
   */
  isLogined?: boolean;
  /**
   * ログアウトボタンクリックハンドラー
   */
  onLogout: () => void;
}
