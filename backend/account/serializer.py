from rest_framework import serializers
from .models import ClientFeedback, EmailSubscribe


# -----------------  Client Feedback Serializer  -----------------

class FeedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model = ClientFeedback
        fields = '__all__'


# -----------------  Email Subscribe Serializer  -----------------

class EmailSubscribeSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmailSubscribe
        fields = '__all__'
