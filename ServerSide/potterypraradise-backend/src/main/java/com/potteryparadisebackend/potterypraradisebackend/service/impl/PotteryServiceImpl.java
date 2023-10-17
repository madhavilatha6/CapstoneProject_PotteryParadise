package com.potteryparadisebackend.potterypraradisebackend.service.impl;

import com.potteryparadisebackend.potterypraradisebackend.model.Product;
import com.potteryparadisebackend.potterypraradisebackend.repository.PotteryRepository;
import com.potteryparadisebackend.potterypraradisebackend.service.PotteryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@Service
public class PotteryServiceImpl implements PotteryService {

    @Autowired
    PotteryRepository potteryRepository;

    @Override
    public Product create(Product Information){
        return potteryRepository.save(Information);
    }

    @Override
    public List<Product> getAllProducts(){
        return potteryRepository.findAll();
    }

    @Override
    public Product update(Product product) {
        return potteryRepository.save(product);
    }

    @Override
    public String deleteProduct(@PathVariable Integer id) {
        potteryRepository.deleteById(id);
        return "product is deleted successfully";
    }
}
