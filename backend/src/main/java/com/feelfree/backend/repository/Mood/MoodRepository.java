package com.feelfree.backend.repository.Mood;

import com.feelfree.backend.entity.Mood.Mood;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MoodRepository extends JpaRepository<Mood , Long> {
}
