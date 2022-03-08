package com.example.kundeapp.model;

public class Kunde {
    private String navn;
    private String address;
    private String bilmerke;
    private boolean forekort;

    public Kunde(String navn, String address, String bilmerke, boolean forekort) {
        this.navn = navn;
        this.address = address;
        this.bilmerke = bilmerke;
        this.forekort = forekort;
    }

    public String getBilmerke() {
        return bilmerke;
    }

    public void setBilmerke(String bilmerke) {
        this.bilmerke = bilmerke;
    }

    public boolean isForekort() {
        return forekort;
    }

    public void setForekort(boolean forekort) {
        this.forekort = forekort;
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
