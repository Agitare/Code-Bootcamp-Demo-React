import React from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";

export default function NavBar(props) {     //Navigation Bar
    return (
        <div className="nav-bar">
            <ul className="nav-bar">
            </ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/program">Program</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
        </div>
    );
};

/*
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { Link } from "react-router-dom";
import { createMuiTheme } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    palette: {
        primary: {
            light: '#6ab7ff',
            main: '#1e88e5',
            dark: '#005cb2',
            contrastText: '#fff',
        },
        secondary: {
            light: '#b71c1c',
            main: '#b71c1c',
            dark: '#b71c1c',
            contrastText: '#000',
        },
        textprimary: {
            light: '#757ce8',
            main: '#3f50b5',
            dark: '#002884',
            contrastText: '#fff',
        },
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" >
                <Toolbar>

                    <Typography color="primary" variant="h6" className={classes.title}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                    </Typography>
                    <Typography color="primary" variant="h6" className={classes.title}>
                        <li>
                            <Link to="/program">Program</Link>
                        </li>
                    </Typography>
                    <Typography color="primary" variant="h6" className={classes.title}>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </Typography>
                    <Button color="secondary">Language</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}
*/