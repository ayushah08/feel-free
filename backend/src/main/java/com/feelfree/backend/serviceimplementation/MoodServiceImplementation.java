package com.feelfree.backend.serviceimplementation;

import com.feelfree.backend.entity.Mood;
import com.feelfree.backend.entity.MoodType;
import com.feelfree.backend.entity.User;
import com.feelfree.backend.repository.MoodRepository;
import com.feelfree.backend.repository.UserRepository;
import com.feelfree.backend.service.AiService;
import com.feelfree.backend.service.MoodService;
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

        return moodRepository.save(mood);
    }

    @Override
    public List<Mood> getUserMoods(Long userId) {

        return moodRepository.findAll()
                .stream()
                .filter(mood -> mood.getUser().getId().equals(userId))
                .toList();
    }
}
