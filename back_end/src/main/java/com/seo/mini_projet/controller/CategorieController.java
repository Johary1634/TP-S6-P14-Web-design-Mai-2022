package com.seo.mini_projet.controller;

import com.seo.mini_projet.model.Categorie;
import com.seo.mini_projet.service.CategorieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
public class CategorieController {
    @Autowired
    private CategorieService categorieService;

    @GetMapping("categories")
    public List<Categorie> getAll(){
        return categorieService.getAll();
    }
}
