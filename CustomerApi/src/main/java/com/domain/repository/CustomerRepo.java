package com.domain.repository;

import java.util.List;
import java.util.stream.Stream;


import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.Repository;
import org.springframework.data.repository.query.Param;

import com.domain.entity.Customer;

public interface CustomerRepo extends Repository <Customer, Integer> {

	List<Customer> findAll();
	
//	@Query("SELECT c FROM cust_master c where c.status = :status") 
//	Stream<Customer> findByStatus(@Param("status") String status);
   Customer findOne(int cust_id);
}
