console.log("Take Home Task - Inheritance, Override dan Encapsulation")



class shape  {
    numSides 
    sideLengths1=2;
    sideLengths2=2;
    sideLengths3=4;
    sideLengths4=4;


    getNumSide(){
        const numsSides = {
            numsSides:this.numSides
        }
        return numsSides
    }
    getSideLength(){
        const sidesLengths = {
            sidesLengths:this.sideLengths
        }
        return sidesLengths
    }
    perimeters = this.sideLengths1+this.sideLengths2+this.sideLengths3
    getPerimeter(){
        let perimeters=this.perimeters
        console.log(perimeters)
        
        
        return  perimeters
        
    }
    Area1 = this.sideLengths1*this.sideLengths2/2
    getArea(){
        let Area=this.Area
        console.log(Area) 
        
        
        return  Area
        
    }
    /*
    perimeters1 = this.sideLengths1+this.sideLengths2+this.sideLengths3
    getPerimeter1(){
        let perimeters1=this.Perimeters1
        console.log(perimeters1)
        
        
        return  perimeters1
        
    }

    perimeters2 = this.sideLengths1+this.sideLengths2+this.sideLengths3+this.sideLengths4
    getPerimeter2(){
        let perimeters2=this.Perimeters2
        console.log(perimeters2)
        
        
        return  perimeters2
        
    }

    perimeters3 = this.sideLengths1+this.sideLengths2+this.sideLengths3+this.sideLengths4
    getPerimeter3(){
        let perimeters3=this.Perimeters3
        
        console.log(perimeters3)
        
        
        return  perimeters3
        
    }
    

    Area1 = this.sideLengths1*this.sideLengths2/2
    getArea1(){
        let Area1=this.Area1
        console.log(Area1) 
        
        
        return  Area1
        
    }
    Area2 = this.sideLengths1*this.sideLengths2
    getArea1(){
        let Area2=this.PArea2
        console.log(Area2)
        
        
        return  Area2
        
    }
    Area3 = this.sideLengths1*this.sideLengths2*3.14
    getArea3(){
        let Area3=this.Area3
        console.log(Area3)
        
        
        return  Area3
        
     }
     */
     
}
class Triangle extends shape {
    perimeters = this.sideLengths1+this.sideLengths2+this.sideLengths3
    getPerimeter(){
        let perimeters=this.perimeters
        console.log("ini perimeter triangle = "+perimeters)
        
        
        return  perimeters
        
    }
    Area = this.sideLengths1*this.sideLengths2/2
    getArea(){
        let Area=this.Area1
        console.log("ini area Triangle = "+Area) 
        
        
        return  Area
        
    }
}
class Rectangle extends shape {
    perimeters = this.sideLengths1+this.sideLengths2+this.sideLengths3+this.sideLengths4
    getPerimeter(){
        let perimeters=this.perimeters
        console.log("ini perimeter Rectangle = "+perimeters)
        
        
        return  perimeters
        
    }
    Area = this.sideLengths1*this.sideLengths2
    getArea(){
        let Area=this.Area
        console.log("ini area Rectangle = "+Area)
        
        
        return  Area
        
    }


}
class Circle extends shape {
    
    perimeters = 2*3.14*this.sideLengths2
    getPerimeter(){
        let perimeters=this.perimeters
        
        console.log("ini Perimeter Circle = "+perimeters)
        
        
        return  perimeters
        
    }
    Area = 3.14**this.sideLengths3
    getArea(){
        let Area=this.Area
        console.log("ini Area circle = "+Area)
        
        
        return  Area
        
     }
}


const shapes =new shape();
const Triangles = new Triangle ();
const Rectangles = new Rectangle ();
const Circles =new Circle ();

shapes.getPerimeter();
shapes.getArea();
Triangles.getPerimeter();
Triangles.getArea();
Rectangles.getPerimeter();
Rectangles.getArea()
Circles.getPerimeter();
Circles.getArea();



