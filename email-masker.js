let email = "myEmail@email.com";

function maskEmail(email) {
    let lastLetter = email.indexOf("@");
    let name = email.slice(0, lastLetter);
    let nameLength = name.length;
    let finalLetter = nameLength - 1;
    let asterisksNeeded = nameLength - 2;
    return name[0] + "*".repeat(asterisksNeeded) + name[finalLetter] + email.slice(lastLetter);
 
}

  console.log(maskEmail(email));
  console.log(maskEmail("apple.pi@example.com"))
  console.log(maskEmail("freecodecamp@example.com"))
  console.log(maskEmail("info@test.dev"));
  console.log(maskEmail("user@domain.org"));
