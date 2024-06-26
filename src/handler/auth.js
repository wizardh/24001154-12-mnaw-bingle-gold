class AuthHandler{
    constructor(authService) {
        this.authService = authService;

        this.register = this.register.bind(this);
        this.login = this.login.bind(this);
    }
    
    async register(req, res){
        try{
            const newUser = req.body;
            const user = await this.authService.register(newUser);
            
            res.send({
                user: user
            });   
        }catch(e){
            res.status(400).send({
                error: true,
                message: e.message
            });
        }
    }

    async login(req, res){
        try{
            const loginCreds = {
                email: req.body['email'],
                password: req.body['password']
            }
            const login = await this.authService.login(loginCreds);
            res.send({
                message: login
            });   
        }catch(e){
            res.status(400).send({
                error: true,
                message: e.message
            });
        }
    }
}

module.exports = AuthHandler;