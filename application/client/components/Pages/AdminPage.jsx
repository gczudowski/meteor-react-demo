AdminPage = React.createClass({
    render() {
        return (
            <div>
                <input type="text" ref="titleField" className="input-responsive-normal"/>
                <button onClick={this.setNewTitle} className="button button-non-selectable button-responsive-normal">Ustaw nowy tytuł</button>
            </div>
        );
    },

    setNewTitle() {
        let newTitle = this.refs.titleField.value;
        this.refs.titleField.value = "";
        Meteor.call("setAppTitle", newTitle);
    }
});
