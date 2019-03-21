package com.domain.controller;

import java.util.List;
import java.util.Optional;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.domain.entity.Customer;
import com.domain.service.CustomerService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping({"/customer"})
public class CustomerController {

	@Autowired
private CustomerService customerService;

	@GetMapping
	public List<Customer> findAll(){
	 return customerService.findAll();
	}
	
	
//	@GetMapping("/{cust_id}")
//	public Customer findone(@PathVariable int cust_id) throws Exception {
//		return customerService.findById(cust_id);
//	}
//	@GetMapping(path = {"/{id}"})
//	    public Customer findOne(@PathVariable("id") int id){
//	        return customerService.findById(id);
//	    }
	
	  @GetMapping(path = {"/{status}"}) public Stream<Customer>
	  findByStatus(@PathVariable("status") String status)
	  { 
		  return customerService.findByStatus(status);
	  }
	 
	 
	 
}
