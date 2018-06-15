import React from 'react';
import './Grid.scss';
import { connect } from 'react-redux';
import {
    increment,
    decrement
} from '../../redux/reducers/counter';

import {
    generate
} from '../../redux/reducers/positions';
//send a point (i.e. [5,3] )
//Coords will come from Redux... 
const gridWidth = Array(25).fill(false)
const gridHeight = Array(30).fill(false)

class Grid extends React.Component {
    constructor(){
        super()
        //will move when i implement a  play button
        setInterval(()=>{
            this.props.generate()
        }, 2000)
    }
    render(){
        return(
            <table id="grid-id" className="grid-box">
            
                {gridHeight.map((x,i)=>{
                    //PARENT MAP
                    return(
                        //x,y = i,j
                    <tr id={'row'+i} key={'row'+i}>
                        {gridWidth.map((y,j)=>{
                           // alert(this.props.count)
                            let coord = this.props.positions
                            //CHILD MAP
                            var inlineStyle = {
                                backgroundColor: coord[0] === i && coord[1] === j ? 'black' : 'white'
                            }
                            return(       
                                <td onClick={this.props.generate} style={inlineStyle} id={i+"cell"+j} key={i+"cell"+j}>
                                    {i+"cell"+j}
                                </td>
                            )
                        })}
                    </tr>
       )
                })}
            </table>
        )
    }
}

const mapStateToProps = state => {
    return {
        count: state.counter.count,
        positions: state.positions.positions
    }
} 

const mapDispatchToProps = dispatch =>{
    return {
        increment,
        decrement,
        generate
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Grid)