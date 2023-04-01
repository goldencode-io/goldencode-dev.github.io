function sendEmail() {
  Email.send({
    Host : "sandbox.smtp.mailtrap.io",
    Username : "c922e47e769400",
    Password : "773f4534a83a98",
    To : 'recipient@example.com',
    From : "sender@example.com",
    Subject : "Test email",
    Body : "<html><h2>Header</h2><strong>Bold text</strong><br></br><em>Italic</em></html>"
  }).then(
    message => alert(message)
  );
}