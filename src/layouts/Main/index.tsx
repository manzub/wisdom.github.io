import { createUseStyles } from "react-jss"
import styles from "./styles"
import clsx from "clsx";
import { useState } from "react";
import { ContactItem, TabLink } from "../../models";
import LeftBar from "./components/LeftBar";
import Explorer from "./components/Explorer";
import Header from "./components/Header";
import StatusBar from "./components/StatusBar";

const useStyles = createUseStyles(styles)

export interface TabProps {
  tabs: TabLink[];
}

export interface ContactProps {
  contactData: ContactItem[];
}

export type MainLayoutProps = TabProps & ContactProps & { children: any }

const MainLayout: React.FC<MainLayoutProps> = ({ children, tabs, contactData }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [explorerOpen, setExplorerOpen] = useState(false);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <LeftBar contactData={contactData} />
      <Explorer tabs={tabs} open={explorerOpen} />
      <main className={clsx(classes.content, {
        [classes.explorerOpen]: explorerOpen,
      })}>
        <Header tabs={tabs} />
        {children}
      </main>
      <StatusBar />
    </div>
  )
}

export default MainLayout;