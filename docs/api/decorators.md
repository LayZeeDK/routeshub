# Decorators

## Sliced

A decorator that applies slice to the component property by local hub key or slice name. 

#### Generic Type:

```typescript
: <T = any>
```

#### Args:

```typescript
(
  arg: string | symbol
)
```

####  Return Type:

```typescript
: (target: any, propertyKey: PropertyKey) => T
```

#### Use example:

```typescript
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  Slice,
  Sliced
} from 'routeshub';
import {
  APP_HUB_KEY,
  AppChildNotes,
  AppNotes
} from '../../../routing/hub/app.notes';
import { AboutNotes } from '../../../views/about/hub/about.notes';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

  // getting slice by key
  @Sliced(APP_HUB_KEY)
  private app: Slice<AppNotes, AppChildNotes>;

  // getting slice by slice name
  @Sliced('about')
  private about: Slice<AboutNotes>;
  
}

```

