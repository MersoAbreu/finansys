import { Component, OnInit } from '@angular/core';
import { CategoryService } from './../shared/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  categoria: any;
  constructor(private category: CategoryService) { }

  ngOnInit(): void {
    this.category.getAll().subscribe(response => this.categoria = response);
  }
  delete(){}
}
