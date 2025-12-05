
# Create your models here.

'''
ADMIN PANNEL

USERNAME :- rohit
PASSWORD :- 123

'''

# ------------------------------  Client_Feedback ---------------------------------- £

from django.db import models


class ClientFeedback(models.Model):
    name = models.CharField(max_length=50, blank=True, null=True)
    email = models.EmailField()
    phone = models.CharField(max_length=12, blank=True, null=True)
    subject = models.CharField(max_length=255)
    message = models.TextField()

    def __str__(self):
        return f"{self.name or 'Anonymous'} - {self.subject[:20]}"


class EmailSubscribe(models.Model):
    email = models.EmailField(unique=True)

    def __str__(self):
        return self.email
