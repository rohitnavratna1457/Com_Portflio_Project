# account/tests.py
from django.test import TestCase
from .models import Client_Feedback

class ClientFeedbackModelTest(TestCase):

    def setUp(self):
        # Create a sample feedback entry
        self.feedback = Client_Feedback.objects.create(
            name="Rohit Navratna",
            email="rohit@example.com",
            subject="Website Feedback",
            messege="Great website! Keep it up.",
            role="user"  # Add role if your model has it
        )

    def test_feedback_creation(self):
        """Test that the feedback object was created correctly."""
        self.assertEqual(self.feedback.name, "Rohit Navratna")
        self.assertEqual(self.feedback.email, "rohit@example.com")
        self.assertEqual(self.feedback.subject, "Website Feedback")
        self.assertEqual(self.feedback.messege, "Great website! Keep it up.")
        self.assertEqual(self.feedback.role, "user")  # Check role

    def test_str_method(self):
        """Test the __str__ method returns the feedback's name."""
        self.assertEqual(str(self.feedback), "Rohit Navratna")
