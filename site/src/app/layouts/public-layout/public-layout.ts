import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../../shared/components/header/header';
import { Footer } from '../../shared/components/footer/footer';
import { TranslatePipe } from '../../core/i18n/translate.pipe';

@Component({
  selector: 'app-public-layout',
  imports: [RouterOutlet, Header, Footer, TranslatePipe],
  templateUrl: './public-layout.html',
  styleUrl: './public-layout.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PublicLayout {}
