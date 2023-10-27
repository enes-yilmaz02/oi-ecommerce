import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent {
  items = this.cart.getItemsFavorites();
  constructor(
    private cart: CartService,
    private messageService: MessageService
  ) {}

  removeFromCartFavorites(item) {
    this.cart.removeFromCartFavorites(item);
    this.messageService.add({
      severity: 'success',
      summary: 'Başarılı',
      detail: 'Seçilen ürün favorilerimden kaldırıldı',
    });
    this.items = this.cart.getItemsFavorites();
  }
}
