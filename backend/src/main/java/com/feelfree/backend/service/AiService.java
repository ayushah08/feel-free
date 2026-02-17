package com.feelfree.backend.service;

import com.feelfree.backend.entity.MoodType;

public interface AiService {
     String  generateSupportMessage(MoodType moodType);
}
