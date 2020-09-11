import React from "react";
import {ChromePicker} from "react-color";
import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/ColorPickerStyles"

class ColorPicker extends React.Component {

  static defaultProps = {
    initialColor: "purple"
  }
  constructor(props) {
    super(props);
    this.state = {
      currentColor: this.props.initialColor,
      newColorName: ""
    };
  }

  componentDidMount() {
    // custom rule will have name 'isPasswordMatch'
    ValidatorForm.addValidationRule('isColorNameUnique', (value) => {
        return this.props.colors.every(({name}) => name.toLowerCase() !== value.toLowerCase())
    });
    ValidatorForm.addValidationRule('isColorUnique', (value) => {
      return this.props.colors.every(({color}) => color !== this.state.currentColor)
    });
  }

  handleColorChange = color => {
    this.setState({
      currentColor: `rgba(${color.rgb.r},${color.rgb.g},${color.rgb.b},${color.rgb.a})`
    });
  };

  handleChange = (evt) =>{
    this.setState({[evt.target.name]: evt.target.value})
  } 

  addNewColor = () =>{
    this.props.addNewColor({name: this.state.newColorName, color: this.state.currentColor});
    this.setState({newColorName: ""});
  }

  render() {
    const { currentColor, newColorName } = this.state;
    const { paletteFull, classes } = this.props;
    return (
            <div className={classes.container}>
                <ChromePicker
                  color={currentColor}
                  onChange={this.handleColorChange}
                  className={classes.picker}
                />
                <ValidatorForm onSubmit={this.addNewColor}
                               instantValidate={false}>
                  <TextValidator
                      placeholder="Color Name"
                      margin="normal"
                      variant="filled"
                      className={classes.colorNameInput}
                      name="newColorName"
                      value={newColorName}
                      onChange={this.handleChange}
                      validators={['required','isColorNameUnique', 'isColorUnique']}
                      errorMessages={['Enter a color name','Color Name must be unique', 'Color already used']}
                  />
                <Button 
                  className={classes.addColor}
                  variant="contained" 
                  color="primary" 
                  style={{backgroundColor: paletteFull ? "grey" : currentColor}}
                  type="submit"
                  disabled={paletteFull}>
                    {paletteFull ? "Palette Full" : "Add Color"}
                  </Button>
              </ValidatorForm>
            </div>
    );
  }
}

export default withStyles(styles)(ColorPicker);