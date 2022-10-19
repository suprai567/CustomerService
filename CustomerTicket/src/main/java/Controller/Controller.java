package Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import Model.Request;
import Service.Student_Service;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(value = "/requests")
public class Controller {

	@Autowired
	private Student_Service requestservice;

	@PostMapping("save-request")
	public boolean saveRequest(@RequestBody Request request) {
		return requestservice.saveRequest(request);

	}

	@GetMapping("requests-list")
	public List<Request> allrequests() {
		return requestservice.getRequests();
	}

	@DeleteMapping("delete-request/{ticketId}")
	public boolean deleteRequest(@PathVariable("ticketId") int ticketId, Request request) {
		request.setTicketId(ticketId);
		return requestservice.deleteRequest(request);
	}

	@GetMapping("request/{ticketId}")
	public List<Request> allstudentByID(@PathVariable("ticketId") int ticketId, Request request) {
		request.setTicketId(ticketId);
		return requestservice.getRequestByID(request);

	}

	@PostMapping("update-request/{ticketId}")
	public boolean updateRequest(@RequestBody Request request, @PathVariable("ticketId") int ticketId) {
		request.setTicketId(ticketId);
		return requestservice.updateRequest(request);
	}
}
