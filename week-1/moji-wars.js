import translator from 'emoji-translator';

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    var redacted = req.query.redacted;
    context.log(redacted)
    

    const vocabulary = { '🕵🏽': 'John', '🕵🏻‍♀️': 'Nora', '🗻': 'Waverly Valley Place' };
    const translate = translator(vocabulary)
    const string = translate(redacted)

    
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: string
    };
}