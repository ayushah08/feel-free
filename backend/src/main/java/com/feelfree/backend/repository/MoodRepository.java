package com.feelfree.backend.repository;

import com.feelfree.backend.entity.Mood;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MoodRepository extends JpaRepository<Mood , Long> {
}
