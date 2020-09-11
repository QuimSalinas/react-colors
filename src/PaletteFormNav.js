import React, { Component } from 'react';
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import PaletteMetaForm from "./PaletteMetaForm";
import styles from "./styles/PaletteFormNavStyles"
import AddToPhotos from "@material-ui/icons/AddToPhotos";

class PaletteFormNav extends Component {
    constructor(props){
        super(props);
        this.state = {
            newPaletteName: "",
            formShowing: false
        }
    }

    showForm = () =>{
      this.setState({formShowing: true})
    }

    hideForm = () =>{
      this.setState({formShowing: false})
    }

    render() {
        const {classes, open, palettes, handleSubmit} = this.props;
        return (
            <div className={classes.root}>
                <AppBar
                color="default"
                position='fixed'
                className={classNames(classes.appBar, {
                    [classes.appBarShift]: open
                })}
                >
                <Toolbar disableGutters={!open}>
                    <IconButton
                    color='inherit'
                    aria-label='Open drawer'
                    onClick={this.props.handleDrawerOpen}
                    className={classNames(classes.menuButton, open && classes.hide)}
                    >
                    <AddToPhotos />
                    </IconButton>
                    <Typography variant='h6' color='inherit' noWrap>
                    Create a Palette
                    </Typography>
                </Toolbar>
                <div className={classes.navBtns}>
                    <Link to="/" className={classes.link}>
                            <Button className={open ? classes.buttonRoot : classes.buttonRoot2} 
                                    variant="contained" 
                                    color="secondary">
                                        Go Back
                            </Button>
                    </Link>
                    <Button className={open ? classes.buttonRoot : classes.buttonRoot2}
                            variant="contained" 
                            color="primary" 
                            onClick={this.showForm}>
                        Save
                    </Button>
                </div>
                </AppBar>
                {this.state.formShowing && (
                  <PaletteMetaForm palettes={palettes} handleSubmit={handleSubmit} hideForm={this.hideForm}/>
                )}
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(PaletteFormNav);