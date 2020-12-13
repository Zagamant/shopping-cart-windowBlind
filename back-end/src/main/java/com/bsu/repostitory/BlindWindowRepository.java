package com.bsu.repostitory;

import com.bsu.entity.WindowBlind;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface BlindWindowRepository extends MongoRepository<WindowBlind, String> {}
