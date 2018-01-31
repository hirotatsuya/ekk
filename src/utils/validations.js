/**
 * 名前のバリデーション
 * @return boolean
 */
const validateName = name => {
  return name ? name === '' || name.length > 200 : true
}

/**
 * メールアドレスのバリデーション
 * @return boolean
 */
const validateEmail = email => {
  return email ? email === '' || email.length > 200 || email.indexOf('@') === -1 || email.indexOf('.') === -1 : true
}

export {
  validateName,
  validateEmail
}
