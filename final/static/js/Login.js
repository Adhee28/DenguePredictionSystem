function Loginformvalidation()
{
	
	var username=document.Login.Username;
	var password=document.Login.password;
	
	if(Emptyfield (Username,password))
	{
		if(validateUsername(Username))
		{
			if(validatePassword(password))
			{
				
					return true;
				
			}
		}
	return false;
}
function Emptyfield(Username,password)
{
var Username_len=Username.value.length;
var password_len=password.value.length;

if (Username_len==0|| password_len==0)
{
	alert("Fields should not be empty");
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
}