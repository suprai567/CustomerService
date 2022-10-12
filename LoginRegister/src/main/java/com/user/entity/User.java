package com.user.entity;

import java.util.HashSet;
import java.util.Set;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import lombok.Data;

/**
 * 
 * @author supriya User entity is used for declaring the details of user with
 *         roles author and reader and validation of user details
 *
 */

@Data
@Entity
@Table(name = "users", uniqueConstraints = { @UniqueConstraint(columnNames = "userName"),
		@UniqueConstraint(columnNames = "emailId") })
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@NotBlank(message = "name1 cannot be blank#######")
	@Size(max = 50)
	private String name;

	@NotBlank
	private String address;

	@NotBlank
	private String state;

	@NotBlank
	private String country;

	@NotBlank(message = "username cannot be blank#######")
	@Size(max = 20)
	private String userName;

	private long mobileNo;

	@Email
	@NotBlank(message = "email cannot be blank#######")
	@Size(max = 50)
	private String emailId;

	@NotBlank(message = "password cannot be blank#######")
	@Size(max = 120)
	private String password;

	@ManyToMany(fetch = FetchType.LAZY)
	@JoinTable(name = "user_roles", joinColumns = @JoinColumn(name = "user_id"), inverseJoinColumns = @JoinColumn(name = "role_id"))
	private Set<Role> roles = new HashSet<>();

	public User() {
	}

	public User(@NotBlank(message = "name1 cannot be blank#######") @Size(max = 50) String name,
			@NotBlank String address, @NotBlank String state, @NotBlank String country,
			@NotBlank(message = "username cannot be blank#######") @Size(max = 20) String userName,
			@NotBlank(message = "mobileNo cannot be blank#######") @Size(min = 7, max = 15) long mobileNo,
			@Email @NotBlank(message = "email cannot be blank#######") @Size(max = 50) String emailId,
			@NotBlank(message = "password cannot be blank#######") @Size(max = 120) String password) {
		super();
		this.name = name;
		this.address = address;
		this.state = state;
		this.country = country;
		this.userName = userName;
		this.mobileNo = mobileNo;
		this.emailId = emailId;
		this.password = password;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
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

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public long getMobileNo() {
		return mobileNo;
	}

	public void setMobileNo(long mobileNo) {
		this.mobileNo = mobileNo;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Set<Role> getRoles() {
		return roles;
	}

	public void setRoles(Set<Role> roles) {
		this.roles = roles;
	}

}