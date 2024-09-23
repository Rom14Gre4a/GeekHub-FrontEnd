import { Directive, Input, ElementRef, HostListener } from '@angular/core';
import { NbIconConfig, NbToastrService } from '@nebular/theme';

@Directive({
  selector: '[copyToClipboard]'
})
export class CopyToClipboardDirective {
  @Input('copyToClipboard') copyText: string;

  constructor(
    private el: ElementRef,
        private toastrService: NbToastrService,
    ) {}

  @HostListener('click') onClick() {
    this.copyToClipboard();
  }

  private copyToClipboard() {
    
    const textArea = document.createElement('textarea');
    textArea.value = this.copyText;

    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);

    const iconConfig: NbIconConfig = { icon: 'copy-icon-toastr', pack: 'great-pack' };
          this.toastrService.info('', "Copied to clipboard", { icon:iconConfig});
  }
}
