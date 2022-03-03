package com.example.kundeapp.model;

public class Kunde {
    private String navn;
    private String address;

    public Kunde(String navn, String address) {
        this.navn = navn;
        this.address = address;
    }

    public String getNavn() {
        return navn;
    }

    public void setNavn(String navn) {
        this.navn = navn;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
}
