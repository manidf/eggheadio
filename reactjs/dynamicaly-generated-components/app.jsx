var PersonTable = React.createClass({
    getInitialState: function () {
        return {
            data: [
                {id: 1, fname: "Mannuel", lname: "Ferreira"},
                {id: 2, fname: "Ivo", lname: "Petkov"},
                {id: 3, fname: "Lance", lname: "Kutner"},
                {id: 4, fname: "Evan", lname: "Summers"}
            ]
        }
    },
    render: function() {
        var rows = this.state.data.map(function(person, i) {
            return <PersonRow data={person} key={i} />
        });
        return <table>{rows}</table>
    }
});

var PersonRow = React.createClass({
    render: function() {
        return (
            <tr>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.fname}</td>
                <td>{this.props.data.lname}</td>
            </tr>
        )
    }
});

React.render(<PersonTable />, document.body);