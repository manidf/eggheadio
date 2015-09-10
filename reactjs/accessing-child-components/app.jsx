var App = React.createClass({
    render: function() {
        return <Button> <myIcon/> REACT </Button>
    }
});

var Button = React.createClass({
    render: function() {
        return <button>{this.props.children}</button>
    }
});

var myIcon = React.createClass({
    render: function() {
        return <span className="icon material-icons"></span>
    }
});

React.render(<App />, document.getElementById('PageContent'));