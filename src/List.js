const List = ({ people, handleClear }) => {
	return (
		<>
			{people.map((person) => {
				return (
					<div key={person.id} className="person">
						<img src={person.image} alt="person" />
						<div className="content">
							<h4>{person.name}</h4>
							<p>{person.age} years</p>
						</div>
					</div>
				);
			})}
			<button onClick={handleClear}>clear all</button>
		</>
	);
};

export default List;
