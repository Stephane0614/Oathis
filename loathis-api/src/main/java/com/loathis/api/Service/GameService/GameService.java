package com.loathis.api.Service.GameService;

import com.loathis.api.Entity.Console;
import com.loathis.api.Entity.Game;
import com.loathis.api.Repository.GameRepository;
import com.loathis.api.Service.ConsoleService.IConsoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class GameService implements IGameService {

    @Autowired
    GameRepository gameRepository;

    @Autowired
    IConsoleService consoleService;

    @Override
    public Iterable<Game> getAll() {
        return gameRepository.findAll();
    }

    @Override
    public Optional<Game> getOne(Integer GameId) {
        if (gameRepository.findById(GameId).isEmpty()) return Optional.empty();
        return gameRepository.findById(GameId);
    }

    @Override
    public Game save(List<Console> consoles, List<Integer> idConsoles, Game game) {
        getConsoles(idConsoles, consoles);
        return gameRepository.save(game);
    }

    private void getConsoles(List<Integer> idConsoles, List<Console> consoles) {
        for (int idConsole : idConsoles) {
            Optional<Console> consoleOptional = consoleService.getOne(idConsole);
            if (consoleOptional.isPresent()) {
                Console console = consoleOptional.get();
                consoles.add(console);
            }
        }
    }
}

