export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.82119ccb.js","imports":["_app/immutable/entry/start.82119ccb.js","_app/immutable/chunks/index.bd629e22.js","_app/immutable/chunks/singletons.54c2f37c.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.9eeb0772.js","imports":["_app/immutable/entry/app.9eeb0772.js","_app/immutable/chunks/index.bd629e22.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/lessons",
				pattern: /^\/lessons\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
