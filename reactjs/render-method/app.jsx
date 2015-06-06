
var App = React.createClass({
    render: function(){
        var txt = this.props.txt
        return (
            <div>
                <b> Bold </b>
                <h1>{txt}</h1>
            </div>
        )
    }
});

React.render(<App txt="this is the props text" />, document.body);