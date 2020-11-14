import React from 'react';
import logo from './logo.svg';
import { FaTimes } from 'react-icons/fa';
import { social, links } from './data';
import { ProductContext } from './context';

const Sidebar = () => {
	const { sidebar, setSideBar } = React.useContext(ProductContext);
	if (sidebar) {
		return (
			<nav className="nav-flex">
				<ul className="top-nav">
					<img src={logo} />
					<FaTimes className="icon" onClick={() => setSideBar(false)} />
				</ul>
				<ul className="links">
					{links.map((item) => {
						const { id, url, text, icon } = item;
						return (
							<li key={id}>
								{icon}
								<a href={url}>{text}</a>
							</li>
						);
					})}
				</ul>
				<ul className="social">
					{social.map((item) => {
						const { id, url, text, icon } = item;
						return (
							<li key={id}>
								<a href={url}>
									{text}
									{icon}
								</a>
							</li>
						);
					})}
				</ul>
			</nav>
		);
	} else {
		return null;
	}
};

export default Sidebar;
