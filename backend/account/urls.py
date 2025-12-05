from django.urls import path
from .views import *

urlpatterns = [
 
    
    path('feedback/', Client_Feedback_List.as_view(), name='feedback-list'),
    path('feedback/<int:pk>/', Client_Feedback_List.as_view(), name='feedback-delete'),
    
    path('email_suscribe/', Email_Feedback.as_view(), name='Email_Feedback'),
    path('email_suscribe/<int:pk>/', Email_Feedback.as_view(), name='Email_Feedback'),
    
    
    
    # Login API
    # path('login/', CustomLoginAPI.as_view(), name='login'),
]
