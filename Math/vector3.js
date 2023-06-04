/* Vector3 Library
* Copyright (C) DeRemee Systems, IXE Electronics LLC
* Portions copyright IXE Electronics LLC, Republic Robotics, FemtoLaunch, FemtoSat, FemtoTrack, Weland
* This work is made available under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
* To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/.
*/

class Vector3{
    constructor(X, Y, Z){
        this.Vector = new Float32Array([0.0, 0.0, 0.0]);
        
        if(arguments.length === 1){
            this.Vector[0] = X.X();
            this.Vector[1] = X.Y();
            this.Vector[2] = X.Z();
        }else if(arguments.length === 3){
            this.Vector[0] = X;
            this.Vector[1] = Y;
            this.Vector[2] = Z;
        }
    }
    
    static Add(A, B){
        var C = new Vector3(A.X(), A.Y(), A.Z());
        C.Add(B);
        return C;
    }
    
    static Cross(A, B){
        var C = new Vector3(A.X(), A.Y(), A.Z());
        C.Cross(B);
        return C;
    }
    
    static Dot(A, B){
        return A.X() * B.X() + A.Y() * B.Y() + A.Z() * B.Z();
    }
    
    static Normalize(A){
        var C = new Vector3(A.X(), A.Y(), A.Z());
        C.Normalize();
        return C;
    }
    
    static Subtract(A, B){
        var C = new Vector3(A.X(), A.Y(), A.Z());
        C.Subtract(B);
        return C;
    }
    
    Add(Vector){
        this.Vector[0] += Vector.X();
        this.Vector[1] += Vector.Y();
        this.Vector[2] += Vector.Z();
    }
    
    Cross(Vector){
        let X = this.Vector[0];
        let Y = this.Vector[1];
        let Z = this.Vector[2];
        this.Vector[0] = Y * Vector.Z() - Z * Vector.Y();
        this.Vector[1] = Z * Vector.X() - X * Vector.Z();
        this.Vector[2] = X * Vector.Y() - Y * Vector.X();
    }
    
    Divide(Vector){
        this.Vector[0] /= Vector.X();
        this.Vector[1] /= Vector.Y();
        this.Vector[2] /= Vector.Z();
    }
    
    Dot(Vector){
        return this.Vector[0] * Vector.X() + this.Vector[1] * Vector.Y() + this.Vector[2] * Vector.Z();
    }
    
    Inverse(){
        this.Vector[0] = 1.0 / this.Vector[0];
        this.Vector[1] = 1.0 / this.Vector[1];
        this.Vector[2] = 1.0 / this.Vector[2];
    }
    
    Length(){
        return Math.hypot(this.Vector[0], this.Vector[1], this.Vector[2]);
    }
    
    Multiply(Vector){
        this.Vector[0] *= Vector.X();
        this.Vector[1] *= Vector.Y();
        this.Vector[2] *= Vector.Z();
    }
    
    Negate(){
        this.Vector[0] = -this.Vector[0];
        this.Vector[1] = -this.Vector[1];
        this.Vector[2] = -this.Vector[2];
    }
    
    Normalize(){
        var Length = this.Vector[0] * this.Vector[0] + this.Vector[1] * this.Vector[1] + this.Vector[2] * this.Vector[2];
        if(Length > 0.0){
            Length = 1.0 / Math.sqrt(Length);
        }
        this.Vector[0] *= Length;
        this.Vector[1] *= Length;
        this.Vector[2] *= Length;
    }
    
    Scale(Scale){
        this.Vector[0] *= Scale;
        this.Vector[1] *= Scale;
        this.Vector[2] *= Scale;
    }
    
    Subtract(Vector){
        this.Vector[0] -= Vector.X();
        this.Vector[1] -= Vector.Y();
        this.Vector[2] -= Vector.Z();
    }
    
    toString(){
        return "Vector3[" + this.Vector[0] + ", " + this.Vector[1] + ", " + this.Vector[2] + "]";
    }
    
    Value(A, B, C){
        if(arguments.length === 0){
            return this.Vector;
        }else if(typeof A === "object"){
            this.Vector = Vector;
        }else if(typeof A === "number" && typeof B === "number" && typeof C === "number"){
            this.Vector[0] = A;
            this.Vector[1] = B;
            this.Vector[2] = C;
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
    
    Z(Value){
        if(arguments.length === 0){
            return this.Vector[2];
        }else if(typeof Value === "number"){
            this.Vector[2] = Value;
        }
    }
}
