package com.seo.mini_projet.service;

import com.seo.mini_projet.model.Categorie;
import com.seo.mini_projet.repository.CategorieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategorieService {
    @Autowired
    private CategorieRepository categorieRepository;

    public List<Categorie> getAll(){
        return categorieRepository.findAll();
    }
}
