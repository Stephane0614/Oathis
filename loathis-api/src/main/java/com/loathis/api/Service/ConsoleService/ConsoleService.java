package com.loathis.api.Service.ConsoleService;

import com.loathis.api.Entity.Console;
import com.loathis.api.Repository.ConsoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ConsoleService implements IConsoleService {

    @Autowired
    ConsoleRepository consoleRepository;

    @Override
    public Iterable<Console> getAll() {
        return consoleRepository.findAll();
    }

    @Override
    public Optional<Console> getOne(Integer consoleId) {
        if (consoleRepository.findById(consoleId).isEmpty()) return Optional.empty();
        return consoleRepository.findById(consoleId);
    }

    @Override
    public Console save(Console console) {
        return consoleRepository.save(console);
    }
}
