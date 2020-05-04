export class Complex{
  x: number;
  y: number;
  constructor (x :number,y :number)
  {
    this.x = x;
    this.y = y;
  }

  mod() : number {
    let t=this.x*this.x+this.y*this.y;
    return Math.sqrt(t);
  }

  arg() : number {
    if (this.x>0 && this.y>=0)
    return Math.atan(this.y/this.x);
    else if (this.x<0)
    return Math.atan(this.y/this.x)+Math.PI;
    else if (this.x>0 && this.y<0)
    return Math.atan(this.y/this.x)+2*Math.PI;
    else if (this.x===0 && this.y>0)
    return Math.PI/2;
    else if (this.x===0 && this.y<0)
    return 3*Math.PI/2;
    else return 0;
  }

  sum(obj : Complex) : Complex {
    let u=this.x+obj.x;
    let v=this.y+obj.y;
    return new Complex(u,v);
  }

  sub(obj : Complex) : Complex {
    let u=this.x-obj.x;
    let v=this.y-obj.y;
    return new Complex(u,v);
  }

  mul(obj : Complex) : Complex {
    let r1=this.mod(),r2=obj.mod();
    let p1=this.arg(),p2=obj.arg();
    let u=r1*r2*Math.cos(p1+p2);
    let v=r1*r2*Math.sin(p1+p2);
    return new Complex(u,v);
  }

  div(obj : Complex) : Complex {
    let r1=this.mod(),r2=obj.mod();
    let p1=this.arg(),p2=obj.arg();
    let u=r1/r2*Math.cos(p1-p2);
    let v=r1/r2*Math.sin(p1-p2);
    return new Complex(u,v);
  }

  pow(n: number) : Complex {
    let r=this.mod(),p=this.arg();
    let u=Math.pow(r,n)*Math.cos(n*p);
    let v=Math.pow(r,n)*Math.sin(n*p);
    return new Complex(u,v);
  }

  p(){
    if (Math.abs(this.x)<1.E-7)
    this.x=0;
    if (Math.abs(this.y)<1.E-7)
    this.y=0;
    if (this.y>=0){
      let s=this.x+'+'+this.y+'i';
      return s;
    }
    else{
      let s=this.x+' '+this.y+'i';
      return s;
    }
  }

  exp() : Complex {
    let u=Math.exp(this.x)*Math.cos(this.y);
    let v=Math.exp(this.x)*Math.sin(this.y);
    return new Complex(u,v);
  }

  log() : Complex {
    let u=Math.log(this.mod());
    let v=this.arg();
    return new Complex(u,v);
  }

  sm() : Complex {
    return new Complex(this.x,-this.y);
  }

  sin() : Complex {
    let i=new Complex(0,1);
    let t=new Complex(2,0);
    let tm1=i.mul(this).exp();
    let tm2=i.sm().mul(this).exp();
    let tm3=i.mul(t);
    return tm1.sub(tm2).div(tm3);
  }

  cos() : Complex {
    let i=new Complex(0,1);
    let t=new Complex(2,0);
    let tm1=i.mul(this).exp();
    let tm2=i.sm().mul(this).exp();
    return tm1.sum(tm2).div(t);
  }

  tg() : Complex {
    return this.sin().div(this.cos());
  }

  ctg() : Complex{
    return this.cos().div(this.sin());
  }

  stp(obj : Complex) : Complex{
    return obj.mul(this.log()).exp();
  }

  asin() : Complex{
    let i=new Complex(0,1);
    let t=new Complex(1,0);
    let tm1=t.sub(this.pow(2)).pow(.5);
    let tm2=i.mul(this).sum(tm1);
    return tm2.log().div(i);
  }

  acos() : Complex{
    let i=new Complex(0,1);
    let t=new Complex(1,0);
    let tm1=this.pow(2).sub(t).pow(.5);
    let tm2=this.sum(tm1);
    return tm2.log().div(i);
  }

  atg() : Complex{
    let i=new Complex(0,1);
    let t=new Complex(1,0);
    let tm1=t.sum(i.mul(this));
    let tm2=t.sub(i.mul(this));
    return tm1.div(tm2).log().div(i.sum(i));
  }

}
