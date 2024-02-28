export interface AuthorizationComponentModel {
    activeLoginButton : boolean
    activeSignUpButton : boolean

    readonly login : () => void
    readonly signUp : () => void
}