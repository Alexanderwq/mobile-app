export const usePasswordValidation = (password: string) => {
  const minPasswordLength = 5
  const passwordIsEmpty = password.length === 0
  const passwordError: boolean = password.length < minPasswordLength && !passwordIsEmpty

  return {
    passwordIsEmpty,
    passwordError,
  }
}