import React from "react";

import { Button } from "./styles";
import Logo from "../../assets/Logo.svg";

export interface Props {
  selected?: boolean;
  isHome?: boolean;
  hasNotifications?: boolean;
  mentions?: number;
}

const ServerButton: React.FC<Props> = ({
  hasNotifications,
  isHome,
  mentions,
  selected,
}) => {
  return (
    <Button
      isHome={isHome}
      hasNotifications={hasNotifications}
      mentions={mentions}
      className={selected ? "active" : ""}
    >
      {isHome ? <img src={Logo} /> : ""}
    </Button>
  );
};

export default ServerButton;
