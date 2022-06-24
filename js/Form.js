class Form {
 constructor(){
    this.titleImg = createImg("./assets/title.png","game title");
    this.input = createInput("").attribute("placeholder","Enter your Name");
    this.playButton = createButton("Play");
    this.greetings = createElement("h2");
 }
 setElementPosition(){
    this.titleImg.position(120,50);
    this.input.position(width/2 -110,height/2 -80);
    this.playButton.position(width/2- 90,height/2 -20);
    this.greetings.position(width/2 -300,height/2 -100);
 }
 setElementStyle(){
    this.titleImg.class("gameTitle");
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.greetings.class("greetings");
 }
 hide(){
    this.input.hide();
    this.playButton.hide();
    this.greetings.hide();
 }
 handleMousePressed(){
    this.playButton.mousePressed(()=>{
      this.input.hide();
      this.playButton.hide();
        //Declaring an variable to hold the sentence
      var message = `Hello ${this.input.value()}
      </br> wait for another player to join....`;

      this.greetings.html(message);  
    });
 }

 display(){
    this.setElementPosition();
    this.setElementStyle();
    this.handleMousePressed();
 }
}
