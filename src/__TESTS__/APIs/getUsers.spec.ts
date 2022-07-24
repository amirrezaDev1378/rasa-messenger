// __tests__/animal.test.js
// 🚨 Remember to keep your `*.test.js` files out of your `/pages` directory!
import { createMocks } from 'node-mocks-http';
import getUsersApi from '../../pages/api/getUsers';

describe('/api/getUsers', () => {
    test('check the api connection and if it is working', async () => {
        const { req, res } = createMocks({
            method: 'GET',
        });

        await getUsersApi(req, res);


        expect(res._getStatusCode()).toBe(200);

        expect(JSON.parse(res._getData())[0].name).toBeTruthy();
    });
});
