import React from "react";
import { useSelector } from "react-redux";
import { Spin } from "antd";
import { Layout } from "antd";
import { Content } from "antd/lib/layout/layout";

import "./index.css";
import { RootState } from "../store";

interface IMcBaseLayoutProps {
  children: React.ReactNode;
}

const McBaseLayout: React.FC<IMcBaseLayoutProps> = ({ children }) => {
  const isLoading = useSelector((state: RootState) => state.main.isLoading);

  return (
    <Layout className="base-layout">
      <Spin spinning={isLoading} size="large">
        <Content className="base-layout__content">{children}</Content>
      </Spin>
    </Layout>
  );
};

export default McBaseLayout;
