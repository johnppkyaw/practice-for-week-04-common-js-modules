const {message1:msg1, message2:msg2, message3:msg3} = require('./messages');
console.log(msg1);
const sayHelloTo = require('./send-messages/say-hello-to');
const giveMessageToMrsPotato = require('./send-messages/give-message-to-mrs-potato')
// Your code here

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

sayHelloTo("Mr. Potato");
giveMessageToMrsPotato(msg1);
giveMessageToMrsPotato(msg2);
giveMessageToMrsPotato(msg3);
