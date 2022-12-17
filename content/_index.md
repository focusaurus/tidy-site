+++
title = "Home"
+++
<section class="grid">

# Welcome to Tidy Site

This site serves to demonstrate how I set up a fairly minimal static website that ticks all of my back-end engineer boxes. The source code is over at [github.com/focusaurus/tidy-site](https://github.com/focusaurus/tidy-site).

## Tech Stack

* [zola](https://getzola.org) static site generator
  * Uses nice [tera](https://tera.netlify.app/) templates
    * I like the inheritence and block override mechanism
    * Useful filters
  * shortcodes a la WordPress are great
  * It's in rust and I'm biased toward rust
* [SCSS](https://sass-lang.com/) for CSS nesting and processing
* [markdown](https://www.markdownguide.org/) for simple text content markup

## Inspiration

While I admire the minimalism, I can't quite bring myself to go full [Dan Luu mode](https://danluu.com/) with almost no CSS. I love the look of [Kind Engineering](https://kind.engineering), which I was hoping to study and copy, but when I viewed source it seems to be a squarespace template full of limitless complexity, breakpoints galore, <code>!important</code>, and generated code so I'll take the design and leave the implementation.

## Semantic HTML (mostly)

A lot of the "tidiness" that I seek has to do with strong limits to the amount of non-semantic HTML I need to sprinkle into my markup. I think SCSS mixins help a lot with this so I generally try to just add a single semantic class in my HTML and then apply a mixin to that. So for example, I might have <code>&lt;section class=&quot;intro&quot;&gt;</code> and then in the SCSS I'll link that to it's style with <code>section.intro { @include centered-column; }</code>

## Keeping Colors Tidy

I put all my custom brand colors in as SASS variables, import them where needed with <code>@import "colors";</code> and that keeps things tidy and easy to tweak. I prefix the variables with <code>$brand-</code> for easy grepping to find all use of custom colors.

Code: {{ github(path="sass/_colors.scss") }}

## Mobile-first and Responsive

### Small screens

* design scales down to iPhone SE 375px width 
* No horizontal scrolling
* Handles large images, videos, etc
* Fonts are sized for readability without extra zooming for most folks

### Large Desktop screens

* looks fine on large desktop screens
* maximum content width applied so paragraphs stay readable
* content can easily be centered so extra space is even on left and right sides
  
## Layout Basics

The file {{ github(path="sass/_core-layout.scss") }} handles our basic solution. There's a SCSS mixin called `centered-column` which uses CSS grid and a clever `max-width` to make our opt-in center column work properly.

## Font Sizes

Over many years, web designers have blogged so many terrible font size hacks full of magic numbers, weird scaling, etc. I looked at some more modern approaches based on `vw` units and CSS `calc`, but there were still just too many shenanigans going on.

Happily though, I think the answer might be as simple as: 18px for body and larger in small increments for headings.

Someone prove me wrong or something. I can read this site fine on phones, tablets, and desktops in portrait and landscape mode and there's no deep magic going on with font sizes.

## Full Width Content

</section>

<section style="background-color: #ddd; padding: 1em;">
We do allow for full-width content which is techincally the default since our <code>centered-column</code> mixin is opt-in. This paragraph demonstrates this since the light grey background color goes full width. I find this useful for full-page background images, some other types of image galleries and so on.
</section>

<section class="grid">

## Layout for images

We set `max-width: 100%` on the multimedia tags like `img`, `svg`, and `canvas` and that prevents them from overflowing and making a horizontal scrollbar on small screens. 

Here's a 1200px placekitten to demonstrate.

![](https://placekitten.com/1200)

## Layout for videos

Youtube videos are trickier as they embed with the `iframe` tag. I [found a solution in this article](https://techstacker.com/how-to-responsive-youtube-videos/) to make them responsive. It's hacky since it involves some empty element nonsense, but it works.

The linked article will explain the HTML and CSS necessary to get this to work. Wrapping our section in our <code>&lt;section class="grid"&gt;</code> tag applies the max width.

One thing that I love from zola is it's [shortcodes](https://www.getzola.org/documentation/content/shortcodes/) feature (borrowed from WordPress), so to embed a video in a markdown file, I just need <code>youtube(id="FEnRpy9Xfes")</code> inside a tera template snippet. So tidy! This also comes in completely essential in terms of DRY when you have dozens of these sprinkled across your site's content and you decide you want to tweak the HTML markup for them. Life saver.

Code: {{ github(path="tempates/shortcodes/youtube.html") }} and  {{ github(path="sass/_videos.scss") }}

{{ youtube(id="FEnRpy9Xfes") }}

## Image Float Option

<div class="demo-float">
<img src="https://placekitten.com/320/350">
<p>Just for funzies, we can do a responsive image float, too. This starts mobile-first as single column, but on bigger screens the image floats on the right. SASS has a nice way to parameterize this mixin for left and right floats. I should also note that this is the <em>ONLY</em> use of CSS media query breakpoints I use on this site.</p>
</div>

Code: {{ github(path="sass/_core-layout.scss") }} the float mixin.

## Mobile Navigation Menu

I kind of hate all mobile navigation and hamburger menus, but couldn't commit to making the hamburger menu just anchor link to the footer navigation and be done with it, so I implemented one. There's not too much special here you won't find clicking around a web search, but I do want to point out that &amp;equiv; and &amp;times; are great HTML escaped elements to use for your open/close buttons and there's no need for images, SVGs, or bizarre creation of hamburger menu out of div tags and CSS (which I definitely saw in some of the more terrible samples out there).

I share content for both the nav popup menu and the site footer with a zola/terra partial in {{ github(path="templates/partials/nav.html") }}. There's some fancy <code>a + a</code> CSS selector stuff to automatically separate the footer links with a vertical bar which is pretty neat.

Code: {{ github(path="sass/_navigation.scss") }}

## Responsive Photo Grid Challenge

So far our content has been pretty table-stakes stuff you must address to have a realistic useful web site. For a specific site I was working on, I had a photo grid challenge that I was able to address with CSS Grid and <code>auto-fill</code>, so I'll show it off here just because it's kind of neat. It makes a seamless grid with as many columns/rows as the screen will fit. I don't fully understand all the limitations, but I made all the images 4:3 aspect ratio, but not all identical size, and I used <code>place-items: stretch</code> and it seems to work.
</section>

<section class="gallery">
<img src="https://placekitten.com/400/300">
<img src="https://placekitten.com/800/600">
<img src="https://placekitten.com/400/300">
<img src="https://placekitten.com/600/450">
<img src="https://placekitten.com/800/600">
<img src="https://placekitten.com/600/450">
<img src="https://placekitten.com/400/300">
<img src="https://placekitten.com/600/450">
<img src="https://placekitten.com/800/600">
</section>

Code: {{ github(path="sass/_images.scss") }}

<section class="grid">

## Known Issues

* Everywhere you see <code>unquote()</code> in the SCSS, disregard it. It's working around [this bug in zola/libsass](https://github.com/getzola/zola/issues/2022). It'll probably be a long time, but eventually I expect zola to switch to bundling a rust-based SASS implementation and hopefully this issue gets resolved.
</section>
