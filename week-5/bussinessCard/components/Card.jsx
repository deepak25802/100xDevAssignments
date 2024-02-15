export function Card(props) {
	return (
		<div className="card-continaer">
				<h3 className="name">{props.name}</h3>
				<p className="desc">{props.description}</p>
				<ul className="interestsList">
						{props.interests.map((interest) => {
							return <li className="interestItem">{interest}</li>;
						})}
				</ul>
		</div>
	);
};