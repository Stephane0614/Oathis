package com.loathis.api.Controller;

import com.loathis.api.Entity.Console;
import com.loathis.api.Service.ConsoleService.IConsoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping(path = "console")
public class ConsoleController {

    @Autowired
    IConsoleService consoleService;

    @GetMapping("")
    public Iterable<Console> getConsoleList() {

        return consoleService.getAll();
    }

    @GetMapping("{id}")
    public Optional<Console> getConsole(@PathVariable Integer id) {
        return consoleService.getOne(id);
    }

    @PostMapping("add")
    public Console addConsole(
            @RequestParam String name,
            @RequestParam boolean isNew,
            @RequestParam String image,
            @RequestParam String modelName,
            @RequestParam Double price,
            @RequestParam int stock,
            @RequestParam(required = false) String version
    ) {
        return consoleService.save(Console.builder()
                .description(name)
                .isNew(isNew)
                .image(image)
                .modelName(modelName)
                .price(price)
                .stock(stock)
                .version(version)
                .build()
        );
    }

}
