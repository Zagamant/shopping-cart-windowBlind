package com.bsu.repostitory;

import com.bsu.entity.User;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface UserRepository extends MongoRepository<User, String> {
    public Optional<User> findByUsernameAndPassword(String username, String password);
}