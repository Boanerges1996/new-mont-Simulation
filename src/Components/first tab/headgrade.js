import React from 'react';
import './headgrade.css';
import sad from '../sad.png';
import smiley from '../smily.png';


export default class Headgrade extends React.Component{

    state = {
        headgrade:10,
        recovery:((10*3.129678)+84.45).toFixed(2),
        images:smiley,
        targetRecover:2,
        varyingPercent:((2-84.45)/3.129678).toFixed(2)
    }
    changeHeadgrade=e=>{
        this.setState({
            headgrade:e.target.value,
            recovery:((e.target.value*3.129678)+84.45).toFixed(2)
        },()=>{
            if(this.state.recovery<90){
                this.setState({
                    images:sad
                })
            }
            else{
                this.setState({
                    images:smiley
                })
            }
        })
    }
    changeTargetRecovery=e=>{
        this.setState({
            targetRecover:e.target.value,
            varyingPercent:((e.target.value-84.4578)/3.129678).toFixed(2)
        })
    }
    render(){
        return (
            <div className="headgrade">
                <div className="headinputs">
                    <div>
                        <h3>Input Variable</h3>
                        <label>Headgrade</label><input type="text" value={this.state.headgrade} onChange={this.changeHeadgrade}/>
                    </div>
                    <br />
                    <br />


                    <div>
                        <h3>Output</h3>
                        Calculated Recovery<br />
                        <table>
                            <tr>
                                <td>Based on Model</td>
                                <td><span>{this.state.recovery}</span></td>
                                <td>
                                    <div>
                                        <img src={this.state.images} alt="image"/>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <br />
                    <br />

                    <div>
                        <h3>What ff???</h3>
                        <table>
                            <tr>
                                <td>Input Target Recovery</td>
                                <td><input type="text" value={this.state.targetRecover} onChange={this.changeTargetRecovery}/></td>
                            </tr>
                        </table>
                        To achieve _____% Recovery<br />
                        Change Cyanide set point to<br/>
                        <br/>
                        <table>
                            <tr>
                                <td><span>{this.state.varyingPercent}</span></td>
                                <td>ppm</td>
                            </tr>
                        </table>
                    </div>

                </div>
                <div className="headgraphs">

                </div>
                <div className="headdescription">
                    <h4>NOTE</h4>
                    <h6>This model is built at constant</h6>
                    <ul>
                        <li>Cyanide concentration</li>
                        <li>% Passing 75 microns</li>
                        <li>Pulp Density</li>
                    </ul>
                </div>
            </div>
        )
    }
}