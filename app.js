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
    const completion = await openai.createCompletion({
        model: "text-davinci-003",
         prompt: `Can you provide a link to a pair of shoes from Boden that would go well with this dress - https://www.boden.co.uk/en-gb/ruched-bodice-midi-dress-ivory-wild-bluebell/sty-d0298-ivo?cat=C1_S2_G4`,
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    });
res.end(completion.data.choices[0].text);
});

server.listen(3333);
