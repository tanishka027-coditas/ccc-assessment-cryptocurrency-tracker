import { Component, OnInit } from '@angular/core';
import { CryptoService } from './crypto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  title = 'cryptotracker';
  cryptoCurrencyInfo :any= [];
  constructor(private cryptoService: CryptoService) {
  
  }

  ngOnInit() {
    this.getCryptoData();
  }

  getCryptoData() {
    this.cryptoService.getCryptoCurrency().subscribe({
      next: (res:any) =>{
        this.cryptoCurrencyInfo = res.data;
      },
      error:(error:any) =>{
        console.log('Unable to fetch crypto data from api')
      }
    })
  }
}
