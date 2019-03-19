package com.domain.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Stream;

import com.domain.entity.Customer;

public interface CustomerService {

	List<Customer> findAll();
	//Stream<Customer> findcustByStatus(String status);
	Customer findById(int cust_id);
	
}
