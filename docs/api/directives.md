# Directives

## Setup

Before we start using routeshub directives, we need to import module to get access.

#### **Import example:**

```typescript
...
import { NavigationModule } from 'routeshub';
...

@NgModule({
  imports: [
    ...
    NavigationModule
  ],
  ...
})
export class AppModule {
}
```

## Navigation

Routeshub provides directive `navLink` for navigation reasons. It extends by `routerLink` and doing the same as `routerLink` . But if you replace `routerLink` with `navLink`, then and want to pass parameters, don't forget to use `navParams` . `navLink` manages dynamic paths \(parameters\) with additional attribute `navParams` . 

#### **Usage example:**

```markup
<li [navLink]="locationSlice.map.state">Map</li>

<li [navLink]="locationSlice.search">Search</li>

<li [navLink]="locationSlice.profile.state" 
    [navParams]="{id: USER_ID}">
    Profile
</li>
```

As you could see, we can pass in the `navLink` route's state or it also possible to omit the state, and then `navLink` itself will still handle the link.

Summing up, `navLink` works in the same way as `routerLink`. It consumes the string or array of strings. But first and foremost, this directive was created for navigation through route states and support dynamic parameters via states.



## Active Link

Because we replaced routerLink with navLink, then we need another directive to manage active links. Routeshub has `navLinkActive` for these reasons

#### **Usage example:**

```markup
<nav class="menu">
  <a [navLink]="about.root" navLinkActive="about about-active">About</a>
  <a [navLink]="location.map" [navLinkActive]="['location', 'map-active']">
    Map
  </a>
</nav>
```

 Works as `routerLinkActive` as well. This directive with square brackets takes array of css classes. Without brackets it takes a string with spaces.

## Quick Recap

* Import **NavigationModule**
* **navLink** replaces **routerLink**
* **navLink** with ****square ****brackets **\[ \]** supports 2 types possible values: _SLICE.ROUTE / SLICE.ROUTE.STATE._ It was implemented for more human-readable records when you can omit the _state_ property 
* **navLink** with curly **{{ }}** brackets doesn't allow to pass _SLICE.ROUTE,_ it supports only string literals or string arrays -- _SLICE.ROUTE.STATE_
* **navParams** takes parameters as object of param-value.
* **navLinkActive** manages active links. Takes array of strings in the case when **navLinkActive** in square **\[ \]** brackets. Takes a string with spaces without brackets.



