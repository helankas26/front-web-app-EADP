import {Component, OnInit} from '@angular/core';
import {ProductViewCardComponent} from "../../../shared/cards/product-view-card/product-view-card.component";
import {RouterLink} from "@angular/router";
import {ProductsService} from "../../../modules/utility/services/products/products.service";

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [
    ProductViewCardComponent,
    RouterLink
  ],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss'
})
export class ProductPageComponent implements OnInit {
  page: any = 0;
  size: any = 10;
  searchText = ''; // debounce


  //s=inject(ProductsService);

  constructor(private productService: ProductsService) {
  }

  ngOnInit(): void {
    this.loadAllProducts(this.page, this.size, this.searchText);
  }

  private loadAllProducts(page: any, size: any, searchText: string) {
    this.productService.loadProducts(page, size, searchText).subscribe(response => {
      console.log(response);
    })
  }

}
