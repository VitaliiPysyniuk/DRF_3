from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView

from .models import CarModel
from .serializers import CarSerializer


class ListCreateView(ListCreateAPIView):
    queryset = CarModel.objects.all()
    serializer_class = CarSerializer


class RetrieveUpdateDestroyView(RetrieveUpdateDestroyAPIView):
    queryset = CarModel.objects.all()
    serializer_class = CarSerializer
