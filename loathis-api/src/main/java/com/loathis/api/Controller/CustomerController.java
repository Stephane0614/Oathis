package com.loathis.api.Controller;


import com.loathis.api.Entity.Console;
import com.loathis.api.Entity.Customer;
import com.loathis.api.Service.CustomerService.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping(path = "/customer")
public class CustomerController {
    @Autowired
    ICustomerService customerService;

    @GetMapping("")
   public Iterable<Customer> getCustomer()
    {
        return  customerService.getAll();
    }

    @GetMapping("/{id}")
    public Optional<Customer> getById(@PathVariable int id) {
        return customerService.getOne(id);
    }

    @PostMapping("/add")
    public Customer addCustomer(
            @RequestParam String lastname,
            @RequestParam String firstname,
            @RequestParam String email,
            @RequestParam String password,
            @RequestParam String address,
            @RequestParam (required = false) String phoneNbr,
            @RequestParam (required = false) String premiumCard) {
        return customerService.save(Customer.builder()
                .firstName(firstname)
                .lastName(lastname)
                .address(address)
                .email(email)
                .password(password)
                .phoneNbr(phoneNbr)
                .premiumCard(premiumCard)
                .build());
    }

}
