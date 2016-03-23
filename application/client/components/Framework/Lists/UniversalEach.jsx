UniversalEach = React.createClass({

    showElements() {
        let showElements = "";
        for(let key in this.props.fieldsToShow) {
            if (showElements != "") {
                showElements = showElements + " - ";
            }
            if(this.props.fieldsToShow[key].indexOf('.') != -1)	{
                let res = this.props.fieldsToShow[key].split(".");
                if (this.props.element[res[0]] != null && this.props.element[res[0]] != undefined) {
                    showElements = showElements + this.props.element[res[0]][res[1]];
                }
            } else {
                showElements = showElements + this.props.element[this.props.fieldsToShow[key]];
            }
        }

        return (
            <span>
				{showElements}
			</span>
        );
    },

    render() {
        return (
            <div>
                {this.showElements()} {this.showDeleteButton()}
            </div>
        );
    },

    showDeleteButton() {
        return (
            <button onClick={this.deleteRecord}>Delete</button>
        );
    },
    deleteRecord() {
        Meteor.call("removeUser" , this.props.element._id);
    }
});