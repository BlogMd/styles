import { MetadataBlogPost } from '../utils';

export const blogTemplate = (jsonld: MetadataBlogPost, article: string) => `<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>${jsonld.headline} | ${jsonld.publisher.name}</title>
	<script type="application/ld+json">${jsonld}</script>
	<link rel="stylesheet" href="../style.css" />
</head>
<body>
	<header>
		<h1><a href="../">${jsonld.publisher.name}</a></h1>
	</header>
	<main>
		<h1 class="title">${jsonld.headline}</h1>
		<p>${jsonld.datePublished}(更新:${jsonld.dateModified})</p>
		<article>
			${article}
		</article>
	</main>
	<footer>
		<nav>
			<ul>
				<li><a href="../">Home</a></li>
				<li><a href="https://github.com/yuukitoriyama">GitHub</a></li>
				<li><a href="https://twitter.com/CoconMap">Twitter</a></li>
			</ul>
		</nav>
		<small>bicycle.toriyama.dev is maintaied by <a href="${jsonld.author.url}">${jsonld.author.name}</a></small>
	</footer>
</body>
</html>`;