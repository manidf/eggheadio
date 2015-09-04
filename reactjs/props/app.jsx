var App = React.createClass({
    getDefaultProps: function(){
        return {
            txt: 'this is the default property value',
            cat: 0
        }
    },
    propTypes: {
        text: React.PropTypes.string,
        cat: React.PropTypes.number.isRequired
    },
    render: function() {
        var txt = this.props.txt;
        return (
            <div>
                <b>PROPS DEMO</b>
                <h1>{txt}</h1>
            </div>
        )
    }
});

React.render(<App cat={90} txt="this is the props, props are like HTML attributes, they are pretty cool" />, document.body);