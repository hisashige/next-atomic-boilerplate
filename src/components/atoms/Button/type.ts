export type ButtonType = "primary" | "secondary" | "accent" | "logout";

export type ButtonSize = "small" | "medium" | "large";

export interface Props {
  /**
   * ボタンタイプ
   */
  type?: ButtonType;
  /**
   * ボタンのサイズ
   */
  size?: ButtonSize;
  /**
   * ボタンのラベル
   */
  label: string;
  /**
   * 非活性フラグ
   */
  isDisabled?: boolean;
  /**
   * クリックハンドラー
   */
  onClick?: () => void;
}
