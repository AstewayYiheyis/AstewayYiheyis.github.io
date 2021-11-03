var accountInfoList=[];
var myAccModule=(function(){
    var account={
        accountName: '',
        deposit: 0
    };
    var createAccount=function(accountName, deposit) {
        var newAcc=Object.create(account);
         newAcc.accountName=accountName;
         newAcc.deposit=deposit;
         return newAcc;
    }
    return {
        createAccount:createAccount
    };

})();

window.onload=function(){
    var addaccount=document.getElementById("create-account");
    addaccount.onclick=onAddAccountClicked;
}
function onAddAccountClicked(){
    let accountNameElement=document.getElementById("account-name");
    let depositElement=document.getElementById("deposit");
    const accountName=accountNameElement.value.trim();
    const deposit=depositElement.value.trim();

    if(accountName===''||deposit===''){
        alert("Please enter account name and deposite");
        return;
    }
    var newAcc=myAccModule.createAccount(accountName,deposit);
    accountInfoList.push(newAcc);
    let mytextarea=document.getElementById("myaccounts");
    mytextarea.value='';
    for(let i=0;i<accountInfoList.length;i++){
        mytextarea.value +="\n Account name: "+accountInfoList[i].accountName +" Balance: "+accountInfoList[i].deposit;
    }

}