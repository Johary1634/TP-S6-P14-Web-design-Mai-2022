package com.seo.mini_projet.repository;

import com.seo.mini_projet.model.Logiciel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LogicielRepository extends JpaRepository<Logiciel,Integer> {
    @Query(value = "SELECT * FROM logiciel p WHERE p.idcategorie  = :idCategorie",nativeQuery = true)
    List<Logiciel> findByCategorie(@Param("idCategorie") int idCategorie );
}
