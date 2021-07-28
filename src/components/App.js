import React from "react";
import {useState, useEffect} from 'react';
import "../css/App.css";
import ProfileItem from "./ProfileItem";
import {Form, FormControl, Table} from "react-bootstrap";

const App = () => {

	const [currProfileList, setCurrProfileList] = useState([])
	const [profileList, setProfileList] = useState([]);
	const [searchInput, setSearchInput] = useState("")
 
	const filterProfileByName = (input) => {
        let newProfileList = currProfileList.filter((profile) => {
            return (profile.firstName + " " + profile.lastName).toLowerCase().includes(input.toLowerCase())
        })
        if (input === "") {
            newProfileList = profileList;
        }
        setCurrProfileList(newProfileList);
    }

	const searchBox = (
		<>
			<Form>
				<FormControl action="" className="mr-sm-2" value={searchInput} placeholder="Search by name"
				onChange={(event) => {
					setSearchInput(event.target.value);
					filterProfileByName(event.target.value)
				}}/>
			</Form>
		</>
	);

	useEffect(() => {
		const url = "https://api.hatchways.io/assessment/students";
		fetch(url).then((res) => {
			return res.json();
		}).then((json) => {
			setCurrProfileList(json.students);
			setProfileList(json.students);
		}).catch((err) => {
			console.log(err);
		})
	}, [])

	return (
		<Table className="table">
			<th>{searchBox}</th>
			{currProfileList.map((item) => (
				<ProfileItem className="profile-container" key={item.id} data={item} style={{width:"400px"}}/>
			))}
		</Table>
	)
}

export default App;