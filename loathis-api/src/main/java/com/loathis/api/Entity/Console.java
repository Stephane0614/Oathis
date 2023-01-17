package com.loathis.api.Entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Getter @Setter
@AllArgsConstructor @NoArgsConstructor @Builder
@Table(name = "consoles")
public class Console {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "description")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String description;

    @Column(name = "image", nullable = false, length = 250)
    private String image;

    @Column(name = "isNew", nullable = false)
    private Boolean isNew = false;

    @Column(name = "modelName", nullable = false, length = 100)
    private String modelName;

    @Column(name = "price", nullable = false)
    private Double price;

    @Column(name = "version", length = 100)
    private String version;

    @Column(name = "stock", nullable = false)
    private Integer stock;

    @ManyToMany(mappedBy = "consoles")
    private List<Game> games;

    @ManyToMany(mappedBy = "consoles")
    private List<PurchaseOrder> purchaseOrder;
}