package com.seo.mini_projet.controller;

import com.seo.mini_projet.model.Logiciel;
import com.seo.mini_projet.service.LogicielService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class LogicielController {
    @Autowired
    private LogicielService logicielService;

    @PostMapping("logiciel")
    public Logiciel saveLogiciel(@RequestBody Logiciel logiciel){
        return logicielService.save(logiciel);
    }

    @GetMapping("logiciels/{id}")
    public List<Logiciel> getByCategorie(@PathVariable(name = "id")int id){
        return logicielService.getAll(id);
    }
    @GetMapping("logiciel/{id}")
    public Logiciel getById(@PathVariable(name = "id")int id){
        return logicielService.getById(id);
    }
}
