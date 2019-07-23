package com.cjhm;

import java.util.Arrays;
import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cjhm.entity.Tag;
import com.cjhm.entity.Todo;
import com.cjhm.repository.TagRepository;
import com.cjhm.repository.TodoRepository;

@SpringBootApplication
@RestController
public class TodoApplication {

	@GetMapping("/")
	public String index() {
		return "";
	}

	public static void main(String[] args) {
		SpringApplication.run(TodoApplication.class, args);
	}
	
	@Bean
	public CommandLineRunner init(TagRepository tagRepository, TodoRepository todoRepository) {
		
		return (args)->{
			List<Tag> tags = Arrays.asList(
					Tag.builder().tag("mw").build(), Tag.builder().tag("검색").build(),
					Tag.builder().tag("검색").build(), Tag.builder().tag("검색").build(),
					Tag.builder().tag("검색").build(), Tag.builder().tag("검색").build(),
					Tag.builder().tag("검색").build(), Tag.builder().tag("검색").build(),
					Tag.builder().tag("검색").build(), Tag.builder().tag("검색").build());
			tagRepository.saveAll(tags);
			System.out.println("1차 Tag 등록");
			List<Todo> todoList =  Arrays.asList(
					Todo.builder().header("header-1").content("content-1").title("title-1").tagList(tags).build(),
					Todo.builder().header("header-2").content("content-2").title("title-2").build(),
					Todo.builder().header("header-3").content("content-3").title("title-3").build(),
					Todo.builder().header("header-4").content("content-4").title("title-4").build(),
					Todo.builder().header("header-5").content("content-5").title("title-5").build(),
					Todo.builder().header("header-6").content("content-6").title("title-6").build());
			todoRepository.saveAll(todoList);
			System.out.println("2차 Todo 등록");
			
			Todo todo = todoRepository.findById(11L).get();
			System.out.println(todo.getTagList().size());
			
			List<Todo> todos2 = tagRepository.findById(1L).get().getTodoList();
			System.out.println(todos2.size());

		};
	}

}
