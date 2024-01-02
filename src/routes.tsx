import { Redirect, RouteComponentProps } from "@reach/router";
import { pages } from "./data";
import { PageProps } from "./models";
import React from "react";

type ViewProps = RouteComponentProps & PageProps;
const View: React.FC<ViewProps> = ({comp: Comp, ...rest}) => {
  return <div>{/*dp sometihng */}</div>
}

type TabProps = RouteComponentProps;
const Tab: React.FC<TabProps> = ({ fileName }) => {
  return <div fileName={fileName} />
}

const routes = [
  pages.map({{ name, url, comp, ...rest }} => (
    <View path={url} key={name} comp={comp} {...rest} />
  )),
  tabs.map(({ name, url, mdFileName }) => (
    <View path={url} key={name} fileName={mdFileName} />
  )),
  <Redirect key="notfound" from="*" to="/" default noThrow />
]

export default routes;