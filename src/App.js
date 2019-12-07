import React from 'react';
import './App.scss';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			config: {
				totalPeople: 0,
				notPizzaPeople: 0,
				hungerLevel: 0,
				mealType: 1,
				pizzaForTomorrow: false
			}
		};
	}

	getConfigValue = (event) => {
		const value = event.currentTarget.value;
		const property = event.currentTarget.name;
		this.setState(prevState => {
			const newConfig = {...prevState.config, [property]: value};
			return {config: newConfig};
		});
	}
	render() {
		return (
			<div className="app">
				<h1 className="app__title"><span role="img" aria-label="Pizza">🍕</span> Configurator</h1>
				<ul className="app__config config">
					<li className="config__item">
						<label htmlFor="totalPeople" className="form__label">Número de personas</label>
						<input type="number" id="totalPeople" className="form__field" name="totalPeople" min="3" onKeyUp={this.getConfigValue} />
					</li>
					<li className="config__item">
						<label htmlFor="notPizzaPeople" className="form__label">Alguien no come pizza?</label>
						<input type="number" id="notPizzaPeople" name="notPizzaPeople" onKeyUp={this.getConfigValue} />
					</li>
					<li className="config__item">
						<label htmlFor="hungerLevel" className="form__label">Hambre</label>
						<select name="hungerLevel" id="hungerLevel" className="field field--dropdown" onChange={this.getConfigValue}>
							<option value="1">Pichí, pichá</option>
							<option value="2">Poca</option>
							<option value="3">Normal</option>
							<option value="4">Normal,nivel T-REX</option>
							<option value="5">Me comía a los asistentes</option>
						</select>
					</li>
					<li className="config__item">
						Cómida o cena?
						<select name="mealType" id="mealType" className="field field--dropdown" onChange={this.getConfigValue}>
							<option value="1">Comida</option>
							<option value="2">Cena</option>
						</select>
					</li>
					<li className="config__item">
						<label htmlFor="pizzaForTomorrow" className="form__label">
							<input
								id="pizzaForTomorrow"
								name="pizzaForTomorrow"
								type="checkbox"
								onClick={this.getConfigValue}
								defaultChecked={this.state.config.pizzaForTomorrow}
							/> Quieres que sobre?
						</label>
					</li>
				</ul>
			</div>
		);
	}
}

export default App;
