package com.loathis.api.Controller;

import com.loathis.api.Entity.Console;
import com.loathis.api.Entity.Game;
import com.loathis.api.Service.ConsoleService.IConsoleService;
import com.loathis.api.Service.GameService.IGameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "game")
public class GameController {

    @Autowired
    IGameService gameService;

    @Autowired
    IConsoleService consoleService;

    @GetMapping("")
    public Iterable<Game> getGameList() {
        return gameService.getAll();
    }

    @GetMapping("{id}")
    public Optional<Game> getGame(@PathVariable int id) {
        return gameService.getOne(id);
    }

    @PostMapping("add")
    public Game addGame(
            @RequestParam String title,
            @RequestParam String gender,
            @RequestParam Double price,
            @RequestParam String description,
            @RequestParam String image,
            @RequestParam boolean isNew,
            @RequestParam int stock,
            @RequestBody List<Integer> idConsoles
    ) {
        List<Console> consoles = new ArrayList<Console>();

        return gameService.save(consoles, idConsoles,
                Game.builder()
                        .title(title)
                        .gender(gender)
                        .price(price)
                        .description(description)
                        .image(image)
                        .isNew(isNew)
                        .stock(stock)
                        .consoles(consoles)
                        .build()
        );
    }
}
