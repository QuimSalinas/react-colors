import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import './styles/Page.css';
import PaletteList from './PaletteList';
import Palette from "./Palette";
import seedColors from "./seedColors";
import NewPaletteForm from './NewPaletteForm';
import {generatePalette} from "./colorHelpers";
import SingleColorPalette from './SingleColorPalette';
import {TransitionGroup, CSSTransition} from "react-transition-group";
import Page from "./page"


class App extends Component{
  constructor(props){
    super(props);
    const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));
    this.state={
      palettes: savedPalettes || seedColors
    }
    this.findPalette = this.findPalette.bind(this)
  }
  deletePalette = (id)=>{
    this.setState({palettes: this.state.palettes.filter(p=>p.id!==id)},this.syncLocalStorage);
  }
  findPalette(id){
    return this.state.palettes.find(function(palette){
      return palette.id===id
    })
  }
  savePalette = newPalette =>{
    this.setState({palettes: [...this.state.palettes, newPalette]},this.syncLocalStorage)
  }
  syncLocalStorage = () =>{
    window.localStorage.setItem("palettes", JSON.stringify(this.state.palettes));
  }
  render(){
    return (
      <Route render={({location}) => (
        <TransitionGroup>
          <CSSTransition key={location.key} classNames='fade' timeout={200}>
            <Switch location={location}>
              <Route exact
                    path="/palette/new"
                    render={(routeProps)=><Page>
                                              <NewPaletteForm 
                                              maxColors={20}
                                              savePalette={this.savePalette}
                                              palettes={this.state.palettes} 
                                              {...routeProps}/>
                                          </Page>
              }/>
              <Route exact 
                      path="/" 
                      render={(routeProps)=><Page>
                                              <PaletteList 
                                                palettes={this.state.palettes} 
                                                {...routeProps} 
                                                deletePalette={this.deletePalette}/>
                                            </Page>
              }/>
              <Route exact 
                      path="/palette/:id" 
                      render={(routeProps)=>
                        <Page>
                          <Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))}/>
                        </Page>
              }/>
              <Route exact 
                      path="/palette/:paletteId/:colorId" 
                      render={(routeProps)=>
                      <Page>
                        <SingleColorPalette 
                              colorId={routeProps.match.params.colorId}
                              palette={generatePalette(this.findPalette(routeProps.match.params.paletteId))}/>
                      </Page>
              }/>
              <Route 
                      render={(routeProps)=><Page>
                                              <PaletteList 
                                                palettes={this.state.palettes} 
                                                {...routeProps} 
                                                deletePalette={this.deletePalette}/>
                                            </Page>
              }/>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )}/>
    );
  }
}

export default App;
