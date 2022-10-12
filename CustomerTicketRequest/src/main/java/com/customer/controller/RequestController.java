package com.customer.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.customer.entity.Request;
import com.customer.exception.ResourceNotFoundException;
import com.customer.repository.RequestRepository;

@CrossOrigin("*")
@RestController
@RequestMapping("/requests")
public class RequestController {

	@Autowired
	private RequestRepository requestRepository;

	@GetMapping
	public List<Request> getAllRequests() {
		return requestRepository.findAll();
	}

	@PostMapping
	public Request createRequest(@RequestBody Request request) {
		return requestRepository.save(request);
	}

	@GetMapping("/ticket/{ticketId}/ticketbyId")
	public ResponseEntity<Request> getRequestById(@PathVariable("ticketId") long ticketId) {
		Request request = requestRepository.findById(ticketId)
				.orElseThrow(() -> new ResourceNotFoundException("Request not exist with ticketId:" + ticketId));
		return ResponseEntity.ok(request);
	}

	@PutMapping(("/ticket/{ticketId}/tickets/updateTicket"))
	public ResponseEntity<Request> updateUserRequest(@PathVariable long ticketId, @RequestBody Request requestDetails) {
		Request updateRequest = requestRepository.findById(ticketId)
				.orElseThrow(() -> new ResourceNotFoundException("Request not exist with ticketId: " + ticketId));

		updateRequest.setTicketId(ticketId);
		updateRequest.setAssignedGroup(requestDetails.getAssignedGroup());
		updateRequest.setStatus(requestDetails.getStatus());
		updateRequest.setSummary(requestDetails.getSummary());
		updateRequest.setCreatedDate(requestDetails.getCreatedDate());
		updateRequest.setServiceType(requestDetails.getServiceType());
		updateRequest.setCustomerName(requestDetails.getCustomerName());

		requestRepository.save(updateRequest);

		return ResponseEntity.ok(updateRequest);
	}

	@DeleteMapping("/ticket/{ticketId}/ticket/deleteRequest")
	public ResponseEntity<HttpStatus> deleteRequest(@PathVariable("ticketId") long ticketId) {

		Request request = requestRepository.findById(ticketId)
				.orElseThrow(() -> new ResourceNotFoundException("Request not exist with ticketId: " + ticketId));

		requestRepository.delete(request);

		return new ResponseEntity<>(HttpStatus.NO_CONTENT);

	}
}
