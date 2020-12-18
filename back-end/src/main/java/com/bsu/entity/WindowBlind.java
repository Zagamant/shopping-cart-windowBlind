package com.bsu.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.math.BigDecimal;

@Document("WindowBlinds")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class WindowBlind {
  @Id
  private String id;
  private String model;
  private int height;
  private int width;
  private BigDecimal price;
  private String description;
  private String photoLink;
}
