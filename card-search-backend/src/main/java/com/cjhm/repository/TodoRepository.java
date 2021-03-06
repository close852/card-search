package com.cjhm.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cjhm.entity.Todo;

@Repository
public interface TodoRepository extends JpaRepository<Todo, Long> {

	public List<Todo> findByTitle(String title);
	public List<Todo> findByContentIgnoreCaseContaining(String content);
	
}
