var Button = React.createClass({

    getInitialState: function() {
       return {val: 0}
    },
    update: function() {
        this.setState({ val: this.state.val + 1})
    },
    componentWillMount: function() {
        this.setState({ m: 2 });
    },
    render: function() {
        console.log('rendering');
        return <Button onClick={this.update}>{this.state.val*this.state.m}</Button>
    },
    componentDidMount() {
        this.inc = setInterval(this.update, 500)
    },
    componentWillUnmount() {
        clearInterval(this.inc);
    }

});