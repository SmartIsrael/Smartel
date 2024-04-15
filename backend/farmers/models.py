from django.core.validators import RegexValidator
from django.db import models

class Farmers(models.Model):
    name = models.CharField(max_length=100)
    
    # Validator to ensure only numeric characters are entered
    phone_number_validator = RegexValidator(
        regex=r'^\+?1?\d{9,15}$',
        message='Phone number must contain only numeric characters.',
        code='invalid_phone_number'
    )
    phoneNumber = models.CharField(max_length=15, validators=[phone_number_validator])
    
    location = models.CharField(max_length=100)
    product = models.CharField(max_length=100)

    def __str__(self):
        return self.name