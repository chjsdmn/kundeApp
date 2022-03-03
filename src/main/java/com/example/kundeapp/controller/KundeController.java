package com.example.kundeapp.controller;

import com.example.kundeapp.model.Kunde;
import com.example.kundeapp.repository.KundeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class KundeController {
    //依赖注入
    // KundeRepository类 成为 KundeController的一个属性，相当于“小明把手机变成自己的一个属性”
    KundeRepository repo;

    //loose coupling 松耦合
    // 因为有了上面的属性，KundeRepository类 和KundeController类 就成了松耦合
    @Autowired
    public KundeController(KundeRepository repo){
        this.repo = repo;
    }

    //url都为“api”，是因为每个mapping的方法都各有一个，如果有两个GetMapping就需要不同的url
    @PostMapping("/api")
    public void lagreKunde(Kunde kunde){
        repo.lagreKunde(kunde);
    }

    @GetMapping("/api")
    public List<Kunde> kundeList(){
        return repo.kundeList();
    }

    @DeleteMapping("/api")
    public void slettKunde(){
        repo.slettKunde();
    }

}
