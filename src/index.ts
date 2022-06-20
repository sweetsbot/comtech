import fetch from 'node-fetch';
import fs from 'fs';
import winston from 'winston';

const logger = winston.createLogger({
	level: "info",
	format: winston.format.json(),
	defaultMeta: {service: "user-service"},
	transports: [
		new winston.transports.Console({
			format: winston.format.combine(
				winston.format.colorize(),
				winston.format.simple()
			),
		})
	]
})


async function fetchUrl(url: string) {
	return fetch(url).then(r => r.text());
}

(async() => {
	const response = await fetchUrl("https://www.google.com");
	logger.info({
		message: "recieved output",
		documentHead: response.slice(0, 1024)
	});
	process.exit(0);
})();