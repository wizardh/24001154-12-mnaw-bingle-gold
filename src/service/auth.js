class AuthService {
    constructor(userRepository) {
      this.userRepository = userRepository;
    }

    async register({ name, email, password }) {
      let newData = {
        "name": name,
        "email": email,
        "password": password
      }
  
      const findUser = await this.userRepository.getByEmail(email);
      if ( findUser.length == 0 ){
        const createUser = await this.userRepository.add(newData);
        return createUser;
      }else{
        throw new Error(`Email ${email} sudah terdaftar!`);
      }
    }
  
    async login({ email, password }) {
      const findUser = await this.userRepository.getByEmail(email);
      if ( findUser.length > 0 ){
        if ( findUser[0].password === password ){
          return "Login berhasil";
        }else{
            throw new Error("Email atau password salah");
        }
      }else{
        throw new Error("Email atau password salah");
      }    
    }
  }
  
  module.exports = AuthService;