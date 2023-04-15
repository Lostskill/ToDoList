from .serializer import *
from rest_framework import generics
from .models import *
from rest_framework.permissions import IsAuthenticated

class ToDoLitUser(generics.ListCreateAPIView):
    serializer_class = ToDoListSerializer
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        return ToDoLists.objects.filter(user=self.request.user)


class ToDoListUpdate(generics.RetrieveUpdateAPIView):
    queryset = ToDoLists.objects.all()
    serializer_class = ToDoListSerializer
    permission_classes = (IsAuthenticated,)

class ToDoListDelete(generics.RetrieveDestroyAPIView):
    queryset = ToDoLists.objects.all()
    serializer_class = ToDoListSerializer
    permission_classes = (IsAuthenticated,)

class CategoryGet(generics.ListCreateAPIView):
    queryset = Categorys.objects.all()
    serializer_class = CategorySerializer
