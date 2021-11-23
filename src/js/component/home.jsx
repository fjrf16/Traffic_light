import React, {useState} from "react";

const Home = () => {
	//hooks
	const [newColor, setColor] = useState("");

	const updateColor = color => {
		setColor(color);
	};

	return (
		<div>
			<div
				className="box rounded-circle"
				style={{ background: newColor }}></div>

			<button
				type="button"
				className="btn m-1 btn-success"
				onClick={() => updateColor("green")}>
				Pass
			</button>
			<button
				type="button"
				className="btn m-1 btn-danger"
				onClick={() => updateColor("red")}>
				Stop
			</button>
			<button
				type="button"
				className="btn m-1 btn-warning"
				onClick={() => updateColor("yellow")}>
				Danger
			</button>
		</div>
	);
};

export default Home;
