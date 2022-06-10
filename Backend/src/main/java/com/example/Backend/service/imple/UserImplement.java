package com.example.Backend.service.imple;

import com.example.Backend.RandomGenerate;
import com.example.Backend.dto.UserDto;
import com.example.Backend.model.User;
import com.example.Backend.repository.UserRepo;
import com.example.Backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserImplement implements UserService {

    @Autowired
    private UserRepo userRepo;

    @Override
    public List<UserDto> getAll() {
        return userRepo.getAll();
    }

    @Override
    public boolean checkLogin(String username, String password, List<UserDto> list) {
        try {
//            if(list.isEmpty()){
//                System.out.println("Empty list");
//            }
//            else {
//                System.out.println("List is fine, username = " + username + " password = " + password);
//                for (UserDto u : list) {
//                    System.out.println(u.toString());
//                }
//            }
            for (UserDto u : list){
                if(u.getUsername().equals(username) && u.getPassword().equals(password)){
                    return true;
                }
            }
            System.out.println("False");
            return false;
        }
        catch (Exception e){
            System.out.println("Exception");
            return false;
        }
    }

    @Override
    public UserDto find_byUserName(String username) {
        return userRepo.find_byUserName(username);
    }

    @Override
    public boolean find_dublicate_username(String username, List<UserDto> list) {
        try{
            if(list.isEmpty()){
                return false;
            }
            else {
                for(UserDto u : list){
                    if(u.getUsername().equals(username)){
                        return true;
                    }
                }
            }

            return false;
        }
        catch (Exception e){
            return true;
        }
    }

    @Override
    public void add(String id, String username, String password, String customer_name, String email, String phone, String address1, String address2, String address3) {
        userRepo.add(id, username, password, customer_name, email, phone, address1, address2, address3);
    }
}