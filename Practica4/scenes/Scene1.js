import Scene2 from './Scene2.js'

class Scene1 extends Phaser.Scene {

constructor(){
    super({key: 'Scene1', active: true});
    this.i = 0;
}

preload()
{
    this.load.image('fondo', '../assets/Spiderman_Fondo.png');
}

create()
{
    this.add.image(400, 300, 'fondo');
    this.hsv = Phaser.Display.Color.HSVColorWheel();

this.text1 = this.add.text(105, 250, 'Iniciar Juego', {font: "100px Arial Black", fill: "#fff"})

this.input.on('pointerdown', function () {
    this.cameras.main.fadeOut(250, 0, 0, 0);
}, this);


this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
    this.scene.add('Scene2', new Scene2, true, {x:0,y:0});
    this.scene.moveUp('Scene2');
})

}


color (i)
    {
        return 0x001100 * (i % 15) + 0x000033 * (i % 5);
    }

update()
{
    /*
    const top = this.hsv[this.i].color;
    const bottom = this.hsv[349 - this.i].color;



    this.text1.setTint(top, top, bottom, bottom);
    this.i++;

    if(this.i == 360){
        this.i = 0;
    }
    */
};}

export default Scene1
