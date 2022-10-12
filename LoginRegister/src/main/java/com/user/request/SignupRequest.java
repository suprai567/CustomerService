package com.user.request;

import java.util.Set;
import javax.validation.constraints.*;

/**
 * 
 * @author supriya SignupRequest entity is used for declaring sign up details
 *
 */

public class SignupRequest {

	@NotBlank(message = "name cannot be blank#######")
	@Size(max = 50)
	private String name;

	@NotBlank
	@Size(min = 3, max = 20)
	private String userName;

	private long mobileNo;

	@NotBlank
	private String address;

	@NotBlank
	private String state;

	@NotBlank
	private String country;

	@NotBlank
	@Size(max = 50)
	@Email
	private String emailId;

	private Set<String> role;

	@NotBlank
	@Size(min = 6, max = 40)
	private String password;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public long getMobileNo() {
		return mobileNo;
	}

	public void setMobileNo(long mobileNo) {
		this.mobileNo = mobileNo;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public Set<String> getRole() {
		return this.role;
	}

	public void setRole(Set<String> role) {
		this.role = role;
	}
}
