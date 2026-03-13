package com.example.demo;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class CountryService {

    private final RestTemplate restTemplate = new RestTemplate();

    public Object searchCountry(String name){

        String url = "https://restcountries.com/v3.1/name/" + name;

        return restTemplate.getForObject(url, Object.class);
    }
}