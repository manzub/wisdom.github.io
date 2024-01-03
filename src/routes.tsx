import React from "react";
import MDTab, { MDTabProps } from "./components/MDTab";
import { PageProps } from "./models";

import { pages, tabs } from "./data";
import { Navigate, Route } from "react-router-dom";

const View: React.FC<PageProps> = ({ comp: Comp, ...rest }) => {
  return <Comp {...rest} />;
};

const Tab: React.FC<MDTabProps> = ({ fileName }) => {
  return <MDTab fileName={fileName} />
}

const routes = [
  pages.map(({ name, url, comp, ...rest }) => (
    <Route path={url} key={name} element={<View comp={comp} {...rest} />} />
  )),
  tabs.map(({ name, url, mdFileName }) => (
    <Route path={url} key={name} element={<Tab fileName={mdFileName} />} />
  )),
  <Route path="*" key="notfound" element={<Navigate to="/" replace />} />
]

export default routes;