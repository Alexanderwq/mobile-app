export const useEmailValidation = (email: string) => {
  const emailRegExp = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/g
  const emailIsEmpty = email.length === 0
  const emailError: boolean = !emailRegExp.test(email) && !emailIsEmpty

  return {
    emailIsEmpty,
    emailError,
  }
}