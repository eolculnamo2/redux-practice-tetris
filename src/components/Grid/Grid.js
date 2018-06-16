import React from 'react';
import './Grid.scss';
import { connect } from 'react-redux';
import {
    increment,
    decrement
} from '../../redux/reducers/counter';

import {
    generate,
    isOccupied
} from '../../redux/reducers/positions';

const gridWidth = Array(25).fill(false)
const gridHeight = Array(30).fill(false)

class Grid extends React.Component {
    constructor(){
        super()
        //will move when i implement a  play button
        setInterval(()=>{
            this.props.generate()
        }, 750)
    }
    
    componentDidMount(){
        window.addEventListener('keydown', (e)=>{
            let key = e.which || e.keyCode
            //Press Q/Left Arrow
            if (key == 81 || key == 37) {
                this.props.turnLeft()
            }
            //Press E/Right Array
            else if (key == 69 || key == 39) {
                this.props.turnRight()
            }
        })
    }

    render(){
        return(
            <table id="grid-id" className="grid-box">
            
                {gridHeight.map((x,i)=>{
                    return(
                    <tr id={'row'+i} key={'row'+i}>

                        {gridWidth.map((y,j)=>{
                            let coord = this.props.positions
                            let occupied = false
                            
                            for (var t of this.props.positions[this.props.positions.length-1]) {
                                if (t[0] === i && t[1] === j) {
                                    occupied = true
                                    break
                                }
                            }

                            let inlineStyle = {
                                backgroundColor: occupied ? 'black' : 'white'
                            }
                            return(       
                                <td onClick={this.props.generate} style={inlineStyle} id={i+"cell"+j} key={i+"cell"+j}>
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
        positions: state.positions.positions,
        isOccupied: state.positions.isOccupied
    }
} 

const mapDispatchToProps = dispatch =>{
    return {
        increment,
        decrement,
        generate,
        isOccupied
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Grid)