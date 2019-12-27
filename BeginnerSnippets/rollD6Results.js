var rollD6 = function() {
    return Math.ceil(Math.random() * 6)
}

switch (rollD6()) {
    case 6:
		console.log ('A 6 wins the round!');
		break;
    case 5:
		console.log ('A 5 nearly guarantees your win');
		break;
    case 4: 
		console.log ('4 is above 50%');
		break;
    case 3:
		console.log ('3 is good but not great');
		break;
    case 2: 
		console.log ('At least a 2 beats a 1');
		break;
	case 1:
		console.log ('A 1 is a loss. Better luck next time.');
		break;
	default:
	   console.log ('Keep the dice on the table!');
}