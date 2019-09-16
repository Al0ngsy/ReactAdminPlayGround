import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import LaunchIcon from '@material-ui/icons/Launch';

// JSS ->  CSS-in-JS
// defining styles as JS object
const styles = {
    link: {
        textDecoration: 'none',
    },
    icon: {
        width: '0.5em',
        paddingLeft: 2,
    },
};

const MyUrlField = ({ record = {}, source, classes }) =>
    <a href={record[source]} className={classes.link}>
        {record[source]}
        <LaunchIcon className={classes.icon}></LaunchIcon>
    </a>;

// withStyles -> wrapping the styles defined above to the component
//      JSS will create new class names for these styles
//      pass the new class names as a new classes property
export default withStyles(styles)(MyUrlField);