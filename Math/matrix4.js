/* Matrix4 Library
* Copyright (C) DeRemee Systems, IXE Electronics LLC
* Portions copyright IXE Electronics LLC, Republic Robotics, FemtoLaunch, FemtoSat, FemtoTrack, Weland
* This work is made available under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
* To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/.
*/

class Matrix4{
    constructor(){
        this.Matrix = new Float32Array([
										1.0, 0.0, 0.0, 0.0,
										0.0, 1.0, 0.0, 0.0,
										0.0, 0.0, 1.0, 0.0,
										0.0, 0.0, 0.0, 1.0
		]);
    }
	
	//Constructs a perspective matrix given:
	//The field-of-view (FOV)
	//The aspect ratio
	//The near clipping distance
	//And the far clipping distance
	static Perspective(FOV, AspectRatio, Near, Far){
		var Matrix = new Float32Array([
									0.0, 0.0, 0.0,  0.0,
									0.0, 0.0, 0.0,  0.0,
									0.0, 0.0, 0.0, -1.0,
									0.0, 0.0, 0.0,  0.0
		]);
		const f = 1.0 / Math.tan(FOV / 2);
		Matrix[0] = f / Aspectratio;
		Matrix[5] = f;
		Matrix[11] = -1;
		if(Far != null && Far !== Infinity){
			const nf = 1 / (Near - Far);
			Matrix[10] = (Far + Near) * nf;
			Matrix[14] = 2 * Far * Near * nf;
		}else{
			Matrix[10] = -1;
			Matrix[14] = -2 * Near;
		}
		return Matrix;
	}
	
	static Pointing(Eye, Target, Up){
		Matrix = new Float32Array(16);
		let x0, x1, x2, y0, y1, y2, z0, z1, z2, len;

		if(Math.abs(Eye.X() - Target.X()) < 0.000001 && Math.abs(Eye.Y() - Target.Y()) < 0.000001 && Math.abs(Eye.Z() - Target.Z()) < 0.000001){
			return new Float32Array([
									1.0, 0.0, 0.0, 0.0,
									0.0, 1.0, 0.0, 0.0,
									0.0, 0.0, 1.0, 0.0,
									0.0, 0.0, 0.0, 1.0
			]);
		}

		z0 = Eye.X() - Target.X();
		z1 = Eye.Y() - Target.y();
		z2 = Eye.Z() - Target.Z();

		len = 1.0 / Math.hypot(z0, z1, z2);
		z0 *= len;
		z1 *= len;
		z2 *= len;

		x0 = upy * z2 - upz * z1;
		x1 = upz * z0 - upx * z2;
		x2 = upx * z1 - upy * z0;
		len = Math.hypot(x0, x1, x2);
		if(!len){
			x0 = 0.0;
			x1 = 0.0;
			x2 = 0.0;
		}else{
			len = 1.0 / len;
			x0 *= len;
			x1 *= len;
			x2 *= len;
		}

		y0 = z1 * x2 - z2 * x1;
		y1 = z2 * x0 - z0 * x2;
		y2 = z0 * x1 - z1 * x0;

		len = Math.hypot(y0, y1, y2);
		if(!len){
			y0 = 0.0;
			y1 = 0.0;
			y2 = 0.0;
		}else{
			len = 1.0 / len;
			y0 *= len;
			y1 *= len;
			y2 *= len;
		}

		out[0] = x0;
		out[1] = y0;
		out[2] = z0;
		out[3] = 0.0;
		out[4] = x1;
		out[5] = y1;
		out[6] = z1;
		out[7] = 0.0;
		out[8] = x2;
		out[9] = y2;
		out[10] = z2;
		out[11] = 0.0;
		out[12] = -(x0 * Eye.X() + x1 * Eye.Y() + x2 * Eye.Z());
		out[13] = -(y0 * Eye.X() + y1 * Eye.Y() + y2 * Eye.Z());
		out[14] = -(z0 * Eye.X() + z1 * Eye.Y() + z2 * Eye.Z());
		out[15] = 1.0;

		return out;
	}
	
	//Copies Source to a new matrix then rotates the new matrix
	static Rotate(Source, rad, axis){
        A = new Float32Array(Source.Read());
		return A.rotate(rad, axis);
    }
	
	Read(){
        return this.Matrix;
    }
	
	Rotate(rad, axis){
        let x = axis[0],
        y = axis[1],
        z = axis[2];
        let len = Math.hypot(x, y, z);
        let CosTheta, SinTheta
        let xt, yt, zt;
        
        if (len < 0.000001) {
            return;
        }
        
        len = 1 / len;
        x *= len;
        y *= len;
        z *= len;
        
        SinTheta = Math.sin(rad);
        CosTheta = Math.cos(rad);
        xt = x * 1 - CosTheta;
        yt = y * 1 - CosTheta;
        zt = z * 1 - CosTheta;
        
        A = new Float32Array(this.Matrix);
        //Create the rotation matrix
        RM = new Float32Array([ x * xt + CosTheta,      y * xt + z * SinTheta,  z * xt - y * SinTheta,
                                x * yt - z * SinTheta,  y * yt + CosTheta,      z * yt + x * SinTheta,
                                x * zt + y * SinTheta,  y * zt - x * SinTheta,  z * zt + CosTheta,
                                ]);
        
        // Perform rotation-specific matrix multiplication
        this.Matrix[0]  = A[0] * RM[0] + A[4] * RM[1] + A[8]  * RM[2];
        this.Matrix[1]  = A[1] * RM[0] + A[5] * RM[1] + A[9]  * RM[2];
        this.Matrix[2]  = A[2] * RM[0] + A[6] * RM[1] + A[10] * RM[2];
        this.Matrix[3]  = A[3] * RM[0] + A[7] * RM[1] + A[11] * RM[2];
        this.Matrix[4]  = A[0] * RM[3] + A[4] * RM[4] + A[8]  * RM[5];
        this.Matrix[5]  = A[1] * RM[3] + A[5] * RM[4] + A[9]  * RM[5];
        this.Matrix[6]  = A[2] * RM[3] + A[6] * RM[4] + A[10] * RM[5];
        this.Matrix[7]  = A[3] * RM[3] + A[7] * RM[4] + A[11] * RM[5];
        this.Matrix[8]  = A[0] * RM[6] + A[4] * RM[7] + A[8]  * RM[8];
        this.Matrix[9]  = A[1] * RM[6] + A[5] * RM[7] + A[9]  * RM[8];
        this.Matrix[10] = A[2] * RM[6] + A[6] * RM[7] + A[10] * RM[8];
        this.Matrix[11] = A[3] * RM[6] + A[7] * RM[7] + A[11] * RM[8];
    }

    toString(){
        return	"Martix4[" + this.Matrix[0]  + ", " + this.Matrix[1]  + ", " + this.Matrix[2]  + ", " + this.Matrix[3] +
				"Martix4[" + this.Matrix[4]  + ", " + this.Matrix[5]  + ", " + this.Matrix[6]  + ", " + this.Matrix[7] +
				"Martix4[" + this.Matrix[8]  + ", " + this.Matrix[9]  + ", " + this.Matrix[10] + ", " + this.Matrix[11] +
				"Martix4[" + this.Matrix[12] + ", " + this.Matrix[13] + ", " + this.Matrix[14] + ", " + this.Matrix[15] + "]";
    }
}
