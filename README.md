# @blogmd/styles

Style files for BlogMd([@blogmd/core](https://www.npmjs.com/package/@blogmd/core))

## Usage

```javascript
const BlogMd = require("@blogmd/core").default;
const { Basic } = require("@blogmd/styles");

const [style, template] = Basic.useStyle();

const blogmd = new BlogMd({
	articleDir: "./articles",
	outDir: "./public",
	styleFile: style,
	template: template,
});
blogmd.build();
blogmd.buildIndex();
```
