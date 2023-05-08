package com.seo.mini_projet.repository;

import com.seo.mini_projet.model.Admin;
import com.seo.mini_projet.model.Logiciel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface AdminRepository extends JpaRepository<Admin,Integer> {
    @Query(value = "SELECT * FROM Admin p WHERE p.identifiant  = :identifiant and p.password = :password",nativeQuery = true)
    Admin login(@Param("identifiant") String identifiant, @Param("password") String password);
}
