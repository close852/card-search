package com.cjhm.controller;

import java.util.Arrays;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cjhm.entity.Tag;
import com.cjhm.entity.Todo;
import com.cjhm.repository.TagRepository;
import com.cjhm.repository.TodoRepository;

import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
public class TodoController {
    TodoRepository todoRepository;
    TagRepository tagRepository;

    TodoController(TodoRepository todoRepository, TagRepository tagRepository) {
        this.todoRepository = todoRepository;
        this.tagRepository = tagRepository;
    }

    @GetMapping("/api/todo")
    public List<Todo> todo(@RequestParam(required = false, defaultValue = "") String query,
            @RequestParam Map<String, String> parameters) {
        log.info("keyword query > " + query);
        List<Todo> todoList = todoRepository.findByContentIgnoreCaseContaining(query);
        System.out.println(parameters);
        log.info("뭐냐... {}", todoList.size());
        todoList.stream().forEach(todo -> log.info("size : " + todo.getTagList().size()));
        return todoList;
    }

    @PostMapping("/api/todo")
    public Todo addTodo(@ModelAttribute Todo todo, @RequestParam Map<String, String> parameters) {

        // log.info("todo.getProductNameKo >> "+productNameKo+" / "+category+"/"+tags);
        // log.info(tags+"/"+substitude);
        System.out.println(parameters);
        System.out.println(todo.toString());
        todo.setHeader(todo.getProductNameKo());
        todo.setContent("content" + todo.getCategory());
        for (String content : todo.getTags()) {
            Tag tag = tagRepository.save(Tag.builder().tag(content).build());
            todo.addTag(tag);
        }

        // todo.addTagList(Arrays.asList(todo.getTags()));
        todoRepository.save(todo);
        return todo;
    }

}