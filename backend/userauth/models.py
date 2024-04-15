# models.py
from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    
    first_name = models.CharField(max_length=55)
    last_name = models.CharField(max_length=50)
    
    def __str__(self):
        return self.username
