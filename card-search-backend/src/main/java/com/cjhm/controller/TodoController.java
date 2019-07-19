package com.cjhm.controller;

import java.util.Arrays;
import java.util.List;

import com.cjhm.entity.Tag;
import com.cjhm.entity.Todo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.web.bind.annotation.RequestParam;
import lombok.extern.slf4j.Slf4j;
import static java.util.stream.Collectors.toList;

@RestController
@Slf4j
public class TodoController {

    @GetMapping("/api/todo")
    public List<Todo> todo(@RequestParam(required = false) String query) {
        List<Tag> tags = Arrays.asList(Tag.builder().id(1L).tag("mw").build(), Tag.builder().id(2L).tag("검색").build(),
                Tag.builder().id(3L).tag("검색").build(), Tag.builder().id(4L).tag("검색").build());
        List<Todo> todoList = Arrays.asList(
                Todo.builder().id(1L).header("header-1").content("content-1").title("title-1").tagList(tags).build(),
                Todo.builder().id(2L).header("header-2").content("content-2").title("title-2").build(),
                Todo.builder().id(3L).header("header-3").content("content-3").title("title-3").build(),
                Todo.builder().id(4L).header("header-4").content("content-4").title("title-4").build(),
                Todo.builder().id(5L).header("header-5").content("content-5").title("title-5").build(),
                Todo.builder().id(6L).header("header-6").content("content-6").title("title-6").build());

        if (query != null) {
            todoList = todoList.stream().filter(todo -> todo.getContent().indexOf(query) >= 0).collect(toList());
        }
        log.info("뭐냐... {}", todoList);
        return todoList;
    }

}