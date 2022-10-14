# Navlink

consider data as `const data = ["home", "products", "contact", "about"];`

## to style the navlink

```
 pathname ===`/${el}` || (pathname === "/" && el === "home") ? "border-b-2" : ""
```

## link home route as '/' instead of '/home'

```

to={el === "home" ? "" : el}
```

## sometimes height requires in sticky element

```
style={{ position: "sticky", top: "0px" , height: '100vh'}}
```

> sticky may rarely on grid items
