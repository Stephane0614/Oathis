package com.loathis.api.Service.PurchaseOrderService;

import com.loathis.api.DTO.PurchaseOrderDTO;
import com.loathis.api.Entity.Console;
import com.loathis.api.Entity.Customer;
import com.loathis.api.Entity.Game;
import com.loathis.api.Entity.PurchaseOrder;
import com.loathis.api.Repository.PurchaseOrderRepository;
import com.loathis.api.Service.ConsoleService.IConsoleService;
import com.loathis.api.Service.CustomerService.ICustomerService;
import com.loathis.api.Service.GameService.IGameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class PurchaseOrderService implements IPurchaseOrderService {

    @Autowired
    PurchaseOrderRepository purchaseOrderRepository;
    @Autowired
    ICustomerService customerService;
    @Autowired
    IConsoleService consoleService;
    @Autowired
    IGameService gameService;

    @Override
    public Iterable<PurchaseOrder> getAll() {
        return purchaseOrderRepository.findAll();
    }

    @Override
    public Optional<PurchaseOrder> getOne(Integer purchaseOrderId) {
        if (purchaseOrderRepository.findById(purchaseOrderId).isEmpty()) return Optional.empty();
        return purchaseOrderRepository.findById(purchaseOrderId);
    }

    @Override
    public PurchaseOrder save(PurchaseOrderDTO purchaseOrderDTO, Integer customerId) {
        List<Console> consoles = new ArrayList<Console>();
        List<Game> games = new ArrayList<Game>();
        Customer customer = getCustomer(customerId);
        getConsolesGames(
                purchaseOrderDTO.getConsolesId(),
                purchaseOrderDTO.getGamesId(),
                consoles,
                games
        );

        return purchaseOrderRepository.save(PurchaseOrder.builder()
                .idCustomers(customer)
                .consoles(consoles)
                .games(games)
                .build());
    }

    private void getConsolesGames(
            List<Integer> consolesIds,
            List<Integer> gamesIds,
            List<Console> consoles,
            List<Game> games
    ) {
        for (Integer consoleId : consolesIds) {
            Optional<Console> consoleOption = consoleService.getOne(consoleId);
            if (consoleOption.isPresent()) {
                Console console = consoleOption.get();
                consoles.add(console);
            }
        }

        for (Integer gameId : gamesIds) {
            Optional<Game> gameOption = gameService.getOne(gameId);
            if (gameOption.isPresent()) {
                Game game = gameOption.get();
                games.add(game);
            }
        }
    }

    private Customer getCustomer(int customerId) {
        Optional<Customer> customerOption = customerService.getOne(customerId);
        return customerOption.orElse(null);
    }
}
