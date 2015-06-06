
var App = React.createClass({
    getDefaultProps: function(){
      return {
          txt: 'This is a default prop',
          cat: 0
      }
    },
    propTypes: {
      txt: React.propTypes.string,
      cat: React.propTypes.number.isRequired
    },
    render: function(){

        var txt = this.props.txt;

        return (
            <div>
                <b> Bold </b>
                <h1>{txt}</h1>
            </div>
        )
    }
});

React.render(<App cat={5} />, document.body);