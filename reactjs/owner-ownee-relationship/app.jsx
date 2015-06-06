
var App = React.createClass({
    getInitialState: function(){
        return {
            txt: ' '
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
                <Widget txt={this.state.txt} update={this.update} />
                <Widget txt={this.state.txt} update={this.update} />
                <Widget txt={this.state.txt} update={this.update} />
                <Widget txt={this.state.txt} update={this.update} />
            </div>
        )
    }
});

var Widget = React.createClass({
    render(){
        return (
            <div>
                <input type="text" onChange={this.props.update} />
                <h1>{this.props.txt}</h1>
                <br/>
            </div>
        )
    }
});

React.render(<App />, document.body);