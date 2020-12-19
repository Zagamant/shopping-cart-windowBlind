package com.bsu.web.controller;

import com.bsu.entity.User;
import com.bsu.helper.PasswordHash;
import com.bsu.repostitory.UserRepository;
import com.bsu.web.dto.UserDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("api/v1/users")
@Validated
public class UserController {
    private final UserRepository repository;

    @Autowired
    public UserController(UserRepository repository) throws InvalidKeySpecException, NoSuchAlgorithmException {
        this.repository = repository;
        if(repository.findByUsername("admin").isPresent())
            return;
        User firstAdmin = new User();
        firstAdmin.setUsername("admin");
        firstAdmin.setPassword(PasswordHash.createHash("admin"));
        repository.insert(firstAdmin);
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    List<UserDto> findAll() {
        return repository.findAll().stream().map(this::mapToDto).collect(Collectors.toList());
    }

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity create(@RequestBody @Validated UserDto dto) throws InvalidKeySpecException, NoSuchAlgorithmException {
        Optional<User> user = repository.findByUsername(dto.getUsername());
        if (user.isPresent())
            return ResponseEntity.badRequest().build();
        dto.setPassword(PasswordHash.createHash(dto.getPassword()));
        User newUser = mapToNewEntity(dto);
        repository.insert(newUser);

        URI location = ServletUriComponentsBuilder
                .fromCurrentRequest().path("/{id}")
                .buildAndExpand(newUser.getId()).toUri();
        return ResponseEntity.created(location).build();
    }


    @RequestMapping(value = "{id}", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity update(@RequestBody UserDto dto, @PathVariable(value = "id") String id) throws InvalidKeySpecException, NoSuchAlgorithmException {
        Optional<User> windowBlindOpt = repository.findById(id);
        if (!windowBlindOpt.isPresent()) {
            return ResponseEntity.notFound().build();
        }
        dto.setPassword(PasswordHash.createHash(dto.getPassword()));
        User windowBlind = windowBlindOpt.get();
        mapToEntity(dto, windowBlind);
        repository.save(windowBlind);
        return ResponseEntity.noContent().build();
    }

    @RequestMapping(value = "{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity findById(@PathVariable(value = "id") String id) {
        Optional<User> windowBlindOpt = repository.findById(id);
        if (!windowBlindOpt.isPresent()) {
            return ResponseEntity.notFound().build();
        }
        User windowBlind = windowBlindOpt.get();
        UserDto dto = mapToDto(windowBlind);
        return ResponseEntity.ok(dto);
    }

    @RequestMapping(value = "{id}", method = RequestMethod.DELETE, consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity delete(@PathVariable(value = "id") String id) {
        Optional<User> windowBlindOpt = repository.findById(id);
        if (!windowBlindOpt.isPresent()) {
            return ResponseEntity.notFound().build();
        }
        repository.delete(windowBlindOpt.get());
        return ResponseEntity.noContent().build();
    }

    @PostMapping(value="equals",produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    public Boolean Equals(@RequestBody UserDto user) throws InvalidKeySpecException, NoSuchAlgorithmException {
        Optional<User> userM = repository.findByUsername(user.getUsername());
        if (!userM.isPresent())
            return false;

        return PasswordHash.validatePassword(user.getPassword(), userM.get().getPassword());

    }

    private UserDto mapToDto(User user) {
        UserDto dto = new UserDto();

        dto.setId(user.getId());
        dto.setUsername(user.getUsername());
        dto.setPassword(user.getPassword());

        return dto;
    }

    private User mapToNewEntity(UserDto dto) {
        User entity = new User();
        return mapToEntity(dto, entity);
    }

    private User mapToEntity(UserDto dto, User entity) {
        entity.setUsername(dto.getUsername());
        entity.setPassword(dto.getPassword());

        return entity;
    }
}
