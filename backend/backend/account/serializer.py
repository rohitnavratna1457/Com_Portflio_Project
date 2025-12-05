from .models import *
from rest_framework import serializers


# -----------------  Client Custom USer ---------------------  £


class CustomSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = '__all__'


# -----------------  Client Feedback ---------------------  £


class FeedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client_Feedback
        fields = '__all__'

# -----------------  Client Email Feedback ---------------------  £


class Email_FeedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Email_Suscribe
        fields = '__all__'


# account/serializers.py
from rest_framework import serializers
from django.contrib.auth import authenticate
from .models import CustomUser

class CustomLoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        username = data.get('username')
        password = data.get('password')

        if username and password:
            user = authenticate(username=username, password=password)
            if not user:
                raise serializers.ValidationError("Invalid username or password")
            if not user.is_active:
                raise serializers.ValidationError("User account is disabled")
        else:
            raise serializers.ValidationError("Both username and password are required")

        data['user'] = user
        return data
