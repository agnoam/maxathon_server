import * as soap from 'soap';
import * as axios from 'axios';
import * as http from 'http';

export module MaxRequests {
    const token: string = '';
    const serverURL: string = 'https://webservices.coriunder.cloud/v2/Prepaid.svc';

    const defaultHeaders = {
        "Content-Type": "application/json",
        "applicationToken": token
    }

    export async function accountAdd(requestData: { AccountId?: number, Currency?: string }) {
        try {
            const res: axios.AxiosResponse = await axios.default.post(
                `${ serverURL }/AccountAdd`, requestData, { headers: defaultHeaders });

            console.log(res);
        } catch(ex) {
            console.error(ex);
        }
    }
}