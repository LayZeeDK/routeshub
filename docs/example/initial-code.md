# Initial Code

Let's imagine, we have such routes:

* App 
* About \(App's child\)
* Auth
* NotFound

## Initial Code

Below is only the code of the routes files

{% code-tabs %}
{% code-tabs-item title="app.routes.ts" %}
```typescript
import { ViewComponent } from '../view.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ViewComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'about'
      },
      {
        path: 'about',
        loadChildren: 'app/views/about/about.module#AboutModule'
      }
    ]
  },
  {
    path: 'auth'
    pathMatch: 'full',
    loadChildren: 'app/views/auth/auth.module#AuthModule'
  }
  {
    path: '**',
    redirectTo: ''
  }
];
```
{% endcode-tabs-item %}

{% code-tabs-item title="about.routes.ts" %}
```typescript
import { AboutComponent } from './about.component';

export const aboutRoutes: Routes = [
  {
    path: ''
    component: AboutComponent
  }
];
```
{% endcode-tabs-item %}

{% code-tabs-item title="auth.routes.ts" %}
```typescript
import { SignUpComponent } from './sign-up.component';
import { SignInComponent } from './sign-in.component';

export const authRoutes: Routes = [
  {
    path: ''
    pathMatch: 'full',
    redirectTo: 'sign-in'
  },
  {
    path: 'sign-up'
    redirectTo: SignUpComponent
  },
  {
    path: 'sign-in'
    component: SignInComponent
  },
  {
    path: 'sign-in/:id'
    component: SignInComponent
  },
];
```
{% endcode-tabs-item %}
{% endcode-tabs %}

Now we're going to integrate **routeshub** into the project

