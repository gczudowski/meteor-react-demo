HeaderMenu = React.createClass({

    render() {
        return (
            <div className="menu">
                <ul className="no-js">
                    <li><div className="clicker" onMouseOver={this.showMenu}>
                        <img src="img/menu3.png" width="38" height="38"/></div>
                        <ul className="menuBar" ref="menu" onClick={this.hideMenu}>
							<li><div onClick={this.goToStart}>Strona główna</div></li>
							<li><div onClick={this.goToBmi}>Oblicz BMI</div></li>
							<li><div onClick={this.logout}>Logout</div></li>
							<li><div onClick={this.goToAdminPage}>Admin</div></li>
                        </ul>
                    </li>
                </ul>
            </div>
        );
    },

    showMenu() {
        this.refs.menu.style.opacity = "1";
    },
    hideMenu() {
        this.refs.menu.style.opacity = "0";
    },
    goToStart() {
        FlowRouter.go('/main');
    },

    goToBmi() {
        FlowRouter.go('/bmi');
    },

    logout() {
        UserState.logOut();
        FlowRouter.go('/');
    },

    goToAdminPage() {
        FlowRouter.go('/admin');
    }

});
