package com.loathis.api.DTO;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter @Setter
public class PurchaseOrderDTO
{

    private List<Integer> consolesId;
    private List<Integer> gamesId;
}
