package com.loathis.api.Entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor @NoArgsConstructor @Builder
@Table(name = "purchase_order")
public class PurchaseOrder {
    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "id_customers", nullable = false)
    private Customer idCustomers;

    @ManyToMany
    @JsonBackReference(value = "consoles")
    private List<Console> consoles;

    @ManyToMany
    @JsonBackReference(value = "games")
    private List<Game> games;
}