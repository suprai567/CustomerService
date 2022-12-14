package com.user.service.impl;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.user.RoleRepository;
import com.user.UserRepository;
import com.user.entity.ERole;
import com.user.entity.Role;
import com.user.entity.User;
import com.user.service.UserService;

/**
 * 
 * @author supriya
 * This is UserServiceImpl which is used for running methods from controller
 * getUser method is used for fetching user with user id and role
 *
 */

@Service
public class UserServiceImpl implements UserService{
	
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	RoleRepository roleRepository;
	
	@Override
	public User getUser(int userId, ERole roleUser) {
		User user = null;
		Role userRole = roleRepository.findByName(roleUser)
				.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
		Optional<User> userOptional = userRepository.findById(userId);
		if(userOptional.isPresent() && userOptional.get().getRoles().stream().anyMatch(r -> r.getName().equals(userRole.getName()))) {
			user = userOptional.get();
		}
		return user;
	}

}
