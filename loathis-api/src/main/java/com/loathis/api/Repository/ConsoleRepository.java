package com.loathis.api.Repository;

import com.loathis.api.Entity.Console;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ConsoleRepository extends CrudRepository<Console, Integer> {
}
