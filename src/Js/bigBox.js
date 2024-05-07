import React from "react";
import SmallBox from "./smallBox";
// this is parent container
function BigBox() {
	return (
		<div className="bigBox">
			<div className="container">
				<SmallBox />
			</div>
		</div>
	);
}
export default BigBox;
