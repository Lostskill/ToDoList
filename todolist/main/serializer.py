from rest_framework import serializers
from .models import *

class ToDoListSerializer(serializers.ModelSerializer):
    category = serializers.CharField(source='cat.name', read_only=True)
    class Meta:
        model = ToDoLists
        fields = ['id','title','description','time_create','category','cat']

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Categorys
        fields = "__all__"