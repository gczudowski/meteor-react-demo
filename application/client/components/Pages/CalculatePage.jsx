CalculatePage = React.createClass({

    render() {
        return (
            <div>
                Oblicz swoje BMI<br/>
                <input className="input-responsive-normal" type="text" ref="asdzxc" placeholder="waga [kg]"/>
                <input className="input-responsive-normal" type="text" ref="qwerty" placeholder="wysokość [cm]"/>
                <button className="button button-non-selectable button-responsive-normal"
                                ref="loginButton" onClick={this.calculate}>Oblicz</button>
            </div>
        );
    },
	
	calculate() {
		let asdzxc = this.refs.asdzxc.value;
		let qwerty = this.refs.qwerty.value;
		alert(Calculations.calculate(asdzxc, qwerty));
	},
	
});
