Header = React.createClass({
    render() {
        return (
            <div className="header-wrapper">
                <div className="header_body">
                    <div className="headerTitleFont">
                        {this.props.title}
                    </div>
                    {UserState.getLoggedIn() ? <HeaderMenu/> : ''}
                </div>
            </div>
        );
    }
});
