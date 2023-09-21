import React from "react";
import SmallBox from "./smallBox";
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
