describe('Login router', () => {
    test('should return 400 if no email is provided', () => {
        const sutLoginRouter = new LoginRouter()
        const req = {
            body:{
                password:"any_password",
            }
        }
        const res = sutLoginRouter.route(req)
        expect(res.status).toBe(400);
    })
});
