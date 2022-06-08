package com.example.Backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Product")
public class Product {
    @Id
    private String id;
    private String title;
    private String id_cate;
    private String categorySlug;
    private String image1;
    private String image2;
    private long price;
    private String slug;
    private String colors;
    private String size;
    private String descriptions;

    public Product(String id, String title, String id_cate, String categorySlug, String image1, String image2,
                   long price, String slug, String color, String size, String description) {
        this.id = id;
        this.title = title;
        this.id_cate = id_cate;
        this.categorySlug = categorySlug;
        this.image1 = image1;
        this.image2 = image2;
        this.price = price;
        this.slug = slug;
        this.colors = color;
        this.size = size;
        this.descriptions = description;
    }

    public long getPrice() {
        return price;
    }

    public void setPrice(long price) {
        this.price = price;
    }


    public Product() {
    }

    public String getId() {
        return id;
    }

    public void setId(String  id) {
        this.id = id;
    }

    public String getImage1() {
        return image1;
    }

    public void setImage1(String image) {
        this.image1 = image;
    }

    public String getImage2() {
        return image2;
    }

    public void setImage2(String image) {
        this.image2 = image;
    }

    public String getSlug() {
        return slug;
    }

    public void setSlug(String slug) {
        this.slug = slug;
    }

    public String getColor() {
        return colors;
    }

    public void setColor(String color) {
        this.colors = color;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public String getDescription() {
        return descriptions;
    }

    public void setDescription(String description) {
        this.descriptions = description;
    }

    public String getId_cate() {
        return id_cate;
    }
    public void setId_cate(String id_cate) {
        this.id_cate = id_cate;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getCategorySlug() {
        return categorySlug;
    }

    public void setCategorySlug(String categorySlug) {
        this.categorySlug = categorySlug;
    }
}
