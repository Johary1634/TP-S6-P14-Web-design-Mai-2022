package com.seo.mini_projet.service;

import com.seo.mini_projet.model.Logiciel;
import com.seo.mini_projet.repository.LogicielRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LogicielService {
    @Autowired
    private LogicielRepository logicielRepository;

    public Logiciel save(Logiciel x){
        return logicielRepository.save(x);
    }
    public List<Logiciel> getAll(int idCategorie){
        return  logicielRepository.findByCategorie(idCategorie);
    }
    public Logiciel getById(int id){
        return logicielRepository.findById(id).get();
    }
}
