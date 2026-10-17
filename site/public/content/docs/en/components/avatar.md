# Avatar

The profile picture box, as a circle or a square with rounded corners. Without a photo, it shows the initials on a pastel or a silhouette.

## Shapes

Circle (`.gm-avatar`) or rounded square (`.gm-avatar--square`). The photo is cropped to fill the box without stretching.

```html
<div style="display: flex; flex-wrap: wrap; align-items: center; gap: 16px">
  <span class="gm-avatar gm-avatar--lg"><img src="media/perfil-1.jpg" alt="Lucía Martín"></span>
  <span class="gm-avatar gm-avatar--lg gm-avatar--square"><img src="media/perfil-2.jpg" alt="Pablo Ruiz"></span>
</div>
```

## Sizes

`.gm-avatar--sm` (2 rem), default (3 rem), `.gm-avatar--lg` (5 rem) and `.gm-avatar--xl` (8 rem). The rounding and the letters grow in proportion.

```html
<div style="display: flex; flex-wrap: wrap; align-items: center; gap: 16px">
  <span class="gm-avatar gm-avatar--sm"><img src="media/perfil-3.jpg" alt="Ana López"></span>
  <span class="gm-avatar"><img src="media/perfil-3.jpg" alt="Ana López"></span>
  <span class="gm-avatar gm-avatar--lg"><img src="media/perfil-3.jpg" alt="Ana López"></span>
  <span class="gm-avatar gm-avatar--xl"><img src="media/perfil-3.jpg" alt="Ana López"></span>
</div>
```

## Without a photo

With initials: add a palette color (`.gm-theme-sky`, `.gm-theme-mint`…) and give the name with `role="img"` and `aria-label`, because initials alone are not clear. Without a name, a silhouette.

```html
<div style="display: flex; flex-wrap: wrap; align-items: center; gap: 16px">
  <span class="gm-avatar gm-avatar--lg gm-theme-sky" role="img" aria-label="Sara Paez">SP</span>
  <span class="gm-avatar gm-avatar--lg gm-avatar--square gm-theme-lavender" role="img" aria-label="Marta Gil">MG</span>
  <span class="gm-avatar gm-avatar--lg gm-theme-mint" role="img" aria-label="Diego Sanz">DS</span>
  <span class="gm-avatar gm-avatar--lg" role="img" aria-label="No profile picture"><i class="gmi gmi-person-fill" aria-hidden="true"></i></span>
</div>
```

## Changing the photo

On the profile page, a button with the pencil on top of the photo. Use it with the large sizes (`--lg` and `--xl`): the button is 44 px.

```html
<span class="gm-avatar gm-avatar--xl">
  <img src="media/perfil-4.jpg" alt="Your profile picture">
  <button type="button" class="gm-avatar__edit" aria-label="Change profile picture"><i class="gmi gmi-pencil-fill" aria-hidden="true"></i></button>
</span>
```

## Group

Several stacked photos, for example to show who is taking part. The last one can say how many more there are.

```html
<div class="gm-avatar-group" role="group" aria-label="Lucía, Pablo, Ana and 5 more people take part">
  <span class="gm-avatar"><img src="media/perfil-1.jpg" alt=""></span>
  <span class="gm-avatar"><img src="media/perfil-2.jpg" alt=""></span>
  <span class="gm-avatar"><img src="media/perfil-3.jpg" alt=""></span>
  <span class="gm-avatar" aria-hidden="true">+5</span>
</div>
```

## Accessibility

- A photo with the name next to it (in a list of people) is decorative: `alt=""`. On its own, it carries the name: `alt="Lucía Martín"`.
- Initials go with `role="img"` and an `aria-label` with the full name.
- In a group, the group's `aria-label` says who takes part and the photos have `alt=""`.
- Initials are black on the pastel (7.8:1 or more, AAA); without a color, regular text on gray.
- The button to change the photo is 44 px (WCAG 2.5.5) and says what it does.
