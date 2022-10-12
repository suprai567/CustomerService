package com.user.response;

import java.util.List;

/**
 * 
 * @author supriya JwtResponse entity is used for declaring response details
 *
 */

public class JwtResponse {
	private String token;
	private String type = "Bearer";
	private Integer id;
	private String name;
	private String address;
	private String state;
	private String country;
	private String username;
	private String emailId;
	private List<String> roles;

	public JwtResponse(String accessToken, Integer id, String name, String address, String state, String country,
			String username, String emailId, List<String> roles) {
		this.token = accessToken;
		this.id = id;
		this.setName(name);
		this.address = address;
		this.state = state;
		this.country = country;
		this.username = username;
		this.emailId = emailId;
		this.roles = roles;
	}

	public String getAccessToken() {
		return token;
	}

	public void setAccessToken(String accessToken) {
		this.token = accessToken;
	}

	public String getTokenType() {
		return type;
	}

	public void setTokenType(String tokenType) {
		this.type = tokenType;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
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

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public List<String> getRoles() {
		return roles;
	}

}
