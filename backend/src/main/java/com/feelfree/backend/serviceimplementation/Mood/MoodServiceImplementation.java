package com.feelfree.backend.serviceimplementation.Mood;

import com.feelfree.backend.entity.Mood.Mood;
import com.feelfree.backend.entity.Mood.MoodType;
import com.feelfree.backend.entity.User;
import com.feelfree.backend.repository.Mood.MoodRepository;
import com.feelfree.backend.repository.UserRepository;
import com.feelfree.backend.service.Ai.AiService;
import com.feelfree.backend.service.Mood.MoodService;
import com.feelfree.backend.service.achivement.AchievementService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class MoodServiceImplementation implements MoodService {

    private final AiService aiService;
    private final MoodRepository moodRepository;
    private final UserRepository userRepository;
    private final AchievementService achievementService;


    @Override
    public Mood logMood(Long userId, MoodType moodType) {

        User user = userRepository.findById(userId)
                .orElseThrow(() ->
                        new RuntimeException("User Not Found with ID : " + userId));

        String supportiveMessage =
                aiService.generateSupportMessage(moodType);

        Mood mood = Mood.builder()
                .moodType(moodType)
                .supportiveMessage(supportiveMessage)
                .createdAt(LocalDateTime.now())
                .user(user)
                .build();

        Mood save = moodRepository.save(mood);
        achievementService.checkAndUnlockAchievements(user);

        return save;
    }

    @Override
    public List<Mood> getUserMoods(Long userId) {

        return moodRepository.findUserById(userId);
    }
}
