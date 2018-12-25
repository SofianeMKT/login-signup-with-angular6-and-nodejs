import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../shared/customers.servive';
import { Router } from "@angular/router";

@Component({
    selector: 'app-add-customer',
    templateUrl: './add-customer.component.html',
    styleUrls: ['./customer.component.css']
})
export class AddCustomersComponent implements OnInit {
    customers;
    constructor(private customersService: CustomersService, private router: Router) { }

    ngOnInit() {

    }

}
