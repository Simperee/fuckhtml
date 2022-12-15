*SPACE::
Loop
{
GetKeyState,state,SPACE,P
if state = U
break
Send, {Blind}{SPACE}
Sleep,10
}
return