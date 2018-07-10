
import React from 'react';
import './style.css';

class Select extends React.Component{

    constructor(props){
        super(props);
    }

    render(){

        return (
            <div>
                <h3>{this.props.name}</h3>
                <select className={'options'} onChange={this.props.handleChange}>
                    {this.props.values.map(item =>(
                            <option value={item}>{item}</option>
                        )
                    )}
                </select>
            </div>
        );
    }
}

export default Select;