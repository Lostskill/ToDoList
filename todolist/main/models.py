from django.db import models

# Create your models here.


class ToDoLists(models.Model):
    title = models.CharField(max_length=30)
    description = models.CharField(max_length=500)
    time_create = models.DateTimeField(auto_now_add=True)
    time_update = models.DateTimeField(auto_now=True)
    cat = models.ForeignKey(
        'Categorys', on_delete=models.PROTECT, null=True, blank=True)


class Categorys(models.Model):
    name = models.CharField(max_length=100, db_index=True)

    def __str__(self):
        return self.name
