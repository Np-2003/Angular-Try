import { CssSelector } from '@angular/compiler';
import { Component, ElementRef, Renderer2,  } from '@angular/core';
import { setActiveConsumer } from '@angular/core/primitives/signals';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,RouterModule,],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  //  isopen=false;
  //  constructor(private renderer:Renderer2,private el:ElementRef){}

  //   menuclick(){
  //     const uldiv = document.getElementById('uldiv')
  //     const menu = document.getElementById('menu')
  //     const close=document.getElementById('close')

  //         this.renderer.setStyle(uldiv, 'transform', 'translateX(0)'); 
  //         this.renderer.setStyle(menu, 'visibility', 'hidden');
  //         this.renderer.setStyle(close, 'visibility', 'visible');
  //       }
  //   closeclick(){
  //     const uldiv = document.getElementById('uldiv')
  //     const menu = document.getElementById('menu')
  //     const close=document.getElementById('close')

  //         this.renderer.setStyle(uldiv, 'transform', 'translateX(200px)'); 
  //         this.renderer.setStyle(menu, 'visibility', 'visible');
  //         this.renderer.setStyle(close, 'visibility', 'hidden');
          
  //       }

} 
    
