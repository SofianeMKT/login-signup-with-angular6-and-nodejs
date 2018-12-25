import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class CustomersService {
    constructor(private http: HttpClient) { }
getCustomers() {
    return this.http.get(environment.apiBaseUrl + '/customers');
}
    addCustomer(customer) {
        return this.http.post(environment.apiBaseUrl + '/customers', customer);
    }
    updateCustomer(id, customer) {
        return this.http.put(environment.apiBaseUrl + '/customers/' + id, customer);
    }
    deleteCustomer(id) {
        return this.http.delete(environment.apiBaseUrl + '/customers/' + id);
    }
}
