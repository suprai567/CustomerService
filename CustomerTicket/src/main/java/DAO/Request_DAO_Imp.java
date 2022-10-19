package DAO;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import Model.Request;

@Repository
public class Request_DAO_Imp implements Request_DAO {

	@Autowired
	private SessionFactory sessionFactory;

	@Override
	public boolean saveRequest(Request request) {
		boolean status = false;
		try {
			sessionFactory.getCurrentSession().save(request);
			status = true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return status;
	}

	@Override
	public List<Request> getRequests() {
		Session currentSession = sessionFactory.getCurrentSession();
		Query<Request> query = currentSession.createQuery("from Request", Request.class);
		List<Request> list = query.getResultList();
		return list;
	}

	@Override
	public boolean deleteRequest(Request request) {
		boolean status = false;
		try {
			sessionFactory.getCurrentSession().delete(request);
			status = true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return status;
	}

	@Override
	public List<Request> getRequestByID(Request request) {
		Session currentSession = sessionFactory.getCurrentSession();
		Query<Request> query = currentSession.createQuery("from Request where ticketId=:ticketId", Request.class);
		query.setParameter("ticketId", request.getTicketId());
		List<Request> list = query.getResultList();
		return list;
	}

	@Override
	public boolean updateRequest(Request request) {
		boolean status = false;
		try {
			sessionFactory.getCurrentSession().update(request);
			status = true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return status;
	}

}
