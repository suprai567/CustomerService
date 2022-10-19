package Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import DAO.Request_DAO;
import Model.Request;

@Service
@Transactional
public class Request_Service_Imp implements Student_Service {
 
	@Autowired
	private Request_DAO requestdao;
	
	@Override
	public boolean saveRequest(Request request) {
		return requestdao.saveRequest(request);
	}

	@Override
	public List<Request> getRequests() {
		return requestdao.getRequests();
	}

	@Override
	public boolean deleteRequest(Request request) {
		return requestdao.deleteRequest(request);
	}

	@Override
	public List<Request> getRequestByID(Request request) {
		return requestdao.getRequestByID(request);
	}

	@Override
	public boolean updateRequest(Request request) {
		return requestdao.updateRequest(request);
	}

}
