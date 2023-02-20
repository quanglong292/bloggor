import { Button, ButtonProps } from "antd";
import { FC, memo } from "react";

const CButton: FC<ButtonProps> = memo((props) => {
  const { children, ...prop } = props;

  return <Button {...prop}>{children}</Button>;
});

export default CButton;
