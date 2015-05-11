<%
If Request.Form("txtComments") <> "" Then

Dim strTo, strFrom
Dim strSubject 
Dim strBody 'Strings for recipient, subject, boby
Dim objCDOMail 'The CDO object

'Populate the variables
strSubject = "Comments from the CADA web site."
strFrom = Request.Form("txtEmail")
strTo =  "brian@simmonswebdesign.net" '"AntiqueRowGA@aol.com"
strBody = "Information from the CADA web site:" & vbcrlf & vbcrlf & _
	"Name: " & REquest.Form("txtName") & vbcrlf & _
	"E-Mail: " & Request.Form("txtEmail") & vbcrlf & _
	"Phone Number: " & Request.Form("txtPhone") & vbcrlf & _
	"Comments: " & Request.Form("txtComments") 

' Create an instance of the NewMail object.
Set objCDOMail = Server.CreateObject("CDONTS.NewMail")
    
' Set the properties of the object
objCDOMail.From = StrFrom
objCDOMail.To = strTo
objCDOMail.Subject = strSubject
objCDOMail.Body = strBody


' Some of the more useful ones I've included samples of here:
objCDOMail.Cc = strFrom 'Notice this sending to more than one person!
objCDOMail.Bcc = "brian@simmonswebdesign.net"
'objCDOMail.Importance = 2 '(0=Low, 1=Normal, 2=High)
'objCDOMail.AttachFile "c:\path\filename.txt", "filename.txt"

' Send the message!
objCDOMail.Send

Set objCDOMail = Nothing
Response.Redirect "/contact.asp?status=1"

End If
%>
<HTML>
<HEAD>
<TITLE>CADA Contact Information</TITLE>
<META http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<link href="styles/styles.css" rel="stylesheet" type="text/css">
</HEAD><body leftmargin="0" topmargin="0" marginwidth="0" marginheight="0">
<!--#include virtual="/includes/top.asp" -->
<!--#include virtual="/includes/2ndRow.asp" -->
<!--#include virtual="/includes/MainMenu.asp" -->

<table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td width="1%" valign="top"><!--#include virtual="/includes/rightMenu.asp" --></td>

<!-- *********************** Content Goes Between These Lines ***************************************************-->
    <td width="99%" valign="top" bgcolor="#FFFFFF"><table width="95%" border="0" cellspacing="0" cellpadding="5">
      <tr>
        <td valign="top"><h2>CADA Contact Information</h2>
          <table width="95%" border="0" cellspacing="0" cellpadding="5">
            <tr>
              <td width="13%" align="right" nowrap>E-Mail:</td>
              <td><a href="mailto:AntiqueRowGA@aol.com">AntiqueRowGA@aol.com</a></td>
            </tr>
            <tr>
              <td align="right" nowrap>Telephone:</td>
              <td>770.458.6316</td>
            </tr>
            <tr>
              <td colspan="2" nowrap>
			 
			  </form>
				</td>
              </tr>
          </table>
        </td>
      </tr>
    </table></td>
<!-- *********************** End Page Content Here **************************************************************-->

  </tr>
</table>
<!--#include virtual="/includes/copyright.asp" -->
</body>
</html>