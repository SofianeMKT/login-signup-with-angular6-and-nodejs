import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../shared/customers.servive';
import { Router } from "@angular/router";

@Component({
    selector: 'app-customers',
    templateUrl: './customer.component.html',
    styleUrls: ['./customer.component.css']
})
export class CustomersComponent implements OnInit {
    customers;
    constructor(private customersService: CustomersService, private router: Router) { }

    ngOnInit() {
        this.customersService.getCustomers().subscribe(
            res => {
                this.customers = res['customers'];
            },
            err => {
                console.log(err);

            }
        );
    }

}
