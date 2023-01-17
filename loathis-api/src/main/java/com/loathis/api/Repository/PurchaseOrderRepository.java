package com.loathis.api.Repository;

import com.loathis.api.Entity.PurchaseOrder;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PurchaseOrderRepository extends CrudRepository<PurchaseOrder, Integer> {
}
