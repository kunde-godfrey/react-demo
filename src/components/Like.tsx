import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [status, setStatus] = useState(false);
  const toggle = () => {
    setStatus(!status);
    onClick();
  };
  if (!status) return <AiOutlineHeart size="40" color="red" onClick={toggle} />;
  return <AiFillHeart size="40" color="red" onClick={toggle} />;
};

export default Like;
