package com.feelfree.backend.repository.Achivement;

import com.feelfree.backend.entity.Achivement.UserAchievement;
import com.feelfree.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserAchivementRepository extends JpaRepository<UserAchievement, Long> {
    List<UserAchievement> findByUser(User user);

}
