package com.example.Backend.repository;

import com.example.Backend.dto.UserDto;
import com.example.Backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepo extends JpaRepository<User, Integer> {

    @Query("SELECT new com.example.Backend.dto.UserDto(p.id, p.username, p.password, p.customer_name, p.email, p.phone, " +
            "p.address1, p.address2, p.address3) FROM Users p")
    public List<UserDto> getAll();

    @Query("SELECT new com.example.Backend.dto.UserDto(p.id, p.username, p.password, p.customer_name, p.email, p.phone, " +
            "p.address1, p.address2, p.address3) FROM Users p WHERE p.username = ?1")
    public UserDto find_byUserName(String username);

    @Modifying
    @Query(value = "INSERT INTO Users(id, username, password, customer_name, email, phone, address1, address2, address3) VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9)", nativeQuery = true)
    public void add(String id, String username, String password, String customer_name, String email, String phone,
                    String address1, String address2, String address3);

}
