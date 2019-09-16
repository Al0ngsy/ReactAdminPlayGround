import React from 'react';
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
// Own List 4 users
import { UserList } from './users';
import { PostList, PostEdit, PostCreate } from './posts'
// ServerProvider
import jsonServerProvider from 'ra-data-json-server';
// import dataProvider from './dataProvider';
// Icon
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
// Home Page
import Dashboard from './Dashboard';
// Login Screen Check
import authProvider from './authProvider';

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');

const App = () => (
	// Admin comp expect a dataProvider prop (a function capable of fetching data from an API)
	// By default, react-admin displays the list page of the first Resource element as home page
	// Set Home Page by passing a custom comp in the dashboard prop of the <Admin> component
	<Admin
		dashboard={Dashboard}
		dataProvider={dataProvider}
		authProvider={authProvider}
		>
		{/**The <Admin> component expects one or more <Resource> child components
			Resource maps a name to an endpoint in the API
				here: informs react-admin to fetch the “users” records from the http://jsonplaceholder.typicode.com/users URL
			also defines the React components to use for each CRUD operation (list, create, edit, and show)
			 	here: list->ListGuesser, EditGuesser etc. (guesses the format to use for the columns of the list etc. based on the data fetched from the API)
					not meant to be used in production, output guessed list, edit etc. in console, prett neat
		
		<Resource name="users" list={ListGuesser} edit={EditGuesser}></Resource>
		<Resource name="posts" list={ListGuesser} edit={EditGuesser}></Resource>
					from that we can go ahead and create our own list, that we can customize
		*/}
		<Resource name="users" icon={UserIcon} list={UserList}></Resource>
		<Resource name="posts" icon={PostIcon} list={PostList} edit={PostEdit} create={PostCreate}></Resource>
	</Admin>
)
export default App;