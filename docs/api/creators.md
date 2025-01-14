# Creators

| Name | Type | Args | Return Type |
| :--- | :--- | :--- | :--- |
| [createNote](creators.md#createnote) | &lt;R = any&gt; | routes, nameOptions | R |
| [createRoot](creators.md#createroot) | &lt;R = any, C = {}&gt; | routes, routeName | Slice&lt;R & C&gt; |
| [createFeature](creators.md#createfeature) | &lt;R = any, C = {}&gt; | parentRoute, routes | Slice&lt;R & C&gt; |

## [createNote](creators.md#createnote)

Creates a route note unit. Uses internally under the [createRoot](creators.md#createroot) / [createFeature](creators.md#createfeature)

#### Generic Type:

```typescript
: <R = any>
```

`R` describes the routes

#### Args:

```typescript
(
  routes: Route[],
  nameOptions: R = {}
)

NameOptions are watching for root ('') and wildcard ('**') paths
```

####  Return Type:

```typescript
: R
```

#### Usage example:

{% code-tabs %}
{% code-tabs-item title="app.hub.ts" %}
```typescript
export const routes: Routes = [
  {
    path: '',
    component: ViewComponent,
  },
  {
    path: '**',
    redirectTo: ''
  }
];

export interface AppNotes {
  home: Note;
  notFound: Note;
}

export const appNote = createNote<AppNotes>(routes, { 
  root: 'home', 
  wildcard: 'notFound' 
});
```
{% endcode-tabs-item %}
{% endcode-tabs %}

## [createRoot](creators.md#createroot)

Creates the root slice and invokes only once to initialize a hub. 

#### Generic Type:

```typescript
: <R = any, C = {}>
```

`R` describes the notes and `C` describes its children

#### Args:

```typescript
(
  routes: Route[],
  ...args: (symbol | DefaultRouteName)[]
)
```

####  Return Type:

```typescript
: Slice<R & C>
```

#### Usage example:

{% code-tabs %}
{% code-tabs-item title="app.hub.ts" %}
```typescript
import { createRoot } from 'routeshub';
import { AppNotes, AppChildNotes, APP_HUB_KEY } from './app.notes';
import { ViewComponent } from '../view/view.component';

export const routes: Routes = [
  {
    path: ''
    component: ViewComponent
  }
];

export const appSlice: Slice<AppNotes, AppChildNotes> = 
    createRoot<AppNotes, AppChildNotes>(routes, APP_HUB_KEY);

```
{% endcode-tabs-item %}
{% endcode-tabs %}

## [createFeature](creators.md#createfeature)

Invokes once for each feature \(eager/lazy\) module. 

####  Generic Type:

```typescript
: <R = any, C = {}>
```

`R` describes the notes and `C` describes its children

#### Args:

```typescript
(
  parentRoute: Structure,
  routes: Route[],
  key?: symbol
)
```

#### Return Type:

```typescript
: Slice<R & C>
```

#### Usage example:

{% code-tabs %}
{% code-tabs-item title="about.hub.ts" %}
```typescript
import { createFeature } from 'routeshub';
import { appSlice } from '../../../routing/hub/app.hub';
import { AboutNotes, ABOUT_HUB_KEY } from './about.notes';
import { AboutComponent } from '../about/about.component';

export const routes: Routes = [
  {
    path: ''
    component: AboutComponent
  }
];

export const aboutSlice: Slice<AboutNotes> = 
    createFeature<AboutNotes>(routes, ABOUT_HUB_KEY);

```
{% endcode-tabs-item %}
{% endcode-tabs %}

