package com.loathis.api.Service.PurchaseOrderService;

import com.loathis.api.DTO.PurchaseOrderDTO;
import com.loathis.api.Entity.PurchaseOrder;

import java.util.Optional;

public interface IPurchaseOrderService {

    Iterable<PurchaseOrder> getAll();

    Optional<PurchaseOrder> getOne(Integer purchaseOrderId);

    PurchaseOrder save( PurchaseOrderDTO purchaseOrderDTO, Integer customerId);
}
