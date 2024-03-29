import { createUseStyles } from "react-jss";
import styles from "./styles";
import { useEffect } from "react";
import { randomHello } from "../../utils";
import MainButtons, { MainButtonsProps } from "./components/MainButtons";
import Typed from "typed.js";
import { Static } from "../../models";
import SEO from "../../components/SEO";

const useStyles = createUseStyles(styles)

export interface GreeterProps extends MainButtonsProps {
  staticData: Static;
}

const Greeter: React.FC<GreeterProps> = ({ staticData, contactData, repoUrl }) => {
  const classes = useStyles();

  useEffect(() => {
    const options = {
      strings: staticData.typed,
      typeSpeed: 70,
      backSpeed: 50,
      loop: true,
      smartBackspace: true,
    };

    const typed = new Typed('#typed-insert-point', options);

    return () => {
      // Make sure to destroy Typed instance on unmounting
      // to prevent memory leaks
      typed.destroy();
    };
  }, [staticData]);

  const hello = randomHello();

  return (
    <>
      <SEO title={hello.hello} />
      <section className={classes.root}>
        <h1 className={classes.heading} style={{ display: 'flex', alignItems: 'end' }}>
          <span style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start' }}>
            <span style={{ fontSize: 15 }}>{hello.language}</span>
            {hello.hello + ` ${staticData.mainLine}`}
          </span>
        </h1>
        <div className={classes.typedWrap}>
          <span id="typed-insert-point" style={{ whiteSpace: 'pre' }} />
        </div>
        <MainButtons contactData={contactData} repoUrl={repoUrl} />
      </section>
    </>
  )
}

export default Greeter;