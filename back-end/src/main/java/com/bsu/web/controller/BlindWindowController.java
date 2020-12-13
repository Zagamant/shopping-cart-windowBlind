package com.bsu.web.controller;

import com.bsu.entity.WindowBlind;
import com.bsu.repostitory.BlindWindowRepository;
import com.bsu.web.dto.BlindWindowDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/v1/windowBlinds")
@Validated
public class BlindWindowController {
  private final BlindWindowRepository repository;

  @Autowired
  public BlindWindowController(BlindWindowRepository repository) {
    this.repository = repository;
  }

  @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
  @ResponseStatus(HttpStatus.OK)
  List<BlindWindowDto> findAll() {
    return repository.findAll().stream().map(this::mapToDto).collect(Collectors.toList());
  }

  @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
  @ResponseStatus(HttpStatus.CREATED)
  public void create(@RequestBody @Validated BlindWindowDto dto) {
    WindowBlind windowBlind = mapToNewEntity(dto);
    repository.insert(windowBlind);
  }

  @RequestMapping(value = "{id}", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)
  public ResponseEntity update(@RequestBody BlindWindowDto dto, @PathVariable(value = "id") String id) {
    Optional<WindowBlind> windowBlindOpt = repository.findById(id);
    if (!windowBlindOpt.isPresent()) {
      return ResponseEntity.notFound().build();
    }
    WindowBlind windowBlind = windowBlindOpt.get();
    mapToEntity(dto, windowBlind);
    repository.save(windowBlind);
    return ResponseEntity.noContent().build();
  }

  @RequestMapping(value = "{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
  public ResponseEntity findById(@PathVariable(value = "id") String id) {
    Optional<WindowBlind> windowBlindOpt = repository.findById(id);
    if (!windowBlindOpt.isPresent()) {
      return ResponseEntity.notFound().build();
    }
    WindowBlind windowBlind = windowBlindOpt.get();
    BlindWindowDto dto = mapToDto(windowBlind);
    return ResponseEntity.ok(dto);
  }

  @RequestMapping(value = "{id}", method = RequestMethod.DELETE)
  public ResponseEntity delete(@PathVariable(value = "id") String id) {
    Optional<WindowBlind> windowBlindOpt = repository.findById(id);
    if (!windowBlindOpt.isPresent()) {
      return ResponseEntity.notFound().build();
    }
    repository.delete(windowBlindOpt.get());
    return ResponseEntity.noContent().build();
  }

  private BlindWindowDto mapToDto(WindowBlind windowBlind) {
    BlindWindowDto dto = new BlindWindowDto();
    dto.setId(windowBlind.getId());
    dto.setDescription(windowBlind.getDescription());
    dto.setName(windowBlind.getName());
    dto.setPrice(windowBlind.getPrice());
    return dto;
  }

  private WindowBlind mapToNewEntity(BlindWindowDto dto) {
    WindowBlind entity = new WindowBlind();
    return mapToEntity(dto, entity);
  }

  private WindowBlind mapToEntity(BlindWindowDto dto, WindowBlind entity) {
    entity.setDescription(dto.getDescription());
    entity.setName(dto.getName());
    entity.setPrice(dto.getPrice());
    return entity;
  }
}
