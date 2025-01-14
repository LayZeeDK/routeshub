# Interfaces

| Title | Description |
| :--- | :--- |
| [Root](interfaces.md#root) | Inserts 'root' route into the note |
| [Note](interfaces.md#note) | Describes a route note |
| [Structure](interfaces.md#structure) | Describes an enhanced route |
| [Slice](interfaces.md#slice) | Describes a processed routes |
| [Slices](interfaces.md#slices) | Describes a bunch of slices |
| [PrivateHubKey](interfaces.md#privatehubkey) | Describes additional \(optional\) key prop |

## [Root](interfaces.md#root)

| Keys | Type | Optional |
| :--- | :--- | :--- |
| root | RooNote \(internal\) | + |

Declares a type which describes default`root` route

#### **Usage example:**

```typescript
export interface AboutNotes extends Root {
    person: Note;
}

// or if there is only one root path
export type AboutNotes = Root;
```

##  [Note](interfaces.md#note)

has an optional children generic type &lt;C&gt;

| Keys | Type | Optional |
| :--- | :--- | :--- |
| path | string |  |
| children | [Notes](interfaces.md#notes)&lt;C&gt; | + |
| name | string | + |

#### **Use example:**

```typescript
export interface AppNotes {
    root: Note<ChildNotes>
    location: Note;
};
```

## [Slice](interfaces.md#slice)

has generic type which contains routes type _R_ and an optional children type _C_

| Keys | Type | Optional |
| :--- | :--- | :--- |
| key in keyof \(R & C\) | Structure & \(PrivateHubKey \| any\) |  |

#### **Usage example:**

```typescript
export const appSlice: Slice<AppNotes, AppChildNotes> = 
    createRoot<AppNotes, AppChildNotes>(routes, APP_HUB_KEY);
```

##  [Slices](interfaces.md#slices)

has a generic routes type R

| Keys | Type | Optional |
| :--- | :--- | :--- |
| key in keyof R | [Slice](interfaces.md#slice)&lt;R\[key\]&gt; |  |

#### **Usage example:**

```typescript
export interface Hub {
  app: AppNotes & AppChildNotes;
  about: AboutNotes;
}

export const hub: Slices<Hub> = getHubSlices<Hub>();
```

##  [PrivateHubKey](interfaces.md#privatehubkey)

extends interfaces by private key property

| Keys | Type | Optional |
| :--- | :--- | :--- |
| \[PRIVATE\_HUB\_KEY\]  | string \| symbol | + |

#### **Usage example:**

```typescript
export interface Hub {
  app: AppNotes & AppChildNotes;
  about: AboutNotes;
}

export const hub: Slices<Hub> = getHubSlices<Hub>();
```

## DefaultRouteName

provides opportunity to change default route names for some paths

| Keys | Type | Optional |
| :--- | :--- | :--- |
| root | string | + |
| wildcard | string | + |

#### **Usage example:**

```typescript
export const appSlice = createRoot(
    routes, 
    {
        root: 'home',
        wildcard: 'notFound'
    }
);

```

