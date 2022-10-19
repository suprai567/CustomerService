package Service;

import java.util.List;

import Model.Request;

public interface Student_Service {
	
	public boolean saveRequest(Request request);
	public List<Request> getRequests();
	public boolean deleteRequest(Request request);
	public List<Request> getRequestByID(Request request);
	public boolean updateRequest(Request request);
}
