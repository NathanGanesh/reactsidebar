import React, { useContext } from 'react';
import { FaBars } from 'react-icons/fa';
import { ProductContext } from './context';

const Home = () => {
	const { setSideBar, setModel } = React.useContext(ProductContext);

	return (
		<main>
			<button onClick={setSideBar} className="sidebar-toggle">
				<FaBars />
			</button>
			<button onClick={setModel} className="btn">
				show modal
			</button>
		</main>
	);
};

export default Home;
