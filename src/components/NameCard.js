import React from "react";

const NameCard = (props) => {
	return (
		<div className={props.className}>
			<div id={props.id}>Name: {props.name}</div>
		</div>
	)
}

export default NameCard;