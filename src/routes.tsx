import React from "react";
import MDTab, { MDTabProps } from "./components/MDTab";
import { PageProps } from "./models";

import { pages, tabs } from "./data";
import { Route, createBrowserRouter } from "react-router-dom";

const View: React.FC<PageProps> = ({ comp: Comp, ...rest }) => {
  return <Comp {...rest} />;
};

const Tab: React.FC<MDTabProps> = ({ fileName }) => {
  return <MDTab fileName={fileName} />
}

// const router = createBrowserRouter([
//   ...pages.map(({ name, url, comp, ...rest }) => ({
//     path: url,
//     element: <View comp={comp} {...rest} />
//   })),
//   ...tabs.map(({ name, url, mdFileName }) => ({
//     path: url, element: <Tab fileName={mdFileName} />
//   }))
// ]);

const routes = [
  pages.map(({ name, url, comp, ...rest }) => (
    <Route path={url} key={name} element={<View comp={comp} {...rest} />} />
  )),
  tabs.map(({ name, url, mdFileName }) => (
    <Route path={url} key={name} element={<Tab fileName={mdFileName} />} />
  ))
  // pages.map(({ name, url, comp, ...rest }) => (
  //   <View path={url} key={name} comp={comp} {...rest} />
  // )),
  // tabs.map(({ name, url, mdFileName }) => (
  //   <Tab path={url} key={name} fileName={mdFileName} />
  // )),
]

export default routes;