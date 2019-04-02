import React from 'react';

class ImageCard extends React.Component {
	constructor(props){
		super(props);
		this.imageRef = React.createRef();
	}

	componentDidMount(){
		this.imageRef.current.addEventListener(
			'load', 
			this.setSpans
		);
		console.log(this.imageRef);
		console.log(this.imageRef.current.clientHeight);
	}

	setSpans = () => {
		const height = this.imageRef.current.clientHeight;

		const spans = height/150 + 1;
	}

	render(){
		const {description, urls} = this.props.image;

		return(
			<div>
				<img 
					ref={this.imageRef}
					alt={description}
					src={urls.regular}
				/>
			</div>
		);
	}
}

export default ImageCard;