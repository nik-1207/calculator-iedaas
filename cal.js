function reset()
{
    document.getElementById("res").value = ''
}
function solve()
{
    let x = document.getElementById("res").value
    let ans=eval(x)
    if(Number.isFinite(ans))
    {
        document.getElementById("res").value = eval(x)
    }
    else
    {        
        document.getElementById("res").value = "invalid input"
    }
}
function dis(val)
{
    document.getElementById("res").value+=val
}
function del()
{
    let x = document.getElementById("res").value
    document.getElementById("res").value=x.slice(0,-1)

}