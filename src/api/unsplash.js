import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers:{
		Authorization: 'Client-ID e1dd774394e1668a194c4ccae6eb1d6517b56535b0190f8d91acabd5cd6622fa'
	}
})