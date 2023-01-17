package com.loathis.api.Service.ConsoleService;

import com.loathis.api.Entity.Console;

import java.util.Optional;

public interface IConsoleService {

    Iterable<Console> getAll();

    Optional<Console> getOne(Integer consoleId);

    Console save(Console console);
}
