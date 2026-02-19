package com.feelfree.backend.service.Mood;

import com.feelfree.backend.entity.Mood.Mood;
import com.feelfree.backend.entity.Mood.MoodType;

import java.util.List;

public interface MoodService {

    Mood logMood(Long userId, MoodType moodType);

    List<Mood> getUserMoods(Long userId);

}
