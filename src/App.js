import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Home, Send, Person } from "@material-ui/icons";
import HomeWork from '@material-ui/icons/Home';

const App = () => {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <div className="head1">

            </div>
            <AppBar position="static" name="gg1">
                <Tabs value={value} onChange={handleChange} aria-label="Main Tabs">
                    <Tab label="Home" icon={<HomeWork/>}/>
                    <Tab label="Send" icon={<Send />} />
                    <Tab label="Profile" icon={<Person />} />
                </Tabs>
            </AppBar>
        </>
    );
};



export default App;
