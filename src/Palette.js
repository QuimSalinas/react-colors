import React, { Component } from 'react';
import ColorBox from "./colorBox";
import styles from "./styles/PaletteStyles"
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter'
import { withStyles } from "@material-ui/styles";


class Palette extends Component {
    constructor(props){
        super(props);
        this.timeoutID = "";
        this.state = {
            deactivateOverflow: false,
            level: 500,
            format: "hex"
        }
    }
    deactivateOverflow = (time) =>{
        clearTimeout(this.timeoutID);
        this.setState({
            deactivateOverflow: true
        }, () => {
            this.timeoutID = setTimeout(() => this.setState({deactivateOverflow: false}),time)
        })
    }

    changeLevel = (level) =>{
        this.setState({
            level
        })
    }
    
    changeFormat = (val) =>{
        this.setState({format: val})
    }

    render() {
        const {classes} = this.props;
        const {colors, paletteName, emoji, id} = this.props.palette;
        const {level, format} = this.state;
        const colorBoxes = colors[level].map(color =>{
            return <ColorBox background={color[format]} 
                            name={color.name}
                            colorId={color.id}
                            paletteId={id}
                            deactivateOverflow={this.deactivateOverflow}
                            key={color.id}/>
        })
        return (
            <div className={`${classes.palette} ${this.state.deactivateOverflow&&classes.deactivateOverflow}`}>
                <Navbar level={level} changeLevel={this.changeLevel} handleChange={this.changeFormat}/>
                <div className={classes.paletteColors}>
                    {colorBoxes}
                </div> 
                <PaletteFooter paletteName={paletteName} emoji={emoji} />
            </div>
        );
    }
}

export default withStyles(styles)(Palette);