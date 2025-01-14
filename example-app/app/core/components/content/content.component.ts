import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentComponent {
  @Input() public vehicles: { brand: string; logo: string }[];

  public identify(index, item: { brand: string; logo: string }): string {
    return item.brand;
  }
}
