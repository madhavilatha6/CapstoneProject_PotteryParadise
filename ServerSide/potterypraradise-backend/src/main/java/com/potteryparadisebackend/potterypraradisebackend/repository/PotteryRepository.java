package com.potteryparadisebackend.potterypraradisebackend.repository;

import com.potteryparadisebackend.potterypraradisebackend.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PotteryRepository extends JpaRepository<Product, Integer> {
}
