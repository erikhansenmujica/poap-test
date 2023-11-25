import styles from "./maininput.module.css";
interface InputProps {
  address: string;
  setAddress: (address: string) => void;
  error: boolean;
}
export const Input = ({ address, setAddress, error }: InputProps) => {
  return (
    <div className={styles.inputContainer}>
      <label>Insert client address</label>
      <input
        placeholder="client.eth"
        value={address}
        onChange={(e) => {
          setAddress(e.target.value);
        }}
        className={error ? styles.inputError : styles.input}
      />
    </div>
  );
};
