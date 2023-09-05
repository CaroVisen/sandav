import React from "react";
import { Card } from "./styles";

const BasicCard = (props: any) => {
  const { children } = props;
  return <Card>{children}</Card>;
};

export default BasicCard;
