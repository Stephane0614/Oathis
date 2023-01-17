package com.loathis.api.Service.GameService;

import com.loathis.api.Entity.Console;
import com.loathis.api.Entity.Game;

import java.util.List;
import java.util.Optional;

public interface IGameService {

    Iterable<Game> getAll();

    Optional<Game> getOne(Integer GameId);

    Game save(List<Console> consoles, List<Integer> idConsoles, Game game);
}
