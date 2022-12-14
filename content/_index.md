+++
title = "Home"
+++
<section class="grid">

# Welcome to Tidy Site

This site serves to demonstrate how I set up a fairly minimal static website that ticks all of my back-end engineer boxes.

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

The file "sass/core-layout.scss" handles our basic solution. There's a SCSS mixin called `centered-column` which uses CSS grid and a clever `max-width` to make our opt-in center column work properly.

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

Youtube videos are trickier as them embed with the `iframe` tag. I [found a solution in this article](https://techstacker.com/how-to-responsive-youtube-videos/) to make them responsive. It's hacky since it involves some empty element nonsense, but it works.

The linked article will explain the HTML and CSS necessary to get this to work. Wrapping our section in our <code>&lt;section class="grid"&gt;</code> tag applies the max width.

One thing that I love from zola is it's [shortcodes](https://www.getzola.org/documentation/content/shortcodes/) feature (borrowed from WordPress), so to embed a video in a markdown file, I just need <code>youtube(id="FEnRpy9Xfes")</code> inside a tera template snippet. So tidy! This also comes in completely essential in terms of DRY when you have dozens of these sprinkled across your site's content and you decide you want to tweak the HTML markup for them. Life saver.

{{ youtube(id="FEnRpy9Xfes") }}

## Image Float Option

<div class="demo-float">
<img src="https://placekitten.com/320/350">
<p>Just for funzies, we can do a responsive image float, too. This starts mobile-first as single column, but on bigger screens the image floats on the right. SASS has a nice way to parameterize this mixin for left and right floats.</p>
</div>

## Semantic HTML (mostly)

A lot of the "tidiness" that I seek has to do with strong limits to the amount of non-semantic HTML I need to sprinkle into my markup. I think SCSS mixins help a lot with this so I generally try to just add a single semantic class in my HTML and then apply a mixin to that. So for example, I might have <code>&lt;section class=&quot;intro&quot;&gt;</code> and then in the SCSS I'll link that to it's style with <code>section.intro { @include centered-column; }</code>

## Keeping Colors Tidy

I put all my custom brand colors in <code>colors.scss</code> as SASS variables, import them where needed with <code>@imports "colors";</code> and that keeps things tidy and easy to tweak. I prefix the variables with <code>$brand-</code> for easy grepping to find all use of custom colors.

## Responsive Photo Grid Challenge

So far our content has been pretty table-stakes stuff you must address to have a realistic useful web site. For a specific site I was working on, I had a photo grid challenge that I was able to address with CSS Grid and <code>auto-fill</code>, so I'll show it off here just because it's kind of neat. It makes a seamless grid with as many columns/rows as the screen will fit. I don't fully understand all the limitations, but I made all the images 4:3 aspect ratio, but not all identical size, and I used <code>place-items: stretch</code> and it seems to work.
</section>

<section class="gallery">
<img src="https://placekitten.com/400/300">
<img src="https://placekitten.com/800/600">
<img src="https://placekitten.com/400/300">
<img src="https://placekitten.com/600/450">
<img src="https://placekitten.com/800/600">
<img src="https://placekitten.com/400/300">
<img src="https://placekitten.com/800/600">
<img src="https://placekitten.com/600/450">
<img src="https://placekitten.com/400/300">
</section>
