package com.pottery.potteryparadise.service;

import com.potteryparadisebackend.potterypraradisebackend.model.Product;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface PotteryService {
    public Product create(Product Information);

    public List<Product> getAllProducts();

    public Product update(Product product);

    public String deleteProduct(Product product);
}
