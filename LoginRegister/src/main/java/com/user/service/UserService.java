package com.user.service;

import com.user.entity.ERole;
import com.user.entity.User;

/**
 * 
 * @author supriya
 * This is UserService interface which used for defining user details methods
 *
 */

public interface UserService {

	User getUser(int userId, ERole roleUser);
	
}
