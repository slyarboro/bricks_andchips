'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = "amzn1.ask.skill.80a891d4-1cf4-4c25-be0f-d35f21c5f489";

var SKILL_NAME = "Bricks and Chips";
var GET_FACT_MESSAGE = "Here's your fact: ";
var HELP_MESSAGE = "You can say hit me with it, or, you can say exit... What can I help you with?";
var HELP_REPROMPT = "What can I help you with?";
var STOP_MESSAGE = "Gotta go gotta go. More pies to bake up. Word up!";

/**/

var data = [

    "Christopher George Latore Wallace earned the notorious nickname, 'Big' as an overweight ten year old.",
    "Unbeknownst to his mother, Big began dealing drugs at age twelve.",
    "In 1991, Wallace was nineteen when he was arrested for dealing crack cocaine in Raleigh, North Carolina.",
    "Following his arrest in 1991, Notorious B.I.G. plead guilty to posession of cocaine and marijuana with intent to sell.",
    "Big's entrepreneurship and crack ventures ultimately resulted in a ten year suspended sentence with nine months of jail time and subsequent probation.",
    "Wallace first used the moniker 'Biggie Smalls' on a demo he made following his release from a North Carolina jail.",
    "It is the demo Biggie made following his jail sentence in North Carolina that ultimately led to his recording contract with Uptown Records.",
    "Biggie Smalls' track 'Ten Crack Commandments' is featured on 'Life After Death', the artist's posthumously released double album.",
    "The song 'Ten Crack Commandments' contains a sample of 'Valantra' by Les McCann, and a sample of 'Shut 'Em Down' by Public Enemy.",
    "There are, in fact, ten crack commandments.",
    "Spending the greater part of his life in the quote unquote, game, Wallace became an animal.",
    "'Ten Crack Commandments' are step-by-step instructions Wallace curated in effort to maximize successes of tradesmen and fend off ill-adjusted hair pieces.",
    "It should be impossible for anyone to discover the amount of money you have in your posession.",
    "Cheddar breeds jealousy.",
    "If an inebriated associate becomes belligernet, you will likely find yourself in an extremely hostile situation.",
    "Discussing your schedule or disclosing information that may pertain to your forthcoming whereabouts will put you in grave danger.",
    "Troublemakers and rapscallions frequently make advances in silence and violence.",
    "No one can be trusted.",
    "Your mother will disguise herself, hide in your bushes, and lure you into a rather compromising predicament.",
    "There should be no recreational use of the merchandise you administer.",
    "No transactions should be made within an eight mile radius of your residence.",
    "No matter the product or its value, if a potential buyer lives within walking distance of your home, you must bid them farewell.",
    "A crackhead will not adhere to financial obligations.",
    "Incoherent drug addicts seldom have hearts of gold.",
    "Rule number seven, keep your family and your business completely separated.",
    "Felines that nip at your weapons can leap from one location to another with great ease.",
    "If fellow business associates are under the impression they have been double-crossed, both your kitchen and your livelihood will soon be in disarray.",
    "Cooperation with law enforcemnet will be done at your own peril.",
    "Consignment is a business strategy strictly for live men, and not for ninth graders or first year university students.",
    "Mad clips have been squeezed hitherto at like-minded gentlemen in order to acquire their bricks and chips.",
    "Significant sums of money or commodified goods should never be carried on your person.",
    "Rule number uno, never let no one know how much dough you hold.",
    "Rule number two, never let 'em know your next move.",
    "Rule number three, never trust nobody.",
    "Rule number four you've heard before, never get high on your own supply.",
    "Rule number five, never sell no crack where you rest at.",
    "Rule number eight, never keep no weight on you.",
    "Rule number nine, if you ain't getting bagged, stay away from police.",

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
