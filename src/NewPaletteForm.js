import React, { Component } from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Button from "@material-ui/core/Button";
import ColorPicker from './ColorPicker';
import DraggableColorList from "./DraggableColorList";
import PaletteFormNav from "./PaletteFormNav";
import styles from "./styles/NewPaletteformStyles";
import {DRAWER_WIDTH} from "./constants";
import seedColors from "./seedColors";

const drawerWidth = DRAWER_WIDTH;
const arrayMove = require('array-move');

class NewPaletteForm extends Component {
  constructor(props){
    super(props);
    this.state={
      open: true,
      colors: seedColors[0].colors,
    }
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };


  addNewColor = (newColor) =>{
    this.setState({colors: [...this.state.colors, newColor]})
  }

  handleChange = (evt) =>{
    this.setState({[evt.target.name]: evt.target.value})
  } 

  handleSubmit = (newPalette) =>{
    newPalette.id=newPalette.paletteName.toLowerCase().replace(/\s/g,"-");
    newPalette.colors=this.state.colors;
    this.props.savePalette(newPalette);
    this.props.history.push("/");
  }
  
  removeColor = (colorName)=>{
    this.setState({colors: this.state.colors.filter(color=>color.name!==colorName)});
  }

  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState(({colors}) => ({
      colors: arrayMove(colors, oldIndex, newIndex),
    }));
  };

  clearColors = () =>{
    this.setState({colors: []})
  }

  addRandomColor = () =>{
    let isDuplicateColor = true;
    const allColors = this.props.palettes.map(p=>p.colors).flat();
    let rand = Math.floor(Math.random()*allColors.length);
    let randomColor = allColors[rand];
    while(isDuplicateColor){
      rand = Math.floor(Math.random()*allColors.length);
      randomColor = allColors[rand];
      let randomColorName = randomColor.name;
      isDuplicateColor = this.state.colors.some(color=>color.name===randomColorName)
    }
    this.setState({colors: [...this.state.colors, randomColor]})
  }

  render() {
    const { classes, maxColors, palettes } = this.props;
    const { open, colors } = this.state;
    const paletteFull = colors.length>=maxColors;

    return (
      <div className={classes.root}>
        <PaletteFormNav open={open}
                        
                        palettes={palettes}
                        handleSubmit={this.handleSubmit}
                        handleDrawerOpen={this.handleDrawerOpen}
                        drawerWidth={drawerWidth}/>
        <Drawer
          className={classes.drawer}
          variant='persistent'
          anchor='left'
          open={open}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <div className={classes.container}>
            <Typography className={classes.title} variant="h4" gutterBottom>Design Your Palette</Typography>
            <div className={classes.buttons}>
              <Button variant="contained"
                      className={classes.button} 
                      color="secondary"
                      onClick={this.clearColors}>
                        Clear Palette
              </Button>
              <Button variant="contained" 
                      className={classes.button} 
                      color="primary"
                      onClick={this.addRandomColor}
                      disabled={paletteFull}>
                        Random Color
              </Button>
            </div>
            <ColorPicker  initialColor="teal" 
                          addNewColor={this.addNewColor}
                          paletteFull={paletteFull}
                          colors={this.state.colors}/>
          </div>
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open
          })}
        >
          <div className={classes.drawerHeader} />
          <DraggableColorList 
                onSortEnd={this.onSortEnd}
                axis="xy"
                colors={colors} 
                removeColor={this.removeColor}/>
        </main>
      </div>
    );
  }
}
export default withStyles(styles, { withTheme: true })(NewPaletteForm);