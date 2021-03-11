from django.urls import path
from .views import ListCreateView, RetrieveUpdateDestroyView

urlpatterns = [
    path('<int:pk>/', RetrieveUpdateDestroyView.as_view()),
    path('', ListCreateView.as_view()),
]