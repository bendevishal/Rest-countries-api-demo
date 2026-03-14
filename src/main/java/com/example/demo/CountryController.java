package com.example.demo;

import com.example.demo.CountryService;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins="https://rest-countries-api-demo.vercel.app")
@RestController
@RequestMapping("/api")
public class CountryController {

    private final CountryService service;

    public CountryController(CountryService service){
        this.service = service;
    }

    @GetMapping("/country")
    public Object getCountry(@RequestParam String name){
        return service.searchCountry(name);
    }
}
