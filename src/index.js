
'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = "amzn1.ask.skill.80a891d4-1cf4-4c25-be0f-d35f21c5f489";

var SKILL_NAME = "Game On Track";
var GET_FACT_MESSAGE = "Fact: ";
var HELP_MESSAGE = "For a new fact, you can say, 'Tell me something!' If you wish to end Game On Track, say 'exit!'";
var HELP_REPROMPT = "What can I help you with?";
var STOP_MESSAGE = "It's a bummer you have to go, but let's play again soon!";

/**/

var data = [

    "Christopher George Latore Wallace earned the notorious nickname 'Big', as an overweight ten year old.",
    "Unbeknownst to his mother, Big began dealing drugs at the age of twelve.",
    "In 1991, Wallace was nineteen when he was arrested in Raleigh, North Carolina for dealing crack cocaine.",
    "Following his arrest in 1991, Notorious B.I.G. pled guilty to possession of cocaine and marijuana with intent to sell.",
    "Big's entrepreneurial venture ultimately resulted in a suspended sentence with nine months' jail time.",
    "Wallace first used the moniker, 'Biggie Smalls', on the demo he made following his release.",
    "The demo that ultimately led to his recording contract with Uptown Records was composed following his time in the Carolinas.",
    "The track entitled 'Ten Crack Commandments,' is featured on Big's posthumously released double album, 'Life After Death'.",
    "The track 'Ten Crack Commandments' contains a sample of 'Valantra' by Les McCann.",
    "Among others, Public Enemy's hit, 'Shut 'Em Down' is sampled on this track.",
    "There are, in fact, ten crack commandments.",
    "The 'Ten Crack Commandments' are step-by-step instructions Wallace curated in effort to maximize the successes of tradesmen while fending off ill-adjusted hair pieces.",
    "It should be impossible for anyone to discover the amount of money you have in your possession.",
    "Cheddar breeds jealousy.",
    "If an inebriated associate becomes belligerant, you will likely find yourself in an extremely hostile situation.",
    "Discussing your schedule or disclosing information pertaining to your forthcoming whereabouts will put you in grave danger.",
    "Troublemakers and rapscallions frequently make advances in silence and violence.",
    "No one can be trusted; not even your own mother.",
    "Your mother will hide in your bushes and lure you into a compromising predicament.",
    "There should never be recreational use of your own merchandise.",
    "No transactions should be made within an eight mile radius of your residence.",
    "No matter the product or its value, if a potential buyer lives nearby, you must bid them farewell.",
    "A crackhead will not adhere to financial obligations.",
    "Incoherent drug addicts seldom have hearts of gold.",
    "Rule number seven: keep your family and your business completely separated.",
    "Felines that nip at your weapons can leap from one location to another with great ease.",
    "If fellow business associates believe they have been double-crossed, both your kitchen and your livelihood will be in disarray.",
    "Cooperation with law enforcement will be done at your own peril.",
    "Consignment is a business strictly for experienced individuals of a mature age.",
    "Consignment is not a strategy recommended for ninth graders or first year university students.",
    "There is controversy between like-minded gentlemen in regards to brick and chip ownership.",
    "Significant sums of money should never be carried on your person.",
    "Transpoorting commodified goods should never be done willy nilly.",
    "Rule number one: never let no one know: how much dough you hold.",
    "Rule number two: never let 'em know your next move.",
    "Rule number three: never trust nobody.",
    "Rule number four: you've heard before: never fly to the sky on your own supply.",
    "Rule number five: never exchange rocks for profit where you rest at.",
    "Rule number eight: never keep no weight on you.",
    "Rule number nine: unless it involves a tote bag, there should be no reason to fraternize with law enforcement.",

];

//=====================================================
//Editing anything below this line might break your skill.
//======================================================

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewFactIntent');
    },
    'GetNewFactIntent': function () {
        var factArr = data;
        var factIndex = Math.floor(Math.random() * factArr.length);
        var randomFact = factArr[factIndex];
        var speechOutput = GET_FACT_MESSAGE + randomFact;
        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = HELP_MESSAGE;
        var reprompt = HELP_REPROMPT;
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    }
};
