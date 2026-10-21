# Icon grid

Boxes with an icon and its name, like Bootstrap Icons. It is the grid on this site's [Icons](/icons) page. As many as fit go in each row.

## Example

```html
<ul class="gm-icon-grid">
  <li><a class="gm-icon-tile" href="#"><span class="gm-icon-tile__box"><i class="gmi gmi-heart" aria-hidden="true"></i></span><span class="gm-icon-tile__name">heart</span></a></li>
  <li><a class="gm-icon-tile" href="#"><span class="gm-icon-tile__box"><i class="gmi gmi-star" aria-hidden="true"></i></span><span class="gm-icon-tile__name">star</span></a></li>
  <li><a class="gm-icon-tile" href="#"><span class="gm-icon-tile__box"><i class="gmi gmi-book" aria-hidden="true"></i></span><span class="gm-icon-tile__name">book</span></a></li>
  <li><a class="gm-icon-tile" href="#"><span class="gm-icon-tile__box"><i class="gmi gmi-github" aria-hidden="true"></i></span><span class="gm-icon-tile__name">github</span></a></li>
</ul>
```

Long names break onto the next line instead of spilling out.

## Accessibility

- The icon is decorative (`aria-hidden="true"`): the link is named by the text under it.
