
var HelloWorld = require('./HelloWorld.jsx');
var React = require('react');

var Helloworld = React.creatClass({
   getInitialState: function() {
    return {
        name: 'world'
    }
   },
    render: function() {
        return (
            <div className="hello-form">
                <input type="text" onChange={this.onChange} />
                <HelloWorld name={this.state.name} />
            </div>
        );
    },
    onChange: function(e) {
        this.setState({
            name: e.target.value
        });
    }
});

module.exports = HelloWorld;