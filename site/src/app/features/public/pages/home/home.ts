import { ChangeDetectionStrategy, Component, ElementRef, afterNextRender, computed, inject, signal, viewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE } from '../../../../core/config/site';
import { I18nService } from '../../../../core/i18n/i18n.service';
import { TranslatePipe } from '../../../../core/i18n/translate.pipe';
import { CopyCommand } from '../../../../shared/components/copy-command/copy-command';
import { VERSION } from '../../../../shared/components/header/header';
import { initMenu } from '../../../../../../../js/menu.js';

/**
 * Portada como la de Bootstrap: qué es, el comando de instalación, el menú «Para agentes» (IA) y el botón a la
 * documentación.
 */
@Component({
  selector: 'app-home',
  imports: [RouterLink, CopyCommand, TranslatePipe],
  templateUrl: './home.html',
  styleUrl: './home.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  private readonly i18n = inject(I18nService);
  private readonly agents = viewChild<ElementRef<HTMLElement>>('agents');

  readonly version = VERSION;
  readonly installCommand = 'npm install glassmarshmallow';
  readonly site = SITE;
  /** Comando para instalar la skill de instalación en un proyecto con Claude Code */
  readonly skillCommand = `npx degit ${SITE.repo.replace('https://github.com/', '')}/skills/install .claude/skills/glassmarshmallow-install`;
  readonly skillsUrl = `${SITE.repo}/tree/main/skills`;
  readonly copied = signal(false);

  /** ChatGPT y Claude, con la pregunta ya escrita apuntando a nuestro llms.txt */
  readonly askChatGpt = computed(() => `https://chatgpt.com/?q=${encodeURIComponent(this.prompt())}`);
  readonly askClaude = computed(() => `https://claude.ai/new?q=${encodeURIComponent(this.prompt())}`);
  private readonly prompt = computed(() => this.i18n.t('home.agentsPrompt', { url: `${SITE.url}/llms.txt` }));

  constructor() {
    // El menú del framework (js/menu.js): abrir, cerrar y moverse con el teclado
    afterNextRender(() => {
      const menu = this.agents()?.nativeElement;
      if (menu) initMenu(menu);
    });
  }

  async copySkill() {
    try {
      await navigator.clipboard.writeText(this.skillCommand);
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 2000);
    } catch {
      this.copied.set(false);
    }
  }
}
