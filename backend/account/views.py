from rest_framework.views import APIView
from rest_framework.response import Response

from .models import ClientFeedback,EmailSubscribe
from .serializer import FeedbackSerializer,EmailSubscribeSerializer




# ----------------------------- Client_Feedback_List ------------------------
class Client_Feedback_List(APIView):
    def get(self, request, pk=None):
        """Retrieve single feedback if pk is provided, else all feedbacks."""
        if pk:  # If a primary key (pk) is provided
            feedback = ClientFeedback.objects.get(pk=pk)  # Retrieve single feedback
            serializer = FeedbackSerializer(feedback)      # Serialize single object
        else:  # If no pk is provided, retrieve all feedbacks
            feedbacks = ClientFeedback.objects.all()     # Get all feedback objects
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
        feedback = ClientFeedback.objects.get(pk=pk)
        serializer = FeedbackSerializer(feedback, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    def patch(self, request, pk):
        """Partial update of an existing feedback."""
        feedback = ClientFeedback.objects.get(pk=pk)
        serializer = FeedbackSerializer(feedback, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    def delete(self, request, pk):
        """Delete a feedback by pk."""
        feedback = ClientFeedback.objects.get(pk=pk)
        feedback.delete()
        return Response({"message": "client Feedback Deleted"})





# ----------------------------- EmailSubscribeSerializer  ------------------------
class Email_Feedback (APIView):
    def get(self, request, pk=None):
        """Retrieve single feedback if pk is provided, else all feedbacks."""
        if pk:  # If a primary key (pk) is provided
            feedback = EmailSubscribe.objects.get(pk=pk)  # Retrieve single feedback
            serializer = EmailSubscribeSerializer(feedback)      # Serialize single object
        else:  # If no pk is provided, retrieve all feedbacks
            feedbacks = EmailSubscribe.objects.all()     # Get all feedback objects
            serializer = EmailSubscribeSerializer(feedbacks, many=True)  # Serialize multiple objects

        return Response(serializer.data)  # Return JSON response

    def post(self, request):
        """Create a new feedback."""
        serializer = EmailSubscribeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    def put(self, request, pk):
        """Full update of an existing feedback."""
        feedback = EmailSubscribe.objects.get(pk=pk)
        serializer = EmailSubscribeSerializer(feedback, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    def patch(self, request, pk):
        """Partial update of an existing feedback."""
        feedback = EmailSubscribe.objects.get(pk=pk)
        serializer = EmailSubscribeSerializer(feedback, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    def delete(self, request, pk):
        """Delete a feedback by pk."""
        feedback = EmailSubscribe.objects.get(pk=pk)
        feedback.delete()
        return Response({"message": "client Feedback Deleted"})
