package com.loathis.api.Service.CustomerService;

import com.loathis.api.Entity.Customer;
import com.loathis.api.Repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CustomerService implements ICustomerService {
    @Autowired
    private CustomerRepository customerRepository;

    @Override
    public Iterable<Customer> getAll() {
        return customerRepository.findAll();
    }

    @Override
    public Optional<Customer> getOne(Integer customerId) {
        if (customerRepository.findById(customerId).isEmpty()) return Optional.empty();
        return customerRepository.findById(customerId);
    }

    @Override
    public Customer save(Customer customer) {
        return customerRepository.save(customer);
    }
}
