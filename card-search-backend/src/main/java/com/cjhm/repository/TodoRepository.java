package com.cjhm.repository;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import com.cjhm.entity.Tag;
import com.cjhm.entity.Todo;

import org.springframework.stereotype.Repository;
import static java.util.stream.Collectors.toList;

@Repository
public class TodoRepository {

    public List<Todo> getTodoList() {
        return tempDB();
    }

    public List<Todo> getTodoList(String query) {

        return tempDB().stream().filter(todo -> todo.getContent().indexOf(query) >= 0).collect(toList());
    }

    private List<Todo> tempDB() {
        List<Tag> tags = Arrays.asList(Tag.builder().id(1L).tag("mw").build(), Tag.builder().id(2L).tag("검색").build(),
                Tag.builder().id(3L).tag("검색").build(), Tag.builder().id(4L).tag("검색").build(),
                Tag.builder().id(5L).tag("검색").build(), Tag.builder().id(6L).tag("검색").build(),
                Tag.builder().id(7L).tag("검색").build(), Tag.builder().id(8L).tag("검색").build(),
                Tag.builder().id(9L).tag("검색").build(), Tag.builder().id(10L).tag("검색").build());

        return Arrays.asList(
                Todo.builder().id(1L).header("header-1").content("content-1").title("title-1").tagList(tags).build(),
                Todo.builder().id(2L).header("header-2").content("content-2").title("title-2").build(),
                Todo.builder().id(3L).header("header-3").content("content-3").title("title-3").build(),
                Todo.builder().id(4L).header("header-4").content("content-4").title("title-4").build(),
                Todo.builder().id(5L).header("header-5").content("content-5").title("title-5").build(),
                Todo.builder().id(6L).header("header-6").content("content-6").title("title-6").build());

    }

    public List<Todo> getTagList(Long query) {

        return getTodoList().stream()
                .filter(todo -> todo.getTagList() != null
                        && todo.getTagList().stream().filter(tag -> tag.getId() == query).count() > 0)
                .collect(Collectors.toList());
    }
}