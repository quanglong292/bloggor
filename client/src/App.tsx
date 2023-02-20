import { FC } from "react";

// Components
import CAntdConfig from "@/components/ConfigAntd";
import CButton from "@/components/core/CButton";
import { Switch } from "antd";

const App: FC<any> = () => {
  return (
    <CAntdConfig>
      <div id="roo2" className="text-red-400 bg-primary dark:text-blue-700">
        <div className="flex">
          <Switch onChange={(e) => {
            if (e) document.getElementById('root')?.classList.add('dark')
            else document.getElementById('root')?.classList.remove('dark')
          }}></Switch>
          Dark mode
        </div>
        Hello App
        <CButton type="primary" className="bg-primary">
          Test Antd
        </CButton>
      </div>
    </CAntdConfig>
  );
};

export default App;
