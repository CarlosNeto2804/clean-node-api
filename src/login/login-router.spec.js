const LoginRouter = require('./login-router')
describe('Login router', () => {
    test('should return 400 if no email is provided', () => {
        const sutLoginRouter = new LoginRouter()
        const req = {
            body:{
                password:"any_password",
            }
        }
        const res = sutLoginRouter.login(req)
        expect(res.statusCode).toBe(400);
    })
    test('should return 400 if no password is provided', () => {
        const sutLoginRouter = new LoginRouter()
        const req = {
            body:{
                email:"email@body.com",
            }
        }
        const res = sutLoginRouter.login(req)
        expect(res.statusCode).toBe(400);
    })
});
