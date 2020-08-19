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

	useEffect(() => {
        console.log("useEffect called")
        retrieveDetailsNav()
    },[]) //this is called like componentDidMount

    const retrieveDetailsNav = async () => {
        console.log("retreiveDetailsNav called")
        let response = await fetch(data.urlNav)
        let info = await response.json()
        setData( prevData => ({
            ...prevData, 
             navBarData: info
        }))
    }
	return (
		<StarWarContext.Provider value={[data, setData]}>
			{props.children}
		</StarWarContext.Provider>
	)
}
