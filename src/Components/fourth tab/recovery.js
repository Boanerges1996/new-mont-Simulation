import React from 'react';
import './recovery.css';
import sad from '../sad.png';
import smiley from '../smily.png'


export default class Recoverymodel extends React.Component{
    state ={
        cyanide:5,
        grind:20,
        headgrade:8,
        recovery:((0.05495*5)+(3.9842*8)+(0.4145*20)+40.35926).toFixed(2),
        images:sad,
        target_recovery:20,
        output:((20-(0.05495*5)-(0.4145*20)-40.35926)/3.9842).toFixed(2),
        symbol:"g/t",
        checkradio:"headgrade"
    }
    changeCyanide=e=>{
        this.setState({
            cyanide:e.target.value,
            recovery:((0.05495*e.target.value)+(3.9842*this.state.headgrade)+(0.4145*this.state.grind)+40.35926).toFixed(2)
        },()=>{
            if(this.state.recovery>90){
                this.setState({
                    images:smiley
                })
            }
            else{
                this.setState({
                    images:sad
                })
            }
        })
    }
    changeHead=e=>{
        this.setState({
            headgrade:e.target.value,
            recovery:((0.05495*this.state.cyanide)+(3.9842*e.target.value)+(0.4145*this.state.grind)+40.35926).toFixed(2)
        },()=>{
            if(this.state.recovery>90){
                this.setState({
                    images:smiley
                })
            }
            else{
                this.setState({
                    images:sad
                })
            }
        })
    }
    
    changeGrind=e=>{
        this.setState({
            grind:e.target.value,
            recovery:((0.05495*this.state.cyanide)+(3.9842*this.state.headgrade)+(0.4145*e.target.value)+40.35926).toFixed(2)
        },()=>{
            if(this.state.recovery>90){
                this.setState({
                    images:smiley
                })
            }
            else{
                this.setState({
                    images:sad
                })
            }
        })
    }


    changeTargetRecovery=e=>{
        this.setState({
            target_recovery:e.target.value
        },()=>{
            if(this.state.checkradio==="headgrade"){
                this.setState({
                    output:((this.state.target_recovery-(0.05495*this.state.cyanide)-(0.4145*this.state.grind)-40.35926)/3.9842).toFixed(2),
                    symbol:"g/t"
                })
            }
            else if(this.state.checkradio==="cyanide"){
                this.setState({
                    output:((this.state.target_recovery-(3.9842*this.state.headgrade)-(0.4145*this.state.grind)-40.3526)/0.05495).toFixed(2),
                    symbol:"ppm"
                })

            }
        })
    }
    changeToHeadgrade =e=>{
        this.setState({
            checkradio:"headgrade",
            output:((this.state.target_recovery-(0.05495*this.state.cyanide)-(0.4145*this.state.grind)-40.35926)/3.9842).toFixed(2),
            symbol:"g/t"
        })
    }
    changeToCyanide=e=>{
       this.setState({
           checkradio:"cyanide",
           output:((this.state.target_recovery-(3.9842*this.state.headgrade)-(0.4145*this.state.grind)-40.3526)/0.05495).toFixed(2),
           symbol:"ppm"
       })
    }
    
    render(){
        return(
            <div className="recovery">
                <div className="firstPart">
                    <h2>Input Variables</h2>
                    <table>
                        <tr>
                            <td>Cyanide Concentration</td>
                            <td><input type="text" onChange={this.changeCyanide} value={this.state.cyanide}/></td>
                            <td>ppm</td>
                        </tr>
                        <tr>
                            <td>grind</td>
                            <td><input type="text" onChange={this.changeGrind} value={this.state.grind}/></td>
                            <td>%</td>
                        </tr>
                        <tr>
                            <td>Head Grade</td>
                            <td><input type="text" onChange={this.changeHead} value={this.state.headgrade}/></td>
                            <td>g/t</td>
                        </tr>
                    </table>
                    <br />
                    <h2>Output</h2>
                    <h5>Calculated recovery based on model</h5>
                    <table>
                        <tr>
                            <td><span>{this.state.recovery}</span></td>
                            <td><img src={this.state.images} alt="emoji"/></td>
                        </tr>
                    </table>

                </div>
                <div className="secondPart">
                    <h2>What fff????</h2>
                    <table>
                        <tr>
                            <td>Input Target Recovery</td>
                            <td><input type="text" value={this.state.target_recovery} onChange={this.changeTargetRecovery}/></td>
                            <td>%</td>
                        </tr>
                    </table>
                    <br />
                    <br />
                    <h3>By Changing</h3>
                    <table>
                        <tr>
                            <td>Headgrade</td>
                            <td><input type="radio" name="recover" value="headgrade" onChange={this.changeToHeadgrade} checked={this.state.checkradio==="headgrade"}/></td>
                        </tr>
                        <tr>
                            <td>Cyanide concentration</td>
                            <td><input type="radio" name="recover" value="cyanide" onChange={this.changeToCyanide} checked={this.state.checkradio==="cyanide"}/></td>
                        </tr>
                    </table>
                    <br />
                    <h3>Output</h3>
                    <table>
                        <tr>
                            <td><div>{this.state.output}</div></td>
                            <td>{this.state.symbol}</td>
                        </tr>
                    </table>

                </div>

            </div>
        )
    }
}