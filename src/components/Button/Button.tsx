import styles from "./Button.module.css";
interface Props {
  children: string;
  colour: string;
  onClick: () => void;
}

const Button = ({ children, colour, onClick }: Props) => {
  return (
    <button
      className={[styles.btn, styles["btn-" + colour]].join(" ")}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
