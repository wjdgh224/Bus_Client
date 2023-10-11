from django.contrib import admin
from django.urls import path, include

from myyl import views

urlpatterns = [
    path('', views.index),
]
