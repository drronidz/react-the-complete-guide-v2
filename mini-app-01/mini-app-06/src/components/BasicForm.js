import useInput from "../hooks/use-input";

const isNotEmpty = value => value.trim() !== ''
const isEmail = value => value.includes('@')

const BasicForm = (props) => {

    const {
        value: firstNameValue,
        isValid: firstNameIsValid,
        hasError: firstNameHasError,
        valueChangeHandler: firstNameChangedHandler,
        inputBlurHandler: firstNameBlurredHandler,
        reset: resetFirstNameInput
    } = useInput(isNotEmpty)

    const {
        value: lastNameValue,
        isValid: lastNameIsValid,
        hasError: lastNameHasError,
        valueChangeHandler: lastNameChangedHandler,
        inputBlurHandler: lastNameBlurredHandler,
        reset: resetLastNameInput
    } = useInput(isNotEmpty)

    const {
        value: emailValue,
        isValid: emailIsValid,
        hasError: emailHasError,
        valueChangeHandler: emailChangedHandler,
        inputBlurHandler: emailBlurredHandler,
        reset: resetEmailInput
    } = useInput(isNotEmpty && isEmail)

    let formIsValid = false

    if (firstNameIsValid && lastNameIsValid && emailIsValid) {
        formIsValid = true
    }

    const submitHandler = event => {
        event.preventDefault()


        if (!formIsValid) {
        }

        console.log('Submitted!')
        console.log(firstNameValue, lastNameValue, emailValue)

        resetFirstNameInput()
        resetLastNameInput()
        resetEmailInput()
    }

    const firstNameClasses = firstNameHasError
        ? 'form-control invalid'
        : 'form-control'

    const lastNameClasses = lastNameHasError
        ? 'form-control invalid'
        : 'form-control'

    const emailClasses = emailHasError
        ? 'form-control invalid'
        : 'form-control'

    return (
        <form onSubmit={submitHandler}>
            <div className='control-group'>
                <div className={firstNameClasses}>
                    <label htmlFor='firstName'>First Name</label>
                    <input
                        type='text'
                        id='firstName'
                        onChange={firstNameChangedHandler}
                        onBlur={firstNameBlurredHandler}
                        value={firstNameValue}
                    />
                  {firstNameHasError && <p className="error-text">first name must not be empty.</p>}
                </div>
                <div className={lastNameClasses}>
                    <label htmlFor='lastName'>Last Name</label>
                    <input
                        type='text'
                        id='lastName'
                        onChange={lastNameChangedHandler}
                        onBlur={lastNameBlurredHandler}
                        value={lastNameValue}
                    />
                  {lastNameHasError && <p className="error-text">last name must not be empty.</p>}
                </div>
            </div>
            <div className={emailClasses}>
                <label htmlFor='email'>E-Mail Address</label>
                <input
                    type='email'
                    id='email'
                    onChange={emailChangedHandler}
                    onBlur={emailBlurredHandler}
                    value={emailValue}
                />
                {emailHasError && <p className="error-text">email must not be empty.</p>}
            </div>
            <div className='form-actions'>
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default BasicForm;
