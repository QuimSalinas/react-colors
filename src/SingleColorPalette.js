import React, { Component } from 'react';
import ColorBox from './colorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter'
import { Link } from 'react-router-dom'
import { withStyles } from "@material-ui/styles";
import styles from "./styles/PaletteStyles"

class SingleColorPalette extends Component {
    constructor(props){
        super(props);
        this._shades = this.gatherShades(this.props.palette, this.props.colorId)
        this.state = {
            deactivateOverflow: false,
            format: "hex"
        }
    }
    gatherShades(palette, colorToFilterBy){
        let shades = [];
        let allColors = palette.colors;
        for(let key in allColors){
            shades=shades.concat(
                allColors[key].filter(color => color.id === colorToFilterBy)
            )
        }
        return shades.slice(1);
    }
    deactivateOverflow = (time) =>{
        clearTimeout(this.timeoutID);
        this.setState({
            deactivateOverflow: true
        }, () => {
            this.timeoutID = setTimeout(() => this.setState({deactivateOverflow: false}),time)
        })
    }
    changeFormat = (val) =>{
        this.setState({format: val})
    }
    render() {
        const {classes} = this.props;
        const {format} = this.state;
        const {paletteName, emoji, id} = this.props.palette;
        const colorBoxes = this._shades.map(color => {
            return <ColorBox
                        key={color.name} 
                        name={color.name} 
                        background={color[format]} 
                        showingFullPalette={false}
                        deactivateOverflow={this.deactivateOverflow}
                    />
        })
        return (
            <div className={`${classes.palette} ${this.state.deactivateOverflow&&classes.deactivateOverflow}`}>
                <Navbar handleChange={this.changeFormat} showingAllColors = {false}/>
                <div className={classes.paletteColors}>
                    {colorBoxes}
                    <div className={classes.goBack} >
                        <Link to={`/palette/${id}`}>GO BACK</Link>
                    </div>
                </div>
                <PaletteFooter paletteName={paletteName} emoji={emoji} />
            </div>
        );
    }
}

export default withStyles(styles)(SingleColorPalette);