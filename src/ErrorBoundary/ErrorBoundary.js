import React, { Component } from 'react';

class ErrorBoundary extends Component { // Use rarely  & It will only work on Production Env.
    state = {
        hasError: false,
        errorMessage: ''
    }

    componentDidCatch = (error, info) => {
        this.setState({
            hasError: true,
            errorMessage: error
        })
    }

    render() {
        if (this.state.hasError)
            return <h1>Something Went Wrong!</h1>
        else
            this.props.children
    }
}

export default ErrorBoundary;