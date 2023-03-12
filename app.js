const http = require('http');

// const axios = require('axios/dist/browser/axios.cjs'); // browser commonJS bundle (ES2017)

const { Configuration, OpenAIApi } = require("openai");


const configuration = new Configuration({
    organization: "org-KwA2ubz2GVX0ToNz0q12F1IL",
    apiKey: process.env.OPENAI_API_KEY,
});


const server = http.createServer();
server.on('request', async (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    const openai = new OpenAIApi(configuration);
    const response = await openai.createCompletion({
        model: "text-davinci-003",
         prompt: "",
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    });
res.end(response);
});

server.listen();
