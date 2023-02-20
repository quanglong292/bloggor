import { FC, memo } from "react";

import ConfigProvider from "antd/es/config-provider";

const CAntdConfig: FC<any> = memo((props) => {
  const { children } = props;
  const theme = {
    token: {
      colorPrimary: "#c942a8",
    },
  };

  return <ConfigProvider theme={theme}>{children}</ConfigProvider>;
});

export default CAntdConfig;
