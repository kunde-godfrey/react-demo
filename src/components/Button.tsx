interface Props {
  children: string;
  colour: string;
  onClick: () => void;
}

const Button = ({ children, colour, onClick }: Props) => {
  return (
    <button className={"btn btn-" + colour} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
