
var App = React.createClass({
    getInitialState:function(){
        return {
            txt: 'the state txt',
            id: 0
        }
    },
    update: function(e){
      this.setState({
          txt: e.target.value
      })
    },
    render: function(){
        return (
            <div>
                <input type="text" onChange={this.update} />
                <h1>{this.state.txt}</h1>
            </div>
        )
    }
});

React.render(<App />, document.body);