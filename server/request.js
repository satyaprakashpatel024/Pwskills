// // const http = require('http');

// // const options={
// //     hostName:'fakestoreapi.com',
// //     path:'/products/1',
// //     method:'GET'
// // }

// // const apireq = http.request(options,(apiRes)=>{
// //     apiRes.on('data',(data)=>{
// //         console.log(data.toString());
// //     });
// // });

// // apireq.on('error',()=>{
// //     console.log(e);
// // })

// // apireq.end();

// const http = require("http");

// //API - https://fakestoreapi.com/products/1

// const options = {
// 	hostname: "fakestoreapi.com",

// 	path: "/products/1",

// 	methods: "GET",
// };

// // http.request with two arguments

// const req = http.request(options, (res) => {
// 	res.on("data", (d) => {
// 		process.stdout.write(d); // write data directly to standard output stream
// 	});
// });

// req.on("error", (e) => {
// 	console.error(e);
// });

// req.end();


let http = require("http");

const port = 3005;

const server = http.createServer((req, res) => {
	if (req.url == "/") {
		res.statusCode = 200;
		res.end("<h1> hello local server</h1>");
	} else if (req.url == "/about") {
		res.statusCode = 200;
		res.end("<h1>this is about page</h1>");
	} else if (req.url == "/contact") {
		res.statusCode = 200;
		res.end("<h1>this is contact page</h1>");
	} else if (req.url == "/product") {
		const options = {
			hostname: "fakestoreapi.com",
			path: "/products/1",
			method: "GET",
		};
		const apireq = http.request(options, (apiRes) => {
			apiRes.on("data", (data) => {
				res.write(data.toString());
			});
			apiRes.on("end", () => {
				res.end();
			});
		});
		apireq.on("error", (e) => {
			console.error(e);
		});
		apireq.end();
	} else {
		res.statusCode = 500;
		res.end("<h1>page not found.</h1>");
	}
});

server.listen(port, () => {
	console.log(`server is running at http://localhost:${port}`);
});
