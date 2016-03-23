UniversalList = React.createClass({

    renderUsers() {
        return this.props.list.map((element) => {
            return <UniversalEach key={element._id}
            id={element._id}
            element={element}
            fieldsToShow={this.props.fieldsToShow}
            />;
        });
    },

    render() {
        return (
            <div>{this.props.listName} <br/>
                {this.renderUsers()}
            </div>
        );
    }
});