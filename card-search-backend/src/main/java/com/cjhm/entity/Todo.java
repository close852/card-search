package com.cjhm.entity;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Todo {

    private Long id;
    private String header;
    private String title;
    private String content;
    private List<Tag> tagList;
}