package com.seo.mini_projet.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TesteController {
    @GetMapping("/gogo")
    public String go(){
        return "andao hoy";
    }
}
