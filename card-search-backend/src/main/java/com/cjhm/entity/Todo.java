package com.cjhm.entity;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Entity
@Data
public class Todo implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@Column(name = "todo_id")
	@GeneratedValue
	private Long id;

	@Column
	private String header;

	@Column
	private String title;

	@Column
	private String content;

	@Column
	private String productNameKo;

	@Column
	private String productNameEn;

	@Column
	private String category;

	@Embedded
	private List<String> tags;

	@Column
	private String[] substitude;

	@ManyToMany(fetch = FetchType.EAGER)
	@JsonManagedReference
	// @JsonIdentityInfo(generator=ObjectIdGenerators.IntSequenceGenerator.class)
	@JoinTable(name = "t_todo_tag", joinColumns = @JoinColumn(name = "todo_id"), inverseJoinColumns = @JoinColumn(name = "tag_id"))
	private List<Tag> tagList = new ArrayList<Tag>();

	@Builder
	public Todo(Long id, String header, String title, String content, List<Tag> tagList) {
		super();
		this.id = id;
		this.header = header;
		this.title = title;
		this.content = content;
		if (this.tagList == null) {
			this.tagList = new ArrayList<Tag>();
		}
		if (tagList != null) {
			addAllTag(tagList);
		}
	}

	public Todo addTag(Tag tag) {
		if (tagList == null) {
			tagList = new ArrayList<Tag>();
		}
		if (tag != null) {
			tagList.remove(tag);
			tagList.add(tag);
			if (tag.getTodoList() != null && !tag.getTodoList().contains(this)) {
				tag.addTodo(this);
			}
		}
		return this;
	}

	private Todo addAllTag(List<Tag> tagList) {
		for (Tag tag : tagList) {
			addTag(tag);
		}
		return this;
	}

	public List<String> getTags() {
		return this.tags;
	}
}