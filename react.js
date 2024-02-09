validateForm = () =>{
		const {email, password} = this.state;

		let status = true;
		if(email.length === 0){
			status = false;
		}
		if(password.length === 0){
			status = false;
		}
		return status;
	}

	onSubmit = (e) => {
		e.preventDefault();
		const validationstatus = this.validateForm();
		if(validationstatus === false){
			alert("please fill all the required values")
		}
		//const {email, password} = this.state;
		console.log(this.state);
		this.setState({email:"",
	                    password:""});


	}