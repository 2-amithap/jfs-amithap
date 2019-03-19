package com.domain.service;

import java.security.PublicKey;
import java.util.stream.Stream;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;

import com.domain.entity.Customer;
import com.domain.repository.CustomerRepo;

@Service
public class CustomerServiceImpl implements CustomerService {
	
	
	@Autowired
	private CustomerRepo repository;
	
	@Override
	public List<Customer> findAll() {
		// TODO Auto-generated method stub
		return repository.findAll();
	}
	 @Override
	    public Customer findById(int cust_id) {
	        return repository.findOne(cust_id);
	    }
//	
//	public Stream<Customer> findcustByStatus(String status) {
//		// TODO Auto-generated method stub
//		return repository.findByStatus(status);
//	}




}
