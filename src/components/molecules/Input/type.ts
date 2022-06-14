export type InputType = "email" | "password";

export interface Props {
  /**
   * 入力タイプ
   */
  inputType: InputType;
  /**
   * 入力値
   */
  input: string;
  /**
   * 入力値変更イベント
   */
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
