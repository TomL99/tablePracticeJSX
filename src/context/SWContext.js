import React, {createContext, useState, useEffect} from 'react'

export const StarWarContext = createContext()

export const StarWarContextProvider = (props) => {
	console.log("SWContext")
	const [data, setData] = useState({urlNav: "https://swapi.dev/api/?format=json", urlTable:"", called:"nav"})	
	console.log("data", data)
	return (
		<StarWarContext.Provider value={[data, setData]}>
			{props.children}
		</StarWarContext.Provider>
	)
}
