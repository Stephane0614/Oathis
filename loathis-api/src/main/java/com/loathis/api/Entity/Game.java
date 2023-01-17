package com.loathis.api.Entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
@Table(name = "games")
public class Game {
    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Lob
    @Column(name = "description")
    private String description;

    @Column(name = "image", nullable = false, length = 250)
    private String image;

    @Column(name = "isNew", nullable = false)
    private Boolean isNew = false;

    @Column(name = "price", nullable = false)
    private Double price;

    @Column(name = "gender", nullable = false, length = 100)
    private String gender;

    @Column(name = "title", nullable = false, length = 100)
    private String title;

    @Column(name = "stock", nullable = false)
    private Integer stock;

    @ManyToMany
    @JsonBackReference(value = "consoles")
    private List<Console> consoles;

    @ManyToMany(mappedBy = "games")
    private List<PurchaseOrder> purchaseOrder;
}