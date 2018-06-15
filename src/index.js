import React from 'react';
import { connect } from 'react-redux';
import {
    increment,
    decrement
} from './redux/reducers/counter';
import Grid from './components/Grid/Grid';


class Index extends React.Component{
    render(){
        return(
            <div>
                <h1>
                    Tetris
                </h1>
                <Grid />
                <h4>
                    Count: {this.props.count}
                </h4>
                <button onClick = {this.props.increment}>
                    Increase
                </button>
                <button onClick = {this.props.decrement}>
                    Decrease
                </button>
            </div>
        )
    }
}

//maps state to props
const mapStateToProps = state => {
    return {
        count: state.counter.count,
    }
  }
  
//dispatcher to props
const mapDispatchToProps = dispatch =>{
    return {
      increment,
      decrement
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Index);;