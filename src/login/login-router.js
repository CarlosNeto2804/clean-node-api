class LoginRouter {
  login(httpRequest) {
    if(!httpRequest.body.email || !httpRequest.body.password){
        return {
            statusCode:400
        }
    }
  }
}
module.exports = LoginRouter;
