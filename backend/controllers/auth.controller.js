const login = (req, res) => {
    res.send('Login');
}

const signup = async (req, res) => {
    try{
        const { fullName, username, email, password, confirmPassword } =
          req.body;
        console.log(fullName, username, email, password, confirmPassword);
        res.send('Signup');
    }
    catch(err){
        console.log(err);
        res.status(400).send('Error');
    }
}

const signout = (req, res) => {
    res.send('Signout');
}


module.exports = {
    login,
    signup,
    signout
}