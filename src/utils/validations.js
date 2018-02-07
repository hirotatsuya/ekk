/**
 * 名前のバリデーション
 * @return boolean
 */
const validateName = name => name ? name === '' || name.length > 200 : true

/**
 * メールアドレスのバリデーション
 * @return boolean
 */
const validateEmail = email => email ? email === '' || email.length > 200 || email.indexOf('@') === -1 || email.indexOf('.') === -1 : true

export {
  validateName,
  validateEmail
}
