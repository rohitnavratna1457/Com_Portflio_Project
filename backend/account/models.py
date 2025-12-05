
# Create your models here.

'''
ADMIN PANNEL

USERNAME :- rohit
PASSWORD :- 123

'''

# ------------------------------  CustomUser---------------------------------- £

from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    ROLE_CHOICES = (
        ('user', 'User'),
        ('admin', 'Admin'),
    )
    
    role = models.CharField(max_length=10, choices=ROLE_CHOICES, default='user')

    def __str__(self):
        return self.username

# ------------------------------  Client_Feedback ---------------------------------- £

class Client_Feedback(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='feedbacks')
    name=models.CharField(max_length=50,blank=True,null=True)
    phone=models.CharField(max_length=12,blank=True,null=True)
    subject = models.TextField()
    messege = models.TextField()

    def __str__(self):
        return f"{self.user.username} - {self.subject[:20]}"
    
    
    
class Email_Suscribe(models.Model):
    email=models.EmailField()
    

    def __str__(self):
        return self.email
