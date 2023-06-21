const Sentiment = require("sentiment");

class SentimentalAnalysis {
    
    static verifySentiment(data) {
        //Verifica se existe algum conteúdo no data.
        console.log("description", data);
        console.log();
        if (!data.trim()) return;
        let filterData = data.replace(/[^a-zA-Z ]/gi, '');
        
        const sentimentInstance = new Sentiment();
        const analysis = sentimentInstance.analyze(filterData);
        console.log("analysis", analysis);
        console.log();
        const sentiment = {};
        //TODO Melhorar lógica de sentimento, fazer testes para saber se parece com a realidade
        sentiment.positive = analysis?.positive?.length;
        sentiment.negative = analysis?.negative?.length;
        sentiment.neutral = analysis?.words?.length - sentiment?.positive - sentiment?.negative;
        sentiment.sentiment = analysis?.score > 5 ? 'positive' : analysis?.score < 0 ? 'negative' : 'neutral';
        
        return sentiment;
    }

}

module.exports = SentimentalAnalysis;