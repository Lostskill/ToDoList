from rest_framework import serializers
from .models import *

class ToDoListSerializer(serializers.ModelSerializer):

    class Meta:
        model = ToDoList
        fields = '__all__'
