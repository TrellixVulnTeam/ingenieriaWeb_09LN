const qs = require("querystring");
const http = require("https");

let texto="welcome, how are you?";

const options = {
	"method": "POST",
	"hostname": "google-translate1.p.rapidapi.com",
	"port": null,
	"path": "/language/translate/v2",
	"headers": {
		"content-type": "application/x-www-form-urlencoded",
		"accept-encoding": "application/gzip",
		"x-rapidapi-key": "5794f1a6fcmshcced48b6e9cb43ap18fadbjsnf7e959d5bee8",
		"x-rapidapi-host": "google-translate1.p.rapidapi.com",
		"useQueryString": true
	}
};

const req = http.request(options, function (res:any) {
	const chunks:any = [];

	res.on("data", function (chunk:any) {
		chunks.push(chunk);
	});

	res.on("end", function () {
		const body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.write(qs.stringify({q: texto, target: 'es', source: 'en'}));
req.end();