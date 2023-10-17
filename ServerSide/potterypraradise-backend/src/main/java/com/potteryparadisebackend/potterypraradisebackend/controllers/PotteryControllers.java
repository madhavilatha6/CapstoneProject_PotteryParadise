package com.potteryparadisebackend.potterypraradisebackend.controllers;

import com.potteryparadisebackend.potterypraradisebackend.model.Product;
import com.potteryparadisebackend.potterypraradisebackend.service.PotteryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/information")
public class PotteryControllers {
    @Autowired
    PotteryService potteryService;
    @PostMapping("/create")
    public Product saveProduct(@RequestBody Product product){
        return potteryService.create(product);
    }

    @GetMapping("")
    public List<Product> getAllProduct() {
        return potteryService.getAllProducts();
    }

    @PutMapping("/update")
    public Product updateProdct(@RequestBody Product product) {
        return potteryService.update(product);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteProduct(@PathVariable Integer id) {
        return potteryService.deleteProduct(id);
    }

}
