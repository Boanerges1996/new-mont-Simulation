import React from 'react';
// import './headgrade.css';
import sad from '../sad.png';
import smiley from '../smily.png';


export default class Grind extends React.Component{

    state = {
        grind:10,
        recovery:((10*0.262539)+69.73867).toFixed(2),
        images:sad,
        targetRecover:2,
        varyingPercent:((2-69.738673)/0.262539).toFixed(2)
    }
    changeGrind=e=>{
        this.setState({
            grind:e.target.value,
            recovery:((e.target.value*0.262539)+69.738673).toFixed(2)
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
            varyingPercent:((e.target.value-69.73867)/0.262539).toFixed(2)
        })
    }
    render(){
        return (
            <div className="headgrade">
                <div className="headinputs">
                    <div>
                        <h3>Input Variable</h3>
                        <label>Grind Concentration</label><input type="text" value={this.state.grind} onChange={this.changeGrind}/>
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
                        Change Grind to<br/>
                        <br/>
                        <table>
                            <tr>
                                <td><span>{this.state.varyingPercent}</span></td>
                                <td>ppm</td>
                            </tr>
                        </table>
                    </div>

                </div>
                <div className="grindgraphs">

                </div>
                <div className="headdescription">
                    <h4>NOTE</h4>
                    <h6>This model is built at constant</h6>
                    <ul>
                        <li>HeadGrade</li>
                        <li>Cyanide Concentration</li>
                        <li>Pulp Density</li>
                    </ul>
                </div>
            </div>
        )
    }
}