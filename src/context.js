import React, { useState, useContext } from 'react';

export const ProductContext = React.createContext();

export default function ContextProvider({ children }) {
	const [ sidebar, setSideBar ] = React.useState(false);
	const [ model, setModel ] = useState(false);

	return (
		<ProductContext.Provider value={{ model, setModel, sidebar, setSideBar }}>{children}</ProductContext.Provider>
	);
}
