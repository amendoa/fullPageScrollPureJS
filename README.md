# Fullpage Scrolling with Vanilla JavaScript

### Demo :earth_americas:

https://fullpagescrollpurejs.surge.sh/

### Usage :wrench:

Download last version :
[fullpage.zip](https://github.com/almeida-matheus/fullPageScrollPureJS/releases/download/1.0.2/full-page-1.0.2.zip) or [fullpage.tar.gz](https://github.com/almeida-matheus/fullPageScrollPureJS/releases/download/1.0.2/full-page-1.0.2.tar.xz)

#### Import css and javascript on your main html file

```html
<link
  rel="stylesheet"
  type="text/css"
  href="//stylesheet/full-page-scroll.min.css"
/>
<script src="//javascript/full-page-scroll.min.js"></script>
```

#### Use html sections to structure your fullpage flow

```html
<div id="main" class="scroll-container">
  <section>Section 1</section>
  <section>Section 2</section>
  <section>Section 3</section>
</div>
```

#### Call init method with configuration object

```html
<script type="text/javascript">
  new fullScroll({
    mainElement: "main",
    displayDots: true,
    dotsPosition: "left",
    animateTime: 0.7,
    animateFunction: "ease",
  });
</script>
```

### Full Example :dog:

```html
<html>
  <head>
    <title>Simple Example</title>
    <link
      rel="stylesheet"
      type="text/css"
      href="//stylesheet/full-page-scroll.min.css"
    />
  </head>
  <body>
    <div id="main" class="scroll-container">
      <section style="background-color:#DCADAD">Section 1</section>
      <section style="background-color:#555594">Section 2</section>
      <section style="background-color:#5992AD">Section 3</section>
    </div>
    <script src="//javascript/full-page-scroll.min.js"></script>
    <script type="text/javascript">
      new fullScroll({
        mainElement: "main",
        displayDots: true,
        dotsPosition: "left",
        animateTime: 0.7,
        animateFunction: "ease",
      });
    </script>
  </body>
</html>
```

#### Props

| Name            | Desc                              | Example |
| --------------- | --------------------------------- | ------- |
| mainElement     | container id                      | main    |
| displayDots     | display dots navigation           | true    |
| dotsPosition    | dots navigation position          | "right" |
| animateTime     | time to complete scroll animation | 0.7     |
| animateFunction | css transition function           | "ease"  |

### Commands

| Name         | Desc                     |
| ------------ | ------------------------ |
| yarn install | install dependencies     |
| gulp         | start development server |
| gulp build   | create production build  |

Made with :heart:
