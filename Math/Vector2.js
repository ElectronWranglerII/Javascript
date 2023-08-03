/* Vector2 Library
* Copyright (C) DeRemee Systems, IXE Electronics LLC
* Portions copyright IXE Electronics LLC, Republic Robotics, FemtoLaunch, FemtoSat, FemtoTrack, Weland
* This work is made available under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
* To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/.
*/

class Vector2{
    constructor(X, Y){
        this.Vector = new Float32Array([0.0, 0.0]);
        
        if(arguments.length === 1){
            this.Vector[0] = X.X();
            this.Vector[1] = X.Y();
        }else if(arguments.length === 2){
            this.Vector[0] = X;
            this.Vector[1] = Y;
        }
    }
    
    static Add(A, B){
        var C = new Vector2(A.X(), A.Y());
        C.Add(B);
        return C;
    }
    
    static Cross(A, B){
        var C = new Vector2(A.X(), A.Y();
        C.Cross(B);
        return C;
    }
    
    static Dot(A, B){
        return A.X() * B.X() + A.Y() * B.Y();
    }
    
    static Normalize(A){
        var C = new Vector2(A.X(), A.Y());
        C.Normalize();
        return C;
    }
    
    static Subtract(A, B){
        var C = new Vector2(A.X(), A.Y());
        C.Subtract(B);
        return C;
    }
    
    Add(Vector){
        this.Vector[0] += Vector.X();
        this.Vector[1] += Vector.Y();
    }
    
    Cross(Vector){
        let X = this.Vector[0];
        let Y = this.Vector[1];
        this.Vector[0] = Y * Vector.X() - X * Vector.Y();
        this.Vector[2] = X * Vector.Y() - Y * Vector.X();
    }
    
    Divide(Vector){
        this.Vector[0] /= Vector.X();
        this.Vector[1] /= Vector.Y();
    }
    
    Dot(Vector){
        return this.Vector[0] * Vector.X() + this.Vector[1] * Vector.Y();
    }
    
    Inverse(){
        this.Vector[0] = 1.0 / this.Vector[0];
        this.Vector[1] = 1.0 / this.Vector[1];
    }
    
    Length(){
        return Math.hypot(this.Vector[0], this.Vector[1]);
    }
    
    Multiply(Vector){
        this.Vector[0] *= Vector.X();
        this.Vector[1] *= Vector.Y();
    }
    
    Negate(){
        this.Vector[0] = -this.Vector[0];
        this.Vector[1] = -this.Vector[1];
    }
    
    Normalize(){
        var Length = this.Vector[0] * this.Vector[0] + this.Vector[1] * this.Vector[1];
        if(Length > 0.0){
            Length = 1.0 / Math.sqrt(Length);
        }
        this.Vector[0] *= Length;
        this.Vector[1] *= Length;
    }
    
    Scale(Scale){
        this.Vector[0] *= Scale;
        this.Vector[1] *= Scale;
    }
    
    Subtract(Vector){
        this.Vector[0] -= Vector.X();
        this.Vector[1] -= Vector.Y();
    }
    
    toString(){
        return "Vector3[" + this.Vector[0] + ", " + this.Vector[1] + ", " + "]";
    }
    
    Value(A, B){
        if(arguments.length === 0){
            return this.Vector;
        }else if(typeof A === "object"){
            this.Vector = Vector;
        }else if(typeof A === "number" && typeof B === "number"){
            this.Vector[0] = A;
            this.Vector[1] = B;
        }
    }
    
    X(Value){
        if(arguments.length === 0){
            return this.Vector[0];
        }else if(typeof Value === "number"){
            this.Vector[0] = Value;
        }
    }
    
    Y(Value){
        if(arguments.length === 0){
            return this.Vector[1];
        }else if(typeof Value === "number"){
            this.Vector[1] = Value;
        }
    }
}
