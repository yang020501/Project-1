package com.example.Backend.repository;

import com.example.Backend.model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@Repository
public interface CartRepo extends JpaRepository<Cart, Integer> {
    @Modifying
    @Query(value = "INSERT INTO Cart(id, customer_id, address ,create_date, total) VALUES (?1, ?2, ?3, ?4, ?5)")
    public void add(String id, String customer_id, String address, LocalDate create_date, long total);

    @Query(value = "SELECT id FROM Cart")
    public List<String> get_list_id();

}
