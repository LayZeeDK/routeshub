# Functions

## forwardParams

A function that inserts parameters into state of route. Outputs a ready-made dynamic state.

#### Args:

```typescript
/*
* Params interface describes an object which has string key
*/

(
  state: string[],
  params?: Params
)
```

####  Return Type:

```typescript
: string[]
```

#### Use example:

```typescript
const url = forwardParams(userSlice.user.state, { id: 15 };
this.router.navigate(url);

// or

this.router.navigate(forwardParams(userSlice.user.state, { id: 15 })

```

## getHubSlices

A function that returns all declared slices in the application \(hub\)

#### Generic Type:

```typescript
<T = any, U = Slices<T>>
```

#### Args:

```typescript
No args
```

####  Return Type:

```typescript
:  U
```

#### Use example:

```typescript
export interface Hub {
  app: AppNote & AppChildNotes;
  about: AboutNotes;
  bikes: BikeNotes
}

export const hub = getHubSlices<Hub>();
```

## getSlice

A function that returns a slice by identifier \(key or name\)

#### Generic Type:

```typescript
<T = any, C = {}, U = Slice<T, C>>
```

#### Args:

```typescript
(
    arg: string | symbol
)
```

####  Return Type:

```typescript
:  Slice<T, C>
```

#### Use example:

```typescript
const slice = getSlice<AppNotes>(APP_HUB_KEY);
```

