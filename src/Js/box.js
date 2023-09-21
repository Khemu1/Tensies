import React from "react";
function Box(props) {
	return (
		<div className={props.isHeld ? "greenBox" : "box"} onClick={props.toggle}>
			{props.value}
		</div>
	);
}
export default Box;
