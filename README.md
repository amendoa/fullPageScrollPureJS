### Last Version
1.0.1

### Demo
http://almeida-matheus.github.io/fullPageScrollPureJS

### Usage

Download last version :
[fullpage.zip](https://github.com/almeida-matheus/fullPageScrollPureJS/releases/download/1.0.1/full-page-1.0.1.zip) or [fullpage.tar.gz](https://github.com/almeida-matheus/fullPageScrollPureJS/releases/download/1.0.1/full-page-1.0.1.tar.gz)

#### Import Style and Javascript on your page
```html
<link rel="stylesheet" type="text/css" href="//stylesheet/full-page-scroll.min.css">
<script src="//javascript/full-page-scroll.min.js"></script>
```

#### Construct sections structure on page body
```html
<div id="main" class="scroll-container">
	<section> Section 1</section>
	<section> Section 2</section>
	<section> Section 3</section>
</div>
```

### And start Script
```html
<script type="text/javascript">
	new fullScroll({
		mainElement: 'main',
		displayDots: true,
		dotsPosition: 'left',
		animateTime: 0.7,
		animateFunction: 'ease'
	});
</script>
```
### Simple Example
```html
<html>
	<head> 
		<title> Simple Example </title>
		<link rel="stylesheet" type="text/css" href="//stylesheet/full-page-scroll.min.css">
	</head>
	<body>
		<div id="main" class="scroll-container">
			<section style="background-color:#DCADAD"> Section 1</section>
			<section style="background-color:#555594"> Section 2</section>
			<section style="background-color:#5992AD"> Section 3</section>
		</div>
		<script src="//javascript/full-page-scroll.min.js"></script>
		<script type="text/javascript">
			new fullScroll({
				mainElement: 'main',
				displayDots: true,
				dotsPosition: 'left',
				animateTime: 0.7,
				animateFunction: 'ease'
			});
		</script>
	</body>
</html>
```

### Done, be happy :D :D :D :D
