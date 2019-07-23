package com.cjhm.controller;

import java.util.List;
import java.util.Map;

import org.apache.logging.log4j.CloseableThreadContext.Instance;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cjhm.entity.Todo;
import com.cjhm.repository.TodoRepository;

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
        List<Todo> todoList = todoRepository.findAll();
        log.info("뭐냐... {}", todoList.size());
        todoList.stream().forEach(todo ->log.info("size : "+todo.getTagList().size()));
        return todoList;
    }
    @PostMapping("/api/todo")
    public Todo addTodo(@ModelAttribute Todo todo,@RequestParam Map<String, String> parameters) {
    	
//    	log.info("todo.getProductNameKo >> "+productNameKo+" / "+category+"/"+tags);
//    	log.info(tags+"/"+substitude);
    	System.out.println(parameters);
    	System.out.println(todo.toString());
    	System.out.println(todo.getTags());
    	System.out.println(todo.getTags().getClass());
    	
    	return todo;
    }

}