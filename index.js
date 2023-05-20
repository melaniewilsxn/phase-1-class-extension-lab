class Polygon{
    constructor(sides){
        this.sides = sides
    }

    get countSides(){
        return this.sides.length
    }

    get perimeter(){
        let total = 0
        this.sides.forEach(side => total += side)
        return total
    }
}

class Triangle extends Polygon{
    get isValid(){
        let side1 = this.sides[0]
        let side2 = this.sides[1]
        let side3 = this.sides[2]
        if ((side1 + side2 > side3) && (side1 + side3 > side2) && (side3 + side2 > side1)){
            return true
        } else return false
    }
}

class Square extends Polygon{
    get isValid(){
        let side1 = this.sides[0]
        let side2 = this.sides[1]
        let side3 = this.sides[2]
        let side4 = this.sides[3]
        if (side1 === side2 && side1 === side3 && side1 === side4){
            return true
        } else return false
    }

    get area(){
        return Math.pow(this.sides[0],2)
    }
}