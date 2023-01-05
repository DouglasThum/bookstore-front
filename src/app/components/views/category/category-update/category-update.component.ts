import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from './../category.service';
import { Category } from './../category.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.css']
})
export class CategoryUpdateComponent implements OnInit {

  category: Category = {
    id: '',
    name: '',
    description: ''
  }

  constructor(
    private service: CategoryService, 
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.category.id = this.route.snapshot.paramMap.get('id')!
    this.findById()
  }

  findById(): void {
    this.service.findById(this.category.id!).subscribe((response) => {
      this.category.name = response.name
      this.category.description = response.description
    })
  }

  update(): void {
    this.service.update(this.category).subscribe((response) => {
      this.router.navigate(['categories'])
      this.service.message("Categoria atualizada com sucesso!");
    }, err => {
      this.service.message("Favor validar se todos os campos estão preenchidos corretamente")
    })
  }

  cancel(): void {
    this.router.navigate(['categories'])
  }
}
