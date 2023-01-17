package com.loathis.api.Controller;

import com.loathis.api.DTO.PurchaseOrderDTO;
import com.loathis.api.Entity.PurchaseOrder;
import com.loathis.api.Repository.PurchaseOrderRepository;
import com.loathis.api.Service.ConsoleService.IConsoleService;
import com.loathis.api.Service.CustomerService.ICustomerService;
import com.loathis.api.Service.GameService.IGameService;
import com.loathis.api.Service.PurchaseOrderService.IPurchaseOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "purchase-order")
public class PurchaseOrderController {

    @Autowired
    IPurchaseOrderService purchaseOrderService;
    @Autowired
    PurchaseOrderRepository purchaseOrderRepository;


    @Autowired
    ICustomerService customerService;

    @Autowired
    IGameService gameService;

    @Autowired
    IConsoleService consoleService;

    @GetMapping("")
    public Iterable<PurchaseOrder> getAllPurchaseOrder() {
        return purchaseOrderService.getAll();
    }

    @GetMapping("{id}")
    public Optional<PurchaseOrder> getById(@PathVariable int id) {
        return purchaseOrderService.getOne(id);
    }

    @GetMapping("context")
    public PurchaseOrderDTO getContext() {
        PurchaseOrderDTO context = new PurchaseOrderDTO();
        List<Integer> list = new ArrayList<Integer>();
        list.add(1);
        list.add(2);
        context.setConsolesId(list);
        context.setGamesId(list);
        return context;
    }

    @PostMapping("add")
    public PurchaseOrder add(
            @RequestBody PurchaseOrderDTO purchaseOrderDTO,
            @RequestParam Integer customerId) {
        return purchaseOrderService.save(purchaseOrderDTO, customerId);
    }
}