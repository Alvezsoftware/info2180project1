{"filter":false,"title":"Script2.js","tooltip":"/Script2.js","undoManager":{"mark":0,"position":0,"stack":[[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":0},"end":{"row":0,"column":11}},"text":"var bob = {"},{"action":"insertText","range":{"start":{"row":0,"column":11},"end":{"row":1,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":1,"column":0},"end":{"row":51,"column":0}},"lines":["    firstName: \"Bob\",","    lastName: \"Jones\",","    phoneNumber: \"(650) 777-7777\",","    email: \"bob.jones@example.com\"","};","","var mary = {","    firstName: \"Mary\",","    lastName: \"Johnson\",","    phoneNumber: \"(650) 888-8888\",","    email: \"mary.johnson@example.com\"","};","","var contacts = [bob, mary];","","function printPerson(person) {","    console.log(person.firstName + \" \" + person.lastName);","}","","function list() {","\tvar contactsLength = contacts.length;","\tfor (var i = 0; i < contactsLength; i++) {","\t\tprintPerson(contacts[i]);","\t}","}","","/*Create a search function","then call it passing \"Jones\"*/","","var search = function (lastName){","    var contactsLength = contacts.length;","for (var i = 0; i < contacts.length; i++) {","\t\tif(contacts[i].lastName === lastName){","\t\t    \tprintPerson(contacts[i]);","\t\t    }","\t};","    }","\tsearch(\"jones\");","\t","var add = function (firstName, lastName, email, phoneNumber){","    contacts[contacts.length] = {","    firstName: firstName,","    lastName: lastName,","    phoneNumber: phoneNumber,","    email: email","    }","    };","   ","    add(\"Dan\",\"Morr\",\"ff@live.com\",\"530234\");","list();"]}]}]]},"ace":{"folds":[],"scrolltop":6,"scrollleft":0,"selection":{"start":{"row":27,"column":26},"end":{"row":27,"column":26},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1413580837099,"hash":"d1cba0a865731f47598d614d06e735379a1d18d5"}