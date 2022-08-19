import { IUseFetch } from 'hooks/useFetchApi';

export const homeApi = {
    getHome: (): IUseFetch => ({
        url: `shipments/details?type=shipmentId&value=SET2203091290`,
        method: 'get',
        isAuth: false,
    }),
};
