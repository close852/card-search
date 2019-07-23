package com.cjhm.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cjhm.entity.Tag;
import com.cjhm.entity.Todo;
import com.cjhm.repository.TagRepository;

import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
public class TagController {

    TagRepository tagRepository;

    TagController(TagRepository tagRepository) {
        this.tagRepository = tagRepository;
    }

    @GetMapping("/api/tag")
    public List<Todo> tag(@RequestParam(required = false) Long query) {
    	Tag tag = tagRepository.findById(query).orElse(new Tag());
    	log.info("tag todolist size"+tag.getTodoList().size());
    	tag.getTodoList().stream().forEach(todo->log.info("Todo::getId > "+todo.getId()+"/"+todo.getTitle()));
        return tag.getTodoList();
    }

}