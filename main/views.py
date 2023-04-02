from .serializer import *
from rest_framework import generics
from .models import *

class ToDoLitUser(generics.ListCreateAPIView):
    queryset = ToDoList.objects.all()
    serializer_class = ToDoListSerializer

class ToDoListUpdate(generics.RetrieveUpdateAPIView):
    queryset = ToDoList.objects.all()
    serializer_class = ToDoListSerializer

class ToDoListDelete(generics.RetrieveDestroyAPIView):
    queryset = ToDoList.objects.all()
    serializer_class = ToDoListSerializer