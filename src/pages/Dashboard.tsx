import React, { Children } from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "../components/Layout";

export const Dashboard = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};
