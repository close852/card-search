package com.cjhm.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

import com.fasterxml.jackson.annotation.JsonBackReference;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class Tag {

	@Id
	@Column(name = "tag_id")
	@GeneratedValue
	private Long id;

	@Column
	private String tag;

	@ManyToMany(fetch = FetchType.EAGER, mappedBy = "tagList")
	@JsonBackReference
//	@JsonIdentityInfo(generator=ObjectIdGenerators.IntSequenceGenerator.class)
	@Builder.Default
	private List<Todo> todoList = new ArrayList<>();

	public Tag addTodo(Todo todo) {
		if (todo != null) {
			todoList.remove(todo);
			todoList.add(todo);
			if(todo.getTagList()!=null && !todo.getTagList().contains(this)) {
				todo.addTag(this);
			}
		}

		return this;
	}
}