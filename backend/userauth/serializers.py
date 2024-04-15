# serializers.py
from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Registration

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name']

class RegistrationSerializer(serializers.ModelSerializer):
    user = UserSerializer(write_only=True)

    class Meta:
        model = Registration
        fields = ['user', 'first_name', 'last_name']
