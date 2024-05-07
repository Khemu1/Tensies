import React from "react";
function Box(props) {
	// this is the container that has the values in it
	return (
		<div className={props.isHeld ? "greenBox" : "box"} onClick={props.toggle}>
			{props.value}
		</div>
	);
}
export default Box;
