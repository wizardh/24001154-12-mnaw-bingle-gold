class UserHandler{
  constructor(userService) {
      this.userService = userService;

      this.getAll = this.getAll.bind(this);
  }
  
  async getAll(req, res){
      const users = await this.userService.getAll();
      res.status(200).send({
          users: users
      });         
  }

}

module.exports = UserHandler;