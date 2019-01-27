# Motivation

## Foreword 🤔 

Have you suffered because of the _magic strings_? I did 😤 

Actually I was puzzled and stumped many times when I tried to come up with a convenient solution that would solve my problems 😵 

So, I had tones of thoughts, but ultimately, I came up with a solution that simultaneously solves the problems of routes with declaration, navigation and provides general control, predictable results and stability 😌 

## Examples 👨💻 

Looks familiar, right?

{% code-tabs %}
{% code-tabs-item title="app.routes.ts" %}
```typescript
export const routes: Routes = [
  {
    path: '',
    loadChildren: 'app/home/home.module#HomeModule'
  },

  {
    path: 'shop',
    loadChildren: 'app/shop/shop.module#ShopModule'
  },
  {
    path: 'location',
    loadChildren: 'app/location/location.module#LocationModule'
  },
  {
    path: 'cart',
    component: ShoppingCartComponent
  }
];
```
{% endcode-tabs-item %}
{% endcode-tabs %}

```markup
<a [routerLink]="['/shop', 'accessories']">Accessories</a>
```



Okay, but what if I say that you can do the same thing in a more convenient and manageable manner? 🤔 

Let's get a look 🔭 

{% code-tabs %}
{% code-tabs-item title="app.routes.ts" %}
```typescript
export const routes: Routes = [
  {
    path: app.home.path,
    loadChildren: appRoute.home.lazyPath
  },
  {
    path: app.shop.path,
    loadChildren: appRoute.shop.lazyPath
  },
  {
    path: app.location.path,
    loadChildren: appRoute.location.lazyPath
  },
  {
    path: app.cart.path,
    component: ShoppingCartComponent
  }
];
```
{% endcode-tabs-item %}
{% endcode-tabs %}

```markup
<a [routerLink]="shop.accessories.path">Accessories</a>
```

## Aftertaste

You may ask: “_Okay, Max, but it all looks strange, it's easy to get confused in these variables, and you still declare so-called magic strings somewhere. So where is the real impact?_ " 😕🤨 

And my answer is: "_Do not hurry!_ " 😉

Benefits are worth it. Be sure to read the next section 👀 

