*f3:: Suspend, Toggle
*Space::
Loop
{
GetKeyState, state, Space, P
if State = U
break
; Otherwise:
Send, {blind}{Space}
Sleep, 1
}
return

*x::
Loop
{
GetKeyState, state, x, P
if State = U
break
; Otherwise:
Send, {blind}{Space} {e}
Sleep, 1
}
return

;;*q::

Loop
{
GetKeyState, state, q, P
if state=U
break
; otherwise:
Send, {LButton}
Sleep, 8
}

return