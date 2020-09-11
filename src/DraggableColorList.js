import React from 'react';
import {SortableContainer} from 'react-sortable-hoc';
import DraggableColorBox from './DraggableColorBox';
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/DraggableColorListStyles";


const DraggableColorList = SortableContainer(({colors, removeColor, classes})=>{
    return(
        <div className={classes.root}>
            {colors.map((color, i) => (
              <DraggableColorBox 
                    index={i}
                    key={color.name} 
                    color={color.color} 
                    name={color.name} 
                    handleClick={removeColor} />
            ))}
        </div>
    )
})

export default withStyles(styles)(DraggableColorList);