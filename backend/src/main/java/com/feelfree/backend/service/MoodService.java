package com.feelfree.backend.service;

import com.feelfree.backend.entity.Mood;
import com.feelfree.backend.entity.MoodType;

import java.util.List;

public interface MoodService {

    Mood logMood(Long userId, MoodType moodType);

    List<Mood> getUserMoods(Long userId);

}
