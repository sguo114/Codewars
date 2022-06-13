// kata completed

// 5kyu: Regex Password Validation
function validate(password) {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/.test(password)
}
