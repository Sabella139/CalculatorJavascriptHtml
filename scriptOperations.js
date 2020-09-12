let x=0,y=0;
let op=" ";
let flag=false;

function clrr(){
 document.getElementById("screen").value=" ";
}

function oneClick()
{
if(flag==true)
{
document.getElementById("screen").value=" ";
flag=false;
}
document.getElementById("screen").value=document.getElementById("screen").value+"1";
}


function twoClick()
{
if(flag==true)
{
document.getElementById("screen").value=" ";
flag=false;
}
document.getElementById("screen").value=document.getElementById("screen").value+"2";
}

function threeClick()
{
if(flag==true)
{
document.getElementById("screen").value=" ";
flag=false;
}
document.getElementById("screen").value=document.getElementById("screen").value+"3";
}

function fourClick()
{
if(flag==true)
{
document.getElementById("screen").value=" ";
flag=false;
}
document.getElementById("screen").value=document.getElementById("screen").value+"4";
}


function FiveClick()
{
if(flag==true)
{
document.getElementById("screen").value=" ";
flag=false;
}
document.getElementById("screen").value=document.getElementById("screen").value+"5";
}


function SixClick()
{
if(flag==true)
{
document.getElementById("screen").value=" ";
flag=false;
}
document.getElementById("screen").value=document.getElementById("screen").value+"6";
}
function dotClick()
{
if(flag==false)
document.getElementById("screen").value=document.getElementById("screen").value+".";
}

function SevenClick()
{
if(flag==true)
{
document.getElementById("screen").value=" ";
flag=false;
}
document.getElementById("screen").value=document.getElementById("screen").value+"7";
}

function EightClick()
{
if(flag==true)
{
document.getElementById("screen").value=" ";
flag=false;
}
document.getElementById("screen").value=document.getElementById("screen").value+"8";
}
function NineClick()
{
if(flag==true)
{
document.getElementById("screen").value=" ";
flag=false;
}
document.getElementById("screen").value=document.getElementById("screen").value+"9";
}

function ZeroClick()
{
if(flag==true)
{
document.getElementById("screen").value=" ";
flag=false;
}
document.getElementById("screen").value=document.getElementById("screen").value+"0";
}
function dotClick()
{
if(flag==false)
document.getElementById("screen").value=document.getElementById("screen").value+".";
}
function dotClick()
{
if(flag==false)
document.getElementById("screen").value=document.getElementById("screen").value+".";
}

function dotClick()
{
if(flag==false)
document.getElementById("screen").value=document.getElementById("screen").value+".";
}

function dotClick()
{
if(flag==false)
document.getElementById("screen").value=document.getElementById("screen").value+".";
}

function plus()
{
op="+";
x= Number(document.getElementById("screen").value);
document.getElementById("screen").value="";
}

function minus()
{
op="-";
x= Number(document.getElementById("screen").value);
document.getElementById("screen").value="";
}

function mult()
{
op="*";
x= Number(document.getElementById("screen").value);
document.getElementById("screen").value="";
}

function divi()
{
op="/";
x= Number(document.getElementById("screen").value);
document.getElementById("screen").value="";
}

function eq()
{
flag=true;

if(op==="+"){
y= Number(document.getElementById("screen").value);
x=x+y;
document.getElementById("screen").value=x;
}
else if(op==="-"){
y= Number(document.getElementById("screen").value);
x=x-y;
document.getElementById("screen").value=x;
}
else if(op==="*"){
if(document.getElementById("screen").value=="")
y=1;
else
y= Number(document.getElementById("screen").value);
x=x*y;
document.getElementById("screen").value=x;
}
else if(op==="/"){
if(document.getElementById("screen").value=="")
y=1;
else
y= Number(document.getElementById("screen").value);
{
if(y!=0)
{
x=x/y;
document.getElementById("screen").value=x;
}
else
{
document.getElementById("screen").value="Divide by Zero";
x=0;
}
}
}
else
document.getElementById("screen").value=x;


}