from django.urls import path
from django.views.decorators.csrf import csrf_exempt

from . import views

urlpatterns = [
    path('create-url/', csrf_exempt(views.create_url), name='create_url'),
]