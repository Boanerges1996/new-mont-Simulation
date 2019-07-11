import React from 'react';
import './wholepage.css';
import Headgrade from './first tab/headgrade';
import Cyanide from './second tab/cyanide';
import Grind from './third tab/grind';
import Recoverymodel from './fourth tab/recovery';
import { Menu } from "semantic-ui-react";



export default class Wholepage extends React.Component{
    state ={
        showHead:true,
        showCyanide:false,
        showGrind:false,
        showRecover:false,
        head:true,
        grind:false,
        cyanide:false,
        recovery:false
    }
    headClicked = ()=>{
        this.setState({
            showHead:true,
            showCyanide:false,
            showGrind:false,
            showRecover:false,
            head:true,
            grind:false,
            cyanide:false,
            recovery:false
        })
    }
    cyanideClicked = ()=>{
        this.setState({
            showHead:false,
            showCyanide:true,
            showGrind:false,
            showRecover:false,
            head:false,
            grind:false,
            cyanide:true,
            recovery:false
        })
    }
    grindClicked=()=>{
        this.setState({
            showHead:false,
            showCyanide:false,
            showGrind:true,
            showRecover:false,
            head:false,
            grind:true,
            cyanide:false,
            recovery:false
        })
    }
    recoveryClicked=()=>{
        this.setState({
            showHead:false,
            showCyanide:false,
            showGrind:false,
            showRecover:true,
            head:false,
            grind:false,
            cyanide:false,
            recovery:true
        })
    }
    render(){
        let head = null
        let cyanide = null
        let grind = null
        let lastrecover = null;
        if (this.state.showHead){
            head = <Headgrade />
        }
        if(this.state.showCyanide){
            cyanide=<Cyanide />
        }
        if(this.state.showGrind){
            grind = <Grind />
        }
        if(this.state.showRecover){
            lastrecover=<Recoverymodel />
        }
        return (
            <div className="whole">
                <Header 
                    clickHead={this.headClicked} 
                    clickCyanide={this.cyanideClicked}
                    clickGrind={this.grindClicked}
                    clickRecovery={this.recoveryClicked}
                    Head={this.state.head}
                    Grind={this.state.grind}
                    Cyanide={this.state.cyanide}
                    Recovery={this.state.recovery}
                />
                <Logo />
                <div className="mainbody">
                    {head}
                    {cyanide}
                    {grind}
                    {lastrecover}
                </div>
            </div>
        )
    }
}

class Header extends React.Component{
   
    render(){
        
        return (
            <div className="tabs">
                <Menu>
                    <Menu.Item 
                        name="Headgrade vrs Extraction"
                        active={this.props.Head}
                        onClick={this.props.clickHead}
                    />
                    <Menu.Item
                        name="Cyanide vrs Extraction"
                        active={this.props.Cyanide}
                        onClick={this.props.clickCyanide}
                    />
                    <Menu.Item 
                        name="Grind vrs Extraction"
                        active={this.props.Grind}
                        onClick={this.props.clickGrind}
                    />
                    <Menu.Item 
                        name="Recovery Model"
                        active={this.props.Recovery}
                        onClick={this.props.clickRecovery}
                    />
                </Menu>

            </div>
        )
    }
}


const Logo =()=>{
    return(
        <div className="Logo">
             
        </div>
    )
}