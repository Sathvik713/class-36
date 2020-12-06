class Game{ 
    constructor(){
        
    }
getState(){
    database.ref("gameState").on("value",function(data){
        gameState=data.val()
    })
}
update(State){
    database.ref('/').update({
        gameState:State
    })
}
async start(){
    if(gameState===0){
        player= new Player()
        var playerCountRef= await database.ref("playerCount").once("value")
        if(playerCountRef.exists()){
            playerCount= playerCountRef.val()
            player.getCount()
        }

        form= new Form()
        form.display()
    }
}
play(){
    form.hide()
    textSize(30)
    text("Game Start",120,100)
    Player.getPlayerInfo()
    if(allPlayers!==undefined){
        var dp= 130
        for(var plr in allPlayers){
            if (plr === "player" + player.index) 
            fill("red") 
            else fill("black");
            dp+=20; 
            textSize(15); 
            text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,dp) }

    }
    if(keyIsDown(UP_ARROW)&&player.index!==null){
        player.distance= player.distance+50
        player.update()


    }
}

}
