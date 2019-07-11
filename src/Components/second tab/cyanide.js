import React from 'react';
// import './headgrade.css';
import sad from '../sad.png';
import smiley from '../smily.png';


export default class Cyanide extends React.Component{

    state = {
        cyanide:10,
        recovery:((10*0.056847)+78.7693).toFixed(2),
        images:sad,
        targetRecover:2,
        varyingPercent:((2-78.7693)/0.056847).toFixed(2)
    }
    changeCyanide=e=>{
        this.setState({
            cyanide:e.target.value,
            recovery:((e.target.value*0.056847)+78.7693).toFixed(2)
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
            varyingPercent:((e.target.value-78.7693)/0.056847).toFixed(2)
        })
    }
    render(){
        return (
            <div className="headgrade">
                <div className="headinputs">
                    <div>
                        <h3>Input Variable</h3>
                        <label>Cyanide Concentration</label><input type="text" value={this.state.cyanide} onChange={this.changeCyanide}/>
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
                <div className="cyanidegraphs">

                </div>
                <div className="headdescription">
                    <h4>NOTE</h4>
                    <h6>This model is built at constant</h6>
                    <ul>
                        <li>HeadGrade</li>
                        <li>% Passing 75 microns</li>
                        <li>Pulp Density</li>
                    </ul>
                </div>
            </div>
        )
    }
}