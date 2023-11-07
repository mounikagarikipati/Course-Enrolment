package com.enrolment.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.enrolment.models.CategoryModel;
import com.enrolment.repositories.CategoryRepository;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class CategoryService {
	@Autowired
	private CategoryRepository categoryRepository;

	public String addCategory(CategoryModel categoryModel) {
		System.out.println(categoryModel.getCategoryName());
		
		categoryRepository.save(categoryModel);
		return "Category Added Successfully";
	}

	public List<CategoryModel> getCategories() {
		List<CategoryModel> categoryModelsList = categoryRepository.findAll();
		return categoryModelsList;
	}

	public String getCategoriesCount() {
		String categories = categoryRepository.getCategoryCount();
		return categories;
	}

}
