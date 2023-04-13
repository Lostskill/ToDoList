from .serializer import *
from rest_framework import generics
from .models import *


class ToDoLitUser(generics.ListCreateAPIView):
    queryset = ToDoLists.objects.all()
    serializer_class = ToDoListSerializer


class ToDoListUpdate(generics.RetrieveUpdateAPIView):
    queryset = ToDoLists.objects.all()
    serializer_class = ToDoListSerializer


class ToDoListDelete(generics.RetrieveDestroyAPIView):
    queryset = ToDoLists.objects.all()
    serializer_class = ToDoListSerializer


class CategoryGet(generics.ListCreateAPIView):
    queryset = Categorys.objects.all()
    serializer_class = CategorySerializer
