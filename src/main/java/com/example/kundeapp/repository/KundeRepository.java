package com.example.kundeapp.repository;

import com.example.kundeapp.model.Kunde;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class KundeRepository {
    //一般是接口写大的类别（List），后面new具体的（ArrayList）
    private final List<Kunde> list = new ArrayList<>();

    public void lagreKunde(Kunde kunde){
        list.add(kunde);
    }

    public List<Kunde> kundeList(){
        return list;
    }

    public void slettKunde(){
        list.clear();
    }
}
