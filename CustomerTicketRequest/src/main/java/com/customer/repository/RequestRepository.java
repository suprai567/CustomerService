package com.customer.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.customer.entity.Request;

public interface RequestRepository extends JpaRepository<Request, Long> {
}


