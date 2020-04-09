function formvalidation()
{
	
	var Username=document.Register.Username;
	var password=document.Register.password;
	var conpassword=document.Register.conpassword;
	if(Emptyfield (Username,password,conpassword))
	{
		if(validateUsername(Username))
		{
			if(validatePassword(password))
			{
				if(validateConpassword(conpassword))
				{
					return true;
				}
			}
		}
	return false;
}
function Emptyfield(Username,password,conpassword)
{
var Username_len=Username.value.length;
var password_len=password.value.length;
var conpassword_len=conpassword.value.length;

if (Username_len==0|| password_len==0||conpassword_len==0)
{
	alert("Please fill out this field");
	return false;
}
else
{
	return true;
}
}
	
function validateUsername(Username)
{
	var mailformat=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	
	 
	if(Username.value.match(mailformat))
	{
		return true;
	}
	else
	{
		alert('You have to enter a valid email address!');
		Username.focus();
		return false;
	}
}	

function validatePassword(password)
{
	var password=/^[0-9a-zA-Z/]+$/;
	
	if(password.value.match(password))
	{
		return true;
	}
	else
	{
		alert('Password must have alphanumerical characters only!!');
		password.focus();
		return false;
	}
}
function validateConpassword(conpassword)
{
	var  confirm_password=/^[0-9a-zA-Z/]+$/;
	
	if(conpassword.value.match(confirm_password))
	{
		return true;
	}
	else
	{
		alert('Confirm Password must have alphanumerical characters only!!');
		password.focus();
		return false;
	}
}

}
