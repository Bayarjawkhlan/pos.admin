export const PASSWORD_REQUIREMENTS: PasswordRequirement[] = [
  { id: 'length', text: 'At least 12 characters long', met: false },
  { id: 'uppercase', text: 'Contains uppercase letter (A-Z)', met: false },
  { id: 'lowercase', text: 'Contains lowercase letter (a-z)', met: false },
  { id: 'number', text: 'Contains at least one number (0-9)', met: false },
  { id: 'special', text: 'Contains special character (!@#$%^&*)', met: false },
  { id: 'noCommon', text: 'Not a commonly used password', met: false },
  { id: 'noPersonal', text: "Doesn't contain personal information", met: false }
]

export type PasswordRequirement = {
  id: string
  text: string
  met: boolean
}
