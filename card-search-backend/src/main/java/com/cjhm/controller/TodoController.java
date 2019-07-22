package com.cjhm.controller;

import java.util.List;

import com.cjhm.entity.Todo;
import com.cjhm.repository.TodoRepository;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.web.bind.annotation.RequestParam;
import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
public class TodoController {
    TodoRepository todoRepository;

    TodoController(TodoRepository todoRepository) {
        this.todoRepository = todoRepository;
    }

    @GetMapping("/api/todo")
    public List<Todo> todo(@RequestParam(required = false, defaultValue = "") String query) {
        List<Todo> todoList = todoRepository.getTodoList(query);
        log.info("뭐냐... {}", todoList);
        return todoList;
    }

}