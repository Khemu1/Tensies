import React from "react";
import Box from "./box";
import { nanoid } from "nanoid";
function SmallBox() {
	const [Randoms, setRandoms] = React.useState(gen());
	const [Rolls, setRolls] = React.useState(0);
	const [tensies, setTensies] = React.useState(false);
	React.useEffect(() => {
		// to make it only run at the start
		localStorage.setItem("roll", 9999999);
	}, []);
	React.useEffect(() => {
		let start = Randoms[0].value;
		const allHeld = Randoms.every((random) => random.isHeld);
		const allV = Randoms.every((random) => random.value === start);
		if (allHeld && allV) {
			setTensies(true);
			console.log("you won");
		}
	}, [Randoms]);
	function newValue() {
		return {
			value: Math.floor(Math.random() * 10),
			isHeld: false,
			id: nanoid(),
		};
	}
	function gen() {
		let arr = [];
		for (let i = 0; i < 10; i++) {
			arr.push(newValue());
		}
		return arr;
	}

	function regen() {
		if (!tensies) {
			const heldValues = Randoms.filter((e) => e.isHeld).map((e) => e.value);
			if (heldValues.length > 1 && !heldValues.every((val) => val === heldValues[0])) {
				// Reset the game because the held values are not the same.
				setRandoms(gen);
			} else {
				setRandoms((old) =>
					old.map((e) => {
						return e.isHeld ? e : newValue();
					})
				);
			}
			setRolls((old) => old + 1);
		} else {
			setRandoms(gen);
			if (localStorage.getItem("roll") > Rolls) localStorage.setItem("roll", Rolls);
			setTensies(false);
		}
	}

	function holdDice(id) {
		setRandoms((prev) =>
			prev.map((e) => {
				return e.id === id ? { ...e, isHeld: !e.isHeld } : e;
			})
		);
	}

	const boxes = Randoms.map((e) => {
		return <Box value={e.value} isHeld={e.isHeld} id={e.id} toggle={() => holdDice(e.id)} />;
	});
	return (
		<div className="smallBox">
			<div className="container">
				<div className="head">
					<h2>tensies</h2>
					<p>{!tensies ? "Roll until all dice are the same. Click each die to freeze it at its current value between rolls" : "Congrats you won !"}.</p>
				</div>
				<div className="boxes">{boxes}</div>

				<div className="button" onClick={regen}>
					{!tensies ? "Roll" : "Reset"}
				</div>

				<div className="rolls">Number or rolls is : {Rolls}</div>
			</div>
		</div>
	);
}
export default SmallBox;
