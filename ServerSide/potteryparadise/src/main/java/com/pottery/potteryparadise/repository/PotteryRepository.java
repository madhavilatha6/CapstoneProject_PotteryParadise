package com.pottery.potteryparadise.repository;

import com.pottery.potteryparadise.model.Pottery;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PotteryRepository extends JpaRepository<Pottery, Integer> {
}
