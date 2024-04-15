from django.core.validators import RegexValidator
from django.db import models

class Contact(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField(max_length=255)
    phone_number_validator = RegexValidator(
        regex=r'^\+?1?\d{9,15}$',
        message='Phone number must contain only numeric characters.',
        code='invalid_phone_number'
    )
    phone = models.CharField(max_length=15, validators=[phone_number_validator])
    message = models.CharField(max_length=1000)

    def __str__(self):
        return self.name
