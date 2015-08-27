var Button = React.createClass({
    getInitialState(){
       return {
           val: 0
       }
    },
    update: function() {
        this.setState({
            val: this.state.val + 1
        });
    },
    render: function() {
        console.log('rendering');
        return <button onClick={this.update}>{this.state.val}</button>
    }
});

React.render(<Button/>, document.body);