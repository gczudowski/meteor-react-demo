MenuItem = React.createClass({
    render() {
        return (
            <li><div onClick={this.props.onClick}>{this.props.content}</div></li>
        );
    }
});
