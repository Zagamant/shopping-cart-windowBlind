package com.bsu.repostitory;

import com.bsu.entity.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

public interface UserRepository extends MongoRepository<User, String> {

    Optional<User> findByUsername(String username);

    boolean existsByUsernameAndPassword(String username, String password);

    @Transactional
    void deleteByUsername(String username);

}