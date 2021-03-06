/* eslint-env browser */

// Helper
const dom = {
	select: document.querySelector.bind(document),
	selectAll: document.querySelectorAll.bind(document)
};

const injectScript = (source, callback) => {
	const script = document.createElement('script');
	script.src = source;
	script.addEventListener('load', callback);
	document.head.appendChild(script);
};

// Enable again if I put more stuff on the homepage.
// {
// 	function hideScrollHint() {
// 		if (window.scrollY > 100) {
// 			document.removeEventListener('scroll', hideScrollHint);
// 			dom.select('#scroll-hint').classList.add('hidden');
// 		}
// 	}
//
// 	document.addEventListener('scroll', hideScrollHint, {passive: true});
// }
