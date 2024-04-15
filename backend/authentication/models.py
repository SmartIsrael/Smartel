# authentication/models.py

from django.contrib.auth.models import AbstractUser, Group, Permission
from django.db import models  
class CustomUser(AbstractUser):

    # Fix for clashes in reverse accessor names
    groups = models.ManyToManyField(Group, blank=True, related_name='custom_user_set')
    user_permissions = models.ManyToManyField(Permission, blank=True, related_name='custom_user_set')
