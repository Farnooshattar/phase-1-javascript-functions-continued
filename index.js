// code your solution here
function wrapAdjective(specilChar="*")
{
    return (function(par="special"){return `You are ${specilChar}${par}${specilChar}!`})
}
//saturdayFun("bathe my dog")
function saturdayFun(msg="roller-skate")
{
    return `This Saturday, I want to ${msg}!`
}
const mondayWork = function(msg="go to the office")
{
    return `This Monday, I will ${msg}.`
}