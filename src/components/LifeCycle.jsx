import React, { Component } from 'react';

class LifeCycle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 100,
            userID: 1
        }
        this.decrement = this.decrement.bind(this);
    }

    componentDidMount() {
        console.log('Component is mounted');
    }

    componentDidUpdate() {
        console.log('Component did update');
    }

    componentWillUnmount() {
        console.log('Component unmounted');
    }

    decrement = function() {
        this.setState(prevState => {
            return {
                count: prevState.count - 1
            }
        })
    }

    render() {
        return(
            <>
                JSX in class based component
                <h3>Count is {this.state.count}</h3>
                <button onClick={this.decrement}>Decrement</button>
            </>
        )
    }
}

export default LifeCycle;