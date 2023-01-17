package com.loathis.api.Service.CustomerService;

import com.loathis.api.DTO.PurchaseOrderDTO;
import com.loathis.api.Entity.Customer;

import java.util.Optional;

// ici on declare la l'interface avec un I comme 1er lettre  (bonne pratique) dans cette interface
public interface ICustomerService  {
 Iterable<Customer> getAll();
 Optional<Customer> getOne(Integer customerId);
  Customer save(Customer customer);
}
