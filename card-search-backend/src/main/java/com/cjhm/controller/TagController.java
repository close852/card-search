package com.cjhm.controller;

import java.util.List;

import com.cjhm.entity.Todo;
import com.cjhm.repository.TodoRepository;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.web.bind.annotation.RequestParam;
import lombok.extern.slf4j.Slf4j;

import java.util.ArrayList;

@RestController
@Slf4j
public class TagController {

    TodoRepository todoRepository;

    TagController(TodoRepository todoRepository) {
        this.todoRepository = todoRepository;
    }

    @GetMapping("/api/tag")
    public List<Todo> todo(@RequestParam(required = false) Long query) {
        List<Todo> todoList = new ArrayList<>();
        System.out.println("query>>> " + query);
        if (query != 0) {
            todoList = todoRepository.getTagList(query);
        }
        log.info("뭐냐... {}", todoList);
        return todoList;
    }

}