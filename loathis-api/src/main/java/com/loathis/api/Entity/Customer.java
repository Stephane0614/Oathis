package com.loathis.api.Entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter @Setter
@Table(name = "customers")
public class Customer {
    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "address", length = 100)
    private String address;

    @Column(name = "email", nullable = false, length = 100)
    private String email;

    @Column(name = "firstName", nullable = false, length = 100)
    private String firstName;

    @Column(name = "lastName", nullable = false, length = 100)
    private String lastName;

    @Column(name = "password", nullable = false, length = 100)
    private String password;

    @Column(name = "phoneNbr", length = 100)
    private String phoneNbr;

    @Column(name = "premiumCard", length = 100)
    private String premiumCard;

    @OneToMany
    private List<PurchaseOrder> purchaseOrders;
}