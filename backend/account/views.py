from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Client_Feedback,CustomUser,Email_Suscribe
from .serializer import FeedbackSerializer,CustomSerializer,Email_FeedbackSerializer
from django.views.decorators.csrf import csrf_exempt


# ----------------------------- Client_Feedback_List ------------------------

class Custom_User_Views(APIView):
    def get(self, request, pk=None):
        """Retrieve single feedback if pk is provided, else all feedbacks."""
        if pk:  # If a primary key (pk) is provided
            feedback = CustomUser.objects.get(pk=pk)  # Retrieve single feedback
            serializer = CustomSerializer(feedback)      # Serialize single object
        else:  # If no pk is provided, retrieve all feedbacks
            feedbacks = CustomUser.objects.all()     # Get all feedback objects
            serializer = CustomSerializer(feedbacks, many=True)  # Serialize multiple objects

        return Response(serializer.data)  # Return JSON response

    def post(self, request):
        """Create a new feedback."""
        serializer = CustomSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    def put(self, request, pk):
        """Full update of an existing feedback."""
        feedback = CustomUser.objects.get(pk=pk)
        serializer = CustomSerializer(feedback, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    def patch(self, request, pk):
        """Partial update of an existing feedback."""
        feedback = CustomUser.objects.get(pk=pk)
        serializer = CustomSerializer(feedback, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    def delete(self, request, pk):
        """Delete a feedback by pk."""
        feedback = CustomUser.objects.get(pk=pk)
        feedback.delete()
        return Response({"message": "client Feedback Deleted"})
    
    
    
# account/views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from .serializer import CustomLoginSerializer

class CustomLoginAPI(APIView):
    def post(self, request):
        serializer = CustomLoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']

        token, created = Token.objects.get_or_create(user=user)

        return Response({
            'token': token.key,
            'user_id': user.id,
            'username': user.username,
            'role': user.role
        })

    

# ----------------------------- Client_Feedback_List ------------------------
@csrf_exempt
class Client_Feedback_List(APIView):
    def get(self, request, pk=None):
        """Retrieve single feedback if pk is provided, else all feedbacks."""
        if pk:  # If a primary key (pk) is provided
            feedback = Client_Feedback.objects.get(pk=pk)  # Retrieve single feedback
            serializer = FeedbackSerializer(feedback)      # Serialize single object
        else:  # If no pk is provided, retrieve all feedbacks
            feedbacks = Client_Feedback.objects.all()     # Get all feedback objects
            serializer = FeedbackSerializer(feedbacks, many=True)  # Serialize multiple objects

        return Response(serializer.data)  # Return JSON response

    def post(self, request):
        """Create a new feedback."""
        serializer = FeedbackSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    def put(self, request, pk):
        """Full update of an existing feedback."""
        feedback = Client_Feedback.objects.get(pk=pk)
        serializer = FeedbackSerializer(feedback, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    def patch(self, request, pk):
        """Partial update of an existing feedback."""
        feedback = Client_Feedback.objects.get(pk=pk)
        serializer = FeedbackSerializer(feedback, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    def delete(self, request, pk):
        """Delete a feedback by pk."""
        feedback = Client_Feedback.objects.get(pk=pk)
        feedback.delete()
        return Response({"message": "client Feedback Deleted"})





# ----------------------------- Email_FeedbackSerializer  ------------------------
class Email_Feedback (APIView):
    def get(self, request, pk=None):
        """Retrieve single feedback if pk is provided, else all feedbacks."""
        if pk:  # If a primary key (pk) is provided
            feedback = Email_Suscribe.objects.get(pk=pk)  # Retrieve single feedback
            serializer = Email_FeedbackSerializer(feedback)      # Serialize single object
        else:  # If no pk is provided, retrieve all feedbacks
            feedbacks = Email_Suscribe.objects.all()     # Get all feedback objects
            serializer = Email_FeedbackSerializer(feedbacks, many=True)  # Serialize multiple objects

        return Response(serializer.data)  # Return JSON response

    def post(self, request):
        """Create a new feedback."""
        serializer = Email_FeedbackSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    def put(self, request, pk):
        """Full update of an existing feedback."""
        feedback = Email_Suscribe.objects.get(pk=pk)
        serializer = Email_FeedbackSerializer(feedback, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    def patch(self, request, pk):
        """Partial update of an existing feedback."""
        feedback = Email_Suscribe.objects.get(pk=pk)
        serializer = Email_FeedbackSerializer(feedback, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    def delete(self, request, pk):
        """Delete a feedback by pk."""
        feedback = Email_Suscribe.objects.get(pk=pk)
        feedback.delete()
        return Response({"message": "client Feedback Deleted"})
