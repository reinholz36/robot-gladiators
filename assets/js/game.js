// Alert players that they are starting the game
window.alert ("Welcome to Robot Gladiators!");
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
// var enemyHealth = 10;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);
// fight function (now with parameter for enemy's name)
var fight = function(enemyNames) {
    while(playerHealth > 0 && enemyHealth > 0){
        // ask player if they'd like to fight or run
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this batter? Enter 'FIGHT' or 'SKIP' to choose.");
        // if player choses to skip
        if (promptFight === "skip" || promptFight === "SKIP" || promptFight === "Skip") {
            // confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            
            // if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                //subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            }
        }
        
    /*Subtract the value of 'playerAttack' from the value of 'enemyHealth' 
    and use that result to update the value in the 'enemyHealth' variable*/
    enemyHealth = enemyHealth - playerAttack;
    // Log a resulting message to the console so we know that it worked.
    console.log(playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining."
    );
    
    // if player choses to fight, then fight 
    if (promptFight === "fight" || promptFight === "FIGHT" || promptFight === "Fight") {
        window.alert("The fight has begun!");
        
        // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyNames + " has died!");
            break;
            
            // award player money for winning
            playerMoney = playerMoney + 20;

            // leave while() loop since enemy is dead
            break;
            
        }else {
    window.alert(enemyNames + " still has " + enemyHealth + " health left.");
}

/*Subtract the value of `enemyAttack` from the value of `playerHealth`
and use that result to update the value in the `playerHealth` variable.*/
playerHealth = playerHealth - enemyAttack;

// Log a resulting message to the console so we know that it worked.
console.log(enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");


// check player's health
if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
    break;
}
else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
}


window.alert(playerName + " has chosen to skip the fight!");
} else {
window.alert("You need to choose a valid option. Try again!");
}

}

};
// this creates a function named "fight"

for(var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    // enemyHealth = 10;
    enemyHealth = 50;
    // call fight function with enemy-robot
    fight(pickedEnemyName);
}




