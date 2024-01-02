import { createUseStyles } from "react-jss"
import styles from "./styles"
import clsx from "clsx";
import { useState } from "react";
import { ContactItem, TabLink } from "../../models";

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
      <main className={clsx(classes.content, {
        [classes.explorerOpen]: explorerOpen,
      })}>
        {children}
      </main>
    </div>
  )
}

export default MainLayout;