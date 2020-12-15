package com.bsu.web.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@NoArgsConstructor
public class BlindWindowDto {
  private String id;

  private String model;

  private int height;

  private int width;

  private BigDecimal price;

  private String description;

  private String photoLink;
}
