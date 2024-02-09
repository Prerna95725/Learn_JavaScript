
function mycom(){

let a="hello"
if(a=='hello'){
	let b="world"//if we use var the value b is avilable -
	//through out the function...
	//if we use let the value b is avilable inside the blocks -
	//otside the block no one access
	console.log(a+ ' ' +b);
}

console.log(a+ ' ' +b);

}

mycom()

public String generateToken(String username) {
	        Map<String, Object> claims = new HashMap<>();
	        return createToken(claims, username);
	    }


@PostMapping("/authenticate")
	public String generateToken(@RequestBody AuthRequest authRequest) throws Exception {
		try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(authRequest.getUserName(), authRequest.getPassword())
            );
        } catch (Exception ex) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND,"Invalid username and password");
        }
        return jwtUtil.generateToken(authRequest.getUserName());
	}