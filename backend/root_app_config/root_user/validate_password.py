from django.contrib.auth.password_validation import get_default_password_validators
from django.core.exceptions import ValidationError


def validate_password(password: str, user=None, password_validators=None) -> list:
    """
    validate a password and return the validation exception as an array of error exceptions
    """
    errors = []
    if password_validators is None:
        password_validators = get_default_password_validators()
    for validator in password_validators:
        try:
            validator.validate(password, user)
        except ValidationError as error:
            errors.append(error.messages)
    if errors:
        return errors