
import React from 'react';
import Select from "./Select.js";
import Canvas from "./Canvas.js";
import {updateColor, updateHeight, updateWidth} from './Canvas_actions';
import {connect} from 'react-redux';

class Combine extends React.Component {

    constructor(props){
        super(props);
    }

    // this.props from below 'connect'
    render(){
        const color = ['red', 'blue', 'green'];
        const length = ['100px', '200px', '300px'];

        return (
          <div>
              <div className={'navigate'}>
                  <Select name={'Color'} values={color} handleChange={(evt) => {this.props.changeColor(evt.target.value)}} />
                  <Select name={'Width'} values={length} handleChange={(evt) => {this.props.changeWidth(evt.target.value)}}/>
                  <Select name={'Height'} values={length} handleChange={(evt) => {this.props.changeHeight(evt.target.value)}}/>
            </div>
              <Canvas bgColor={this.props.color} width={this.props.width} height={this.props.height}/>
          </div>
        );
    }

}

/*
"state" from 'Canvas_Reduces', initial state
 */
export default connect (
    (state) => {
        return {
          color: state.color,
          height: state.height,
          width: state.width
        };
    }, dispatch =>({
        changeColor: value => dispatch(updateColor(value)),
        changeHeight: value => dispatch(updateHeight(value)),
        changeWidth: value => dispatch(updateWidth(value))
    })
)
(Combine);