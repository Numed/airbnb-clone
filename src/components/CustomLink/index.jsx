import React from "react";
import { useNavigate, Link as LinkTo } from "react-router-dom";

import { useOpenSubmodal } from "../../store";

const Link = ({ to, children, className }) => {
  const { setOpenedSubmodal } = useOpenSubmodal();
  const navigate = useNavigate();

  const handleClick = (event) => {
    event.preventDefault();
    setOpenedSubmodal(false);
    navigate(to);
  };

  return (
    <LinkTo className={className} to="#" onClick={(e) => handleClick(e)}>
      {children}
    </LinkTo>
  );
};

export default Link;
