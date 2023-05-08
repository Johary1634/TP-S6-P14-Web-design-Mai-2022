package com.seo.mini_projet.controller;

import com.seo.mini_projet.model.Admin;
import com.seo.mini_projet.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;

@RestController
@CrossOrigin
public class AdminController {
    @Autowired
    private AdminRepository adminRepository;

    @PostMapping("login")
    public String logIn(@RequestBody Admin admin) throws Exception {
        System.out.println(admin);
        admin = adminRepository.login(admin.getIdentifiant(),admin.getPassword());
        if(admin==null){
            throw new Exception("mot de passe ou identifiant incorrecte");
        }else{
            return LocalDateTime.now().toString()+"connected";
        }
    }
}
