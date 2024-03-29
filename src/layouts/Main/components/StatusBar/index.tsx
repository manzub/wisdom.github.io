/**
 * StatusBar component.
 */
import React from 'react';
import { createUseStyles } from 'react-jss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './styles';
import pkg from '../../../../../package.json';

const useStyles = createUseStyles(styles);

const StatusBar: React.FC = () => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <a href={pkg.repository.url} rel="noopener noreferrer" target="_blank">
        <FontAwesomeIcon
          className={classes.icon}
          icon="code-branch"
          size="1x"
          inverse
        />
        <span className={classes.text}>master</span>
      </a>

      <span>
        <span style={{fontSize:6,color:'wheat'}}>&copy;caglarturali</span>
        <FontAwesomeIcon
          className={classes.icon}
          icon="smile"
          size="1x"
          inverse
        />
      </span>
    </footer>
  );
};

export default StatusBar;
