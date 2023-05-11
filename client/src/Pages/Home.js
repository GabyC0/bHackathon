

const Home = () => {
return (
	<div className="home-back"
	// style={{
	// 	display: 'flex',
	// 	justifyContent: 'Right',
	// 	alignItems: 'Right',
	// 	height: '100vh'
	// }}
	>
		<div className="image-div">
		<div className="home-img">
			<img src="https://res.cloudinary.com/gabyc/image/upload/v1654900811/pregnancy_xwg2yn.png" alt="pregnancy" height={400}/>
		</div>

		</div>
	
	<div className="to-green">
	<div className="home-top">
		<h1>Connecting you and yours to the hospitals that provide the best care to Black families</h1>
		<hr/>
	</div>
	<div className="home-bottom">
		<h3>Search, leave a review, build a privider list and more...</h3>
	</div>
	</div>
	</div>
);
};

export default Home;
