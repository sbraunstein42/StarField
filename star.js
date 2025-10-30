export class Star {


    x = 50;
    y = 50;
    pencil;

    constructor(pencil) {
        this.pencil = pencil;
    }

    draw(pencil) {
        pencil.beginPath();
        pencil.arc(95, 50, 40, 0, 2 * Math.PI);
        pencil.fillStyle = "red";
        pencil.fill();
        pencil.closePath();
    }

}