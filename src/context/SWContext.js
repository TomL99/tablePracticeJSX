import React, {createContext, useState, useEffect} from 'react'

export const StarWarContext = createContext()

export const StarWarContextProvider = (props) => {
	const [data, setData] = useState({
		urlNav: "https://swapi.dev/api/?format=json", 
		navBarData: {},
		tableData: {},
		tableResults: [{}],
		name: ""
	})	
	return (
		<StarWarContext.Provider value={[data, setData]}>
			{props.children}
		</StarWarContext.Provider>
	)
}
