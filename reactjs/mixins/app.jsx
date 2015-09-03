var ReactMixin = {
    getInitialState: function() {
      return { count:0 }
    },
    componentWillMount: function() {
     console.log('will mount!');
    },
    incrementCount: function() {
        this.setState({ count: this.state.count + 1})
    }
};

var App = React.createClass({
   render: function() {
       render (
           <div>
               <Button txt="this is the button"></Button>
               <br/>
               <Label txt="this is the label"></Label>
           </div>
       )
   }
});

var Button = React.createClass({
    render: function() {
        return <button>{this.props.txt}</button>
    }
});

var Label = React.createClass({
   render: function(){
       return <label for="">{this.props.txt}</label>
   }
});

React.render(<App />, document.body);