package com.feelfree.backend.Initializers;

import com.feelfree.backend.entity.Achivement.AchievementType;
import com.feelfree.backend.repository.Achivement.AchievementRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class AchievementInitializer {

    private final AchievementRepository achievementRepository;

    public void init(){
        for(AchievementType type : AchievementType.values()){

            if (achievementRepository.findByTypes(type).isEmpty());
        }
    }
}
